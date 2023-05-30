import { Button } from "../Atom/Button";
import {useState} from "react"
import InputField from "../Atom/InputField";
import "./styles.scss";


export default function SignUp() {
 const [firstName, setFirstName] = useState<string>("")
 const [lastName, setLastName] = useState<string>("")
 const [email, setEmail] = useState<string>("")
 const [password, setPassword] = useState<string>("")
 const [phoneNumber, setPhoneNumber] = useState<string>("")

  return (
    <>
      <div className="signUp-container">
        <h2>Sign up for an account</h2>
        <form className="signupForm">
          <div>
            <InputField type="text" id="firstName" placeholder="First Name" label="First Name" for="firstName" onchange={(e)=>{
              setFirstName(e.target.value)
            }}/>
          </div>
          <div>
            <InputField type="text" id="firstName" placeholder="Last Name" label="Last Name" for="lastName" onchange={(e)=>{
              setLastName(e.target.value)
            }}/>
          </div>
          <div>
            <InputField type="text" id="email" placeholder="Email" label="Email" for="Email" onchange={(e)=>{
             setEmail(e.target.value)
            }}/>
          </div>
         

          <button>create Account</button>
        </form>
      </div>
    </>
  );
}
