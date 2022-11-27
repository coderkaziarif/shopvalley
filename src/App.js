import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import LoginSignup from "./components/Auth/LoginSignup/LoginSignup";
import ProductInfo from "./components/ProductInfo/ProductInfo";


function App() {

  return (
    <>
      <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="login" element={<LoginSignup/>}></Route>
         <Route path="productInfo/:id" element={<ProductInfo/>}></Route>
         <Route path="/*" element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
