import React from "react";
import Navbar from "./Ecommerce/CartNavbar";
import CartContainer from "./Ecommerce/CartPage/CartContainer";
import { useGlobalContext } from "./Ecommerce/ContextAndReducer/cartContext";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ReactLoading from "react-loading"
import Home from "./Ecommerce/HomePage/Home";
import "./Ecommerce/cart.css";
import Item from "./Ecommerce/SinglePage/Item";
import "./Ecommerce/cart.css"
function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div>
        <ReactLoading type="spinningBubbles" color="gray" height={500} width={300}/>
      </div>
    );
  }
  return (
    <BrowserRouter>
      <Navbar  />
      <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path="/cart" element={<CartContainer/>}></Route>
      <Route path="/item/:id" element={<Item/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;