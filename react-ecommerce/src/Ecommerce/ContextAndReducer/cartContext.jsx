 import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    useReducer,

  } from "react";
  import {toast} from "react-toastify"
import cartItems from "../Products";
  import reducer from "./reducer"
  
  const storage = localStorage.getItem("items")?
JSON.parse(localStorage.getItem("items")): []

  const initialState = {
    items:cartItems,
    total: 0,
    amount: 0,
    
    
  };

  const AppContext = createContext();
  function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [searchTerm, setSearchTerm] = useState("");
  
    function remove(id) {
      dispatch({ type: "REMOVE", payload:id});

    }
    function addToCart(id){
      dispatch({type:"ADD_TO_CART", payload:id})

      toast.success("Item has been added to the cart")


    }
  
    
    
    function increase(id) {
      dispatch({ type: "INCREASE", payload:id});

    }
    function decrease(id){
      dispatch({ type: "DECREASE", payload:id});
    }
    
    useEffect(()=>{
      dispatch({type:"TOTALS"})
    },[state.items])

    
    
    return (
      <AppContext.Provider
        value={{
          ...state,
          
  
          remove,
          increase,
          decrease,
          addToCart,
  
          searchTerm,
          setSearchTerm,
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
  export const useGlobalContext = () => {
    return useContext(AppContext);
  };
  
  export { AppProvider, AppContext };