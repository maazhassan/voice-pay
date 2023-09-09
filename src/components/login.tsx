import { useState } from "react";
import React from "react";
import {motion} from "framer-motion";
import Landing from "./landing";
import {Link} from "react-router-dom";

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [click, setClicked] = useState(false);

    function handleUsernameChange(event : React.ChangeEvent<HTMLInputElement>)   {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event : React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);

    }

    const buttonVars = {
        whileHover : {
            scale : 1.05,
            transition : {
                duration : 0.25,
            },
        },
    }

    return(
        <>
            <div className="container">
                <div className="login">
                    <input type="text" placeholder=" Username..." onChange={handleUsernameChange}></input>
                    <span className="password-span">
                       <input type="password" placeholder=" Password..." onChange={handlePasswordChange}></input>
                        <a href="#">Forgot Password?</a> 
                    </span>

                    <motion.button variants={buttonVars} whileHover="whileHover">Login</motion.button>
                    
                    <span>Don't have an account? <a href="#" className="click-me" style={{color: "#1A73E8"}}>Click here.</a></span>

                    <div className=""></div>
                </div>
            </div>
        </>
    );
}