import { useState } from "react";
import { Link } from "react-router-dom";
import "./Pages.scss";
import login from "../../Assets/images/login.avif";
import InputField from "../Atom/InputField";
import PasswordInputField from "../Atom/PasswordInputField";
import  {Button}  from "../Atom/Button";
import { GoogleButton } from "../Atom/GoogleButton";


export default function Login() {
    const [email, setEmail] = useState<string>("");
const [password, setPassword] = useState<string>("");

    const logInfunction = ()=>{
        console.log("log_in")
        console.log(email, password)
    }
    
    return (
    <>
      <main className="login_page">
        <section>
          <img src={login} className="login_img" alt="login image" />
        </section>
        <section>
            <h2>Log in to your account</h2>
          <InputField
            type="email"
            label="Your email"
            placeholder="johndoe@gmail.com"
            for="email"
            id="email"
            onchange={(e)=>{ setEmail(e.target.value)}}
          />
        <PasswordInputField
         placeholder="⁕⁕⁕⁕⁕⁕⁕⁕"
         onchange={(e)=>{setPassword(e.target.value)}}/>
    
         <Button  title="Login"  onClick={logInfunction}/>
    
    
         <div className="option_text">
            <div><hr/></div>
            <p>or</p>
            <div><hr/></div>
         </div>
         <GoogleButton
         text="Continue with google"
         Onclick={logInfunction}/>
          <p className="login_text">
            Don't have an account ?{" "}
            <span className="login_link">
              <Link to="/Signup">Create an account</Link>
            </span>
          </p>
        </section>
      </main>
    </>
      );
}
