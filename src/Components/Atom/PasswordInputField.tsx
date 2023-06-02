import {FaRegEyeSlash} from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { useState } from "react";
import "./Atoms.scss"

type passwordType = {
  placeholder: string;
  onchange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function PasswordInputField(props: passwordType) {
  const [types, setTypes] = useState<string>("password")

  const eyeOpen = ()=>{
   setTypes("text")
  }

  const eyeClosed = () =>{
    setTypes("password")
  }


  return (
    <>
      <div className="inputField">
        <label htmlFor="password">Password</label>
        <input
          type={types}
          id="eye"
          placeholder={props.placeholder}
          onChange={props.onchange}
        />
        <div className="Eye">{types === "text" ?  <span onClick={eyeClosed}><FaRegEye /></span> :  <span onClick={eyeOpen}><FaRegEyeSlash /></span> }</div>
      </div>
    </>
  );
}
