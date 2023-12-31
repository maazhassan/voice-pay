import {useState} from "react"
import { useNavigate } from "react-router-dom";
import CreateAccountInput from "./CreateAccInput";
import {motion} from "framer-motion"


export default function CreateAccount(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const className = "mb-[50px] w-[288px] h-[40px] rounded-md border border-black indent-2.5 text-[14px]";
    const navigator = useNavigate();

    function handleUsernameChange(event : React.ChangeEvent<HTMLInputElement>){
        setUsername(event.target.value);
        console.log(`Username: ${username}`)
    }

    function handlePasswordChange(event : React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
        console.log(`Current Password: ${password}`)
    }

    function handleEmailChange(event : React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
        console.log(`Current E-mail: ${email}`)
    }

    function handleAccountCreation() {
        console.log("Account Created!");
        navigator("/")
    }

    return(
        <>
          <div className="flex justify-center">
            <div className="flex flex-col justify-center  mt-[200px] items-center w-[450px] h-[575px] rounded-md text-base shadow-2xl ">

              <p className="mb-[50px] text-[16px]">Create Account</p>
              
              <CreateAccountInput
                inputType="text"
                placeholder="Enter email..."
                onChange={handleEmailChange}
                style={className}
              />

              <CreateAccountInput 
                inputType="text"
                placeholder="Enter username..."
                onChange={handleUsernameChange}
                style={className}
              />

              <CreateAccountInput
                inputType="password"
                placeholder="Enter password..."
                onChange={handlePasswordChange}
                style={className}
              />
              
              <motion.button onClick={handleAccountCreation} className="mt-[25px] bg-square-blue w-[115px] h-[43px] rounded-md text-white"
                whileHover={{scale: 1.05}}
              >Create!</motion.button>

            </div>
          </div>
        </>
    );
}