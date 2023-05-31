import { Button } from "../Atom/Button";
import { useState } from "react";
import InputField from "../Atom/InputField";
import PasswordInputField from "../Atom/PasswordInputField";
import HeadingText from "../Atom/HeadingText";
import "./Pages.scss";

export default function SignUp() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<any>();

  console.log(firstName, lastName, email, password,phoneNumber);

  return (
    <>
      <div className="signUp-container">
        <div>
        <HeadingText content="Vizek Bank"/>
        <p>Open yourself up to a world of possibilities</p>

        </div>
        <h2>Sign up for an account</h2>
        <form className="signupForm">
          <div>
            <InputField
              type="text"
              id="firstName"
              placeholder="John"
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
              id="lastName"
              placeholder="Austine"
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
              placeholder="johnaustine@gmail.com"
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
              placeholder="080 4849 3839"
              label="Phone Number"
              for="phoneNumber"
              onchange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
          <div>
            <PasswordInputField
              placeholder="Choose Password"
              onchange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <Button
            title="Signup"
            style={{ color: "red", padding: "0.5rem" }}
            onClick={(e) => {
              console.log(e);
            }}
          />
        </form>
      </div>
    </>
  );
}
