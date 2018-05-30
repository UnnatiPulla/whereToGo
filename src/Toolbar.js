import React from "react"
import logo from "./logo.png"
import newIcon from "./new.png"
import newHover from "./new-hover.png"
import "./Toolbar.css"



const Toolbar = ({resetCurrentLocation}) =>{
    
    
        return (
            <nav className ="Toolbar">

                <div className = "logo">
                    <img src = {logo} alt ="whereToGoLogo"/>
                </div>

                <a className ="new-location" onClick = {resetCurrentLocation} >
                    <img src={newIcon} alt = "Add new location"/>
                    <img className="Hovered" src={newHover} alt="Add new location"/>
                    
                </a>

                <div className = "SignOut">
                    <button> 
                        Sign Out
                        <i className ="fas fa-sign-out-alt"></i>
                    </button>
                </div>

            </nav>
        );
    
}

export default Toolbar