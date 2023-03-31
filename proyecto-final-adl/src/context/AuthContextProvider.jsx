import React from "react";

export const AuthContex = React.createContext();

const AuthContexProvider = ({ children }) => {
    const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    const REGISTER_STORE_URL="";

    const [isAuth, setIsAuth] = React.useState(false);
    const [authUser, setAuthUser] = React.useState({});

    React.useEffect(() => {
        const token = localStorage.getItem("tk");
      
        if (token) {
            setIsAuth(true); console.log("token auth",token);
            // hacer persistir el auth    
        } 
    }, []);

    return (
        <AuthContex.Provider value={{ isAuth, setIsAuth, authUser, setAuthUser}}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthContexProvider;
