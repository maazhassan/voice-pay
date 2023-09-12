import { useState } from "react";
import React from "react";
import {motion} from "framer-motion";
import LoginInput from "./LoginInput";
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
    <div className="flex justify-center">
      <div className="text-sm flex flex-col items-center shadow-lg rounded-lg w-1/4 my-[10%] pb-6 pt-2">
        <LoginInput 
          type="text"
          placeholder=" Username..."
          onChange={e => handleUsernameChange(e)}
          className="my-12"
        />
        <span className="flex flex-col">
          <LoginInput
            type="password"
            placeholder=" Password..."
            onChange={e => handlePasswordChange(e)}
          />
          <a href="#" className="text-hyperlink my-2 self-end hover:underline">Forgot Password?</a> 
        </span>

        <Link to="/home">
          <motion.button 
            variants={buttonVars} 
            whileHover="whileHover"
            className="bg-square-blue text-white w-[125px] h-[40px] rounded-md my-16"
          >
            Login
          </motion.button>
        </Link>
        
        
        <span className="flex flex-row">
          Don't have an account?&nbsp;
          <Link to="/create">
            <p className="text-hyperlink hover:underline">Click here.</p>
          </Link>
          
        </span>
      </div>
    </div>
  );
}