import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";


function App() {
  return (
    <>
      <Routes>
         <Route exact path="/" element={<Home/>}></Route>
         <Route path="login" element={<Login/>}></Route>
         <Route path="signup" element={<Signup/>}></Route>
         {/* <Route path="/" element={<Home/>}></Route> */}
      </Routes>
    </>
  );
}

export default App;
