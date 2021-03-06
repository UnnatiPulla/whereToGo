import React from "react"
import "./SignIn.css"

import logo from "./logo.png"
import googleLogo from "./google.svg"
import {auth, googleProvider} from './base.js'
const SignIn = () => {
    const authenticate = () => {
            auth.signInWithPopup(googleProvider)
          }
         
        
return (
    <div className ="SignIn"> 
        <header className="Header">
            <img src={logo} alt=""/>
            <span className = "title"> Where To Go</span>
        </header>
        <main>
            <button disabled >
            <h1>Please Sign In Below!</h1>
            </button>
            <button className="google" onClick={authenticate}>
                <img src={googleLogo} alt ="Google Logo"/>
                Sign In with Google
            </button>

        </main>   
    </div>

);
}

export default SignIn