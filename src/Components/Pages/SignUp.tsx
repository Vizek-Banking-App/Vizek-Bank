import { MdOutlinePersonOutline} from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosPhonePortrait } from "react-icons/io";
import {AiOutlineLock} from "react-icons/ai"
import "./styles.scss";


export default function SignUp() {
  return (
    <>
      <div className="signUp-container">
        <h2>Sign up for an account</h2>
        <form className="signupForm">
          <div>
            <MdOutlinePersonOutline color="red" size="22" className="loginIcons"/>
            <input type="text" id="firstName" placeholder="First Name" />
          </div>
          <div>
            <MdOutlinePersonOutline color="red" size="22" className="loginIcons"/>
            <input type="text" id="lastName" placeholder="Last Name" />
          </div>
          <div>
            <AiOutlineMail color="red" size="22" className="loginIcons"/>
            <input type="text" id="email" placeholder="Email" />
          </div>
          <div>
             <IoIosPhonePortrait color="red" size="22" className="loginIcons"/>
            <input type="text" id="phoneNumber" placeholder="Contact Number" />
          </div>
          <div>
            <AiOutlineLock color="red" size="22" className="loginIcons"/>
            <input type="text" id="PassWord" placeholder="Choose Password" />
          </div>
          <button>create Account</button>
        </form>
      </div>
    </>
  );
}
