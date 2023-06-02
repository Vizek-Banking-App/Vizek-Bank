import { Button } from "../Atom/Button";
import { useState } from "react";
import InputField from "../Atom/InputField";
import PasswordInputField from "../Atom/PasswordInputField";
import HeadingText from "../Atom/HeadingText";
import signup from "../../Assets/images/signup.jpg";
import "./Pages.scss";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  console.log(firstName, lastName, email, password);

  return (
    <>
      <section className="signupContainer">
        <div className="signupImg">
          <img src={signup} alt="" />
          <h2>Welcome</h2>
        </div>
        <div className="signUp">
          <HeadingText content="Sign up for an account" />

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
              <PasswordInputField
                placeholder="Choose Password"
                onchange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <Button
              title="Signup"
              onClick={(e) => {
                console.log(e);
              }}
            />
            <div className="footNote">
              <p>By submiting this form, I agree to Vizek's</p>
              <a href="#">Terms & Services</a> and{" "}
              <a href="#">Privacy Policies</a>
              <p className="footNoteLast">
                Already have an Account,{" "}
                <Link to="/Login" className="link">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
