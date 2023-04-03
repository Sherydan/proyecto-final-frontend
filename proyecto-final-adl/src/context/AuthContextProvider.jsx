import React from "react";
import axios from "axios";
export const AuthContex = React.createContext();

const AuthContexProvider = ({ children }) => {

    const [isAuth, setIsAuth] = React.useState(false);
    const [token, setToken] = React.useState("");
    const [authUser, setAuthUser] = React.useState({});
    
    React.useEffect(() => {
        const token = localStorage.getItem("tk");
     
        if (token) {
            axios.defaults.headers.common["Authorization"] = token; // for all requests
            setIsAuth(true);
            setToken(token);
        } 
    }, []);

    return (
        <AuthContex.Provider value={{ isAuth, setIsAuth, authUser, setAuthUser, token}}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthContexProvider;
