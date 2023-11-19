import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useGlobalContext } from "../ContextAndReducer/cartContext"
import  "../cart.css"
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"
function Item(){
    const {id} = useParams()
    let navigate = useNavigate()
    const {items, addToCart} = useGlobalContext()
     
     
    
    return <div>
      <button onClick={()=>navigate("/")}
      style={{ margin:"10px",background:"green", color:"white", padding:"5px"}}
      >
        Back Home
      </button>
        <div>
        {
            items.filter((item)=>{
             return item.id === parseInt(id)
            }).map((item)=>{
                return <div key={item.id}
               
                >
                     <div>
                     <span className="previousAndNext" onClick={()=>navigate(`/item/${item.id<=1?
        items.length:item.id>items.length?1:item.id-1}`)}>
        <FaChevronLeft/>
      </span>
        <img
          src={item.image}
          alt={item.title}
          style={{ width: "150px", height: "150px" }}
        />
          <span className="previousAndNext" onClick={()=>navigate(`/item/${item.id<1?
        items.length:item.id>items.length-1?1:item.id+1}`)}>
        <FaChevronRight/>
      </span>
        <div className="itemsAndButtons">
       
          <main> {item.title}</main>
          <main>{item.details}</main>
          <main>Price - R{item.price}</main>
        
        </div>
       
        
          <br />
        <button disabled={item.itemAdded}  onClick={()=>addToCart(item.id)} style={{padding:"10px", borderRadius:"10px",width:"fit-content",background:"black", color: "white" }}>
          Add to cart
        </button>
      </div>
   
     
     

                </div>
            })
        }
        
        </div>
       
       
    </div>
}
export default Item