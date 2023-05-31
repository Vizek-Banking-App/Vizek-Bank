import { Link } from "react-router-dom";
import './styles.scss'
export default function Login(){
    return <>
    

    <p className="login_text">Don't have an accout ? <span className="login_link"><Link to="/Signup">Create an accout</Link></span></p>
    </>
}