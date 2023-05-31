// import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Components/Pages/SignUp"
import Login from "./Components/Pages/Login";
import Home from "./Components/Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';

function App() {

 return(
<>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Login" element={<Login/>}/>
  <Route path="/SignUp" element={<SignUp/>}/>
  <Route/>    
</Routes>
</BrowserRouter>
</>
 )
}

// const Root =() =>{
//   return <>
//   <div>
//     <Link to="/">
//     Signup
//     </Link>
//     <Link to="/signin">
//     Data
//     </Link>

//     <Link to="/signup">
//     Signin
//     </Link>
//   </div>

//   <div>
//     <Outlet/>
//   </div>
//   </>
// }

export default App
