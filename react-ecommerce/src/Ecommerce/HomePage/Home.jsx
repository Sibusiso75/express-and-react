import React from "react";
import { useGlobalContext } from "../ContextAndReducer/cartContext";
import "../cart.css";
import { useNavigate } from "react-router-dom";
function Home() {
  const {  items, searchTerm, setSearchTerm, addToCart} =
    useGlobalContext();
 let navigate = useNavigate()
  
  function submit(e) {
    e.preventDefault();
  }

  return (
    <div>

      <form onSubmit={submit}>
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="search..."
          className="inputSearch"
        />
      </form>
      {/* <button onClick={() => all()} className="clearbtn">
        All
      </button> */}
      {/* <Categories /> */}

      <div className="cartContainer" >
        {items
          .filter((item) => {
            return (
              item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
              item.category.toLowerCase().includes(searchTerm.toLowerCase()) 

                     
           
            
            );
          })
          .map((item) => {
            return <div key={item.id}  >
               <div 
                className="itemsContainer"
               onClick={()=>navigate(`/item/${item.id}`)}
              
               
               >

        <img
        
          src={item.image}
          alt={item.title}
          style={{ width: "150px", height: "150px" }}
        />
               

        <div className="itemsAndButtons">
          <main> {item.title}</main>
          <main>R{item.price}</main>
      
        </div>
      </div>
      <br />
        

        <button className="btns" disabled={item.itemAdded}  onClick={()=>addToCart(item.id)} >
          Add to cart
        </button>
     

      
     
            </div>
            
          })}
      </div>

         
    </div>
  );
}

export default Home;