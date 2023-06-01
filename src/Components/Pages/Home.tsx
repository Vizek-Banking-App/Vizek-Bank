import homebg from "../../Assets/images/get_started.svg";
import "./styles.scss";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <main className="home_page">
        
<img className="homeimg" src={homebg} alt="welcome image" />
          <h1>Get started</h1>
          <button className="signup_button">
            <Link to="/Signup">Create an accout</Link>
          </button>
          <p className="login_text">
            Already have an accout ?{" "}
            <span className="login_link">
              <Link to="/Login">Log in</Link>
            </span>
          </p>
      </main>
    </>
  );
};

export default Home;
