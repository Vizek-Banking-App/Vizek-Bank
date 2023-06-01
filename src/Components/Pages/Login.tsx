import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import login from "../../Assets/images/login.avif";
import InputField from "../Atom/InputField";
import PasswordInputField from "../Atom/PasswordInputField";
import  {Button}  from "../Atom/Button";
import google_icon from "../../Assets/images/search.png";


export default function Login() {
    const [email, setEmail] = useState<string>("");
const [password, setPassword] = useState<string>("");

    const logInfunction = ()=>{
        console.log("log_in")
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
            label="Your emial"
            placeholder="johndoe@gmail.com"
            for="email"
            id="email"
            onchange={(e)=>{ setEmail(e.target.value)}}
          />
        <PasswordInputField
         placeholder="****"
         onchange={(e)=>{setPassword(e.target.value)}}/>
    
         <Button  title="Login"  onClick={logInfunction}/>
    
    
         <div className="option_text">
            <div><hr/></div>
            <p>or</p>
            <div><hr/></div>
         </div>
         <button className="google_button"> <img src={google_icon} alt="google_icon"/><span>Continue with Google</span></button>
          <p className="login_text">
            Don't have an accout ?{" "}
            <span className="login_link">
              <Link to="/Signup">Create an accout</Link>
            </span>
          </p>
        </section>
      </main>
    </>
      );
}
