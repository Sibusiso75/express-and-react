import React from "react";
import { useGlobalContext } from "../ContextAndReducer/cartContext";
// import { FaShoppingBag, FaHome, FaTasks } from "react-icons/fa";

import "../cart.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const {  amount, items } = useGlobalContext();
const navigate = useNavigate()
  return (
    <div>
      <header className="cartNav">
        <span className="h3"><b>Ecommerce</b></span>
        <main className="shoppingCartAmount" onClick={()=>navigate(`/cart`)}>
          <button className="shoppingCart" >🛒</button>
          <span className={items.length > 0 ? "amount" : null}>
            {amount}
          </span>
        </main>
      </header>
    </div>
  );
}

export default Navbar;