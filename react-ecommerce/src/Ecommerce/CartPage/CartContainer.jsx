import React from "react";
import { useGlobalContext } from "../ContextAndReducer/cartContext";
import {  useNavigate } from "react-router-dom";
// import Categories from "./Categories";
import "../cart.css";
import {FaPlusCircle, FaMinusCircle, FaTrash} from "react-icons/fa"


// npx browserslist@latest --update-db - to update the browser
function CartContainer() {
  const {  items, total, increase, decrease,remove} =
    useGlobalContext(); 
    let navigate = useNavigate()
  if (items.length === 0) {
    return (
      <div className="emptyBag">
        <h3>Your bag is currently empty</h3>
        <main className="totalAndClear">
          <span className="total">total - R{total}</span>
        </main>
      </div>
    );
  }
 
  

  return (
    <div>
      <h3 className="bag">Your bag</h3>
      <br />
      <button onClick={()=>navigate("/")}
      style={{ margin:"10px",background:"green", color:"white", padding:"5px"}}
      >
        Back Home
      </button>
      <br />
      
      {/* <button onClick={() => all()} className="clearbtn">
        All
      </button> */}
      {/* <Categories /> */}

      <main className="cartContainer">
        {items.filter((item)=>{
          return item.itemAdded===true
        })
     .map((item) => {
            return <div key={item.id}>
              <div>
                <div className="cart">

        <img
    
    src={item.image}
      alt={item.title}
      style={{ width: "150px", height: "150px" }}
      />

        <div className="itemsAndButtons">
          <main> {item.title}</main>
          <main>{item.details}</main>
          <main>Price - R{item.price}</main>
        </div>
      </div>
    
      <br />

      
        <button disabled={item.amount>=10} onClick={() => increase(item.id)} style={{color: "black" }}>
          <FaPlusCircle/>
        </button>
        <button style={{ color: "black",fontWeight:"bold"}}>{item.amount}</button>

       

        <button disabled={item.amount<=1} onClick={() => decrease(item.id)}style={{ color: "black" }}>
        <FaMinusCircle/>
        </button>
        <button onClick={() => remove(item.id)}style={{ color: "black" }}
        >
          <FaTrash/>
        </button>
          </div>
      
            </div>
          })}
      </main>
      <br />

      <hr />

      <main className="totalAndClear">
        <span className="total">total - R{total}</span>

       
      </main>
    </div>
  );
}

export default CartContainer;