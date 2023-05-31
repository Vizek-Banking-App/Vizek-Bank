import { Button } from "../Atom/Button";
import { useState } from "react";
import InputField from "../Atom/InputField";
import "./Pages.scss";

export default function SignUp() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<any>();


  return (
    <>
      <div className="signUp-container">
        <h2>Sign up for an account</h2>
        <form className="signupForm">
          <div>
            <InputField
              type="text"
              id="firstName"
              placeholder="First Name"
              label="First Name"
              for="firstName"
              onchange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div>
            <InputField
              type="text"
              id="firstName"
              placeholder="Last Name"
              label="Last Name"
              for="lastName"
              onchange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div>
            <InputField
              type="text"
              id="email"
              placeholder="Email"
              label="Email"
              for="Email"
              onchange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <InputField
              type="text"
              id="phoneNumber"
              placeholder="Contact Number"
              label="Phone Number"
              for="phoneNumber"
              onchange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
          <div>
            <InputField
              type="password"
              id="password"
              placeholder="Password"
              label="Password"
              for="password"
              onchange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
<Button title="Signup" style={{color:"red", padding:"0.5rem"}} onClick={(e)=>{
 console.log(e)
}}/>
          
        </form>
      </div>
    </>
  );
}
