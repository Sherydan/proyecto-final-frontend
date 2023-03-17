import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';


const LayoutPublic = (props) => {


    return (
        
        <div >
            <Navbar/>
            {props.children}
            <Footer/>
        </div>
    
    )
}

export default LayoutPublic;