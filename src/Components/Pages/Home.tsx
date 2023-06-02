// import React from 'react';
// import { Link, Outlet } from "react-router-dom";
import homebg from "../../Assets/images/undraw_sign_in_re_o58h.svg"
import   "./Pages.scss"
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
<main className="home_page">

<h1>Get started</h1>
<img className="homeimg" src={homebg} alt="welcome image"/>
<button  className="signup_button"><Link to='/Signup'>Create an accout</Link></button>
<p className="login_text">Already have an accout ? <span className="login_link"><Link to="/Login">Log in</Link></span></p>
</main>
    </>
  )
}

export default Home;
