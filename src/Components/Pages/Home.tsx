// import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
    <div>
      <Link to="/">
      Home
      </Link>
      <Link to="/signin">
      signin
      </Link>
  
      <Link to="/signup">
      Signup
      </Link>
    </div>
  
    {/* <div>
      <Outlet/>
    </div> */}
    </>
  )
}

export default Home;
