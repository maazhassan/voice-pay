import "./acc.css"
import {useState} from "react"
import { useNavigate } from "react-router-dom";
import CreateAccountInput from "./CreateAccInput";


export default function CreateAccount(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

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
        return;
    }

    return(
        <>
          <div className="flex justify-center">
            <div className="acc-container">
              <p>Create Account</p>
              <CreateAccountInput
                inputType="text"
                placeholder="Enter email..."
                onChange={handleEmailChange}
              />

              <CreateAccountInput 
                inputType="text"
                placeholder="Enter username..."
                onChange={handleUsernameChange}
              />

              <CreateAccountInput
                inputType="password"
                placeholder="Enter password..."
                onChange={handlePasswordChange}
              />
              <button onClick={handleAccountCreation}>Create!</button>
            </div>
          </div>
        </>
    );
}