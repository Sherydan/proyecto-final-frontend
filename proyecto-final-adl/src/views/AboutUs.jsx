import React from "react";
import { AuthContex } from "../context/AuthContextProvider";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const AboutUs = () => {
    const { authUser } = React.useContext(AuthContex);
    
    return (
        <>

        <div>
        <h1>Hi</h1>
        <p>
            Lorem ipsum dolor sit ame
        </p>
        </div>

        </>
    )

}

export default AboutUs;