import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";


function App() {
  return (
    <>
      <Routes>
         <Route exact path="/" element={<Home/>}></Route>
         {/* <Route path="/" element={<Home/>}></Route>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/" element={<Home/>}></Route> */}
      </Routes>
    </>
  );
}

export default App;
