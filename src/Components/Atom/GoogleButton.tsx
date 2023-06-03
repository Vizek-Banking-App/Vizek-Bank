type googlebutton_prop = {
  text: string;
  Onclick: React.MouseEventHandler<HTMLButtonElement>;
}

import google_icon from "../../Assets/images/search.png";
import "./Atoms.scss";
export const GoogleButton = (props:googlebutton_prop ) => {
  return (
<button  onClick={props.Onclick} className="google_button"> <img src={google_icon} alt="google_icon"/><span>{props.text}</span></button>
  )
}
