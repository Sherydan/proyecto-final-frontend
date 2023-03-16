import React from "react";
import Charts from "../components/Charts";
import Menu from "../components/Menu"
import Navbar from "../components/Navbar";
export default function Gallery () {
    return(
        <>  
        <Navbar/>
        <div className="gallery-charts d-flex">
            <Menu/>
            <Charts/>
        </div>
        </>
      
    )
}