import React from "react";
import axios from "axios";
export const AuthContex = React.createContext();

const AuthContexProvider = ({ children }) => {
    // const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    // const REGISTER_STORE_URL="";

    const [isAuth, setIsAuth] = React.useState(false);
    const [token, setToken] = React.useState("");
    const [authUser, setAuthUser] = React.useState({});
    
    React.useEffect(() => {
        const token = localStorage.getItem("tk");
     
        if (token) {
            axios.defaults.headers.common["Authorization"] = token; // for all requests
            setIsAuth(true);
            setToken(token);
    
            // hacer persistir el auth    
        } 
    }, []);

    return (
        <AuthContex.Provider value={{ isAuth, setIsAuth, authUser, setAuthUser, token}}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthContexProvider;
