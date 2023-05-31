// import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Components/Pages/SignUp"
import Login from "./Components/Pages/Login";
import Home from "./Components/Pages/Home";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import './App.css';

function App() {

  const router = createBrowserRouter(
createRoutesFromElements(
<Route path="/" element={<Home/>}>
<Route path="/signup" element={<SignUp/>} />
<Route path="signin" element={<Login/>}/>
</Route>
)
  )

  return     (
<>
<RouterProvider router={router}/>
<div>home page</div></>
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
