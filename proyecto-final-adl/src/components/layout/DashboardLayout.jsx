import React from "react";
import Navbar from "../common/navbar/Navbar";
import Menu from "../../views/MenuView";




const PrivateLayout = (props) => {

    return (
        <>
            <Navbar />
            <div className="container-fluid">
              
                <div className="row">
                    <Menu />
                    
                    {props.children}
                  
                </div>

                
            </div>
        </>
    );
};

export default PrivateLayout;
