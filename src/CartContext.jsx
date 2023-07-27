
import { createContext, useContext,useState } from "react";

const CartContext=createContext();

const CartProvider = ({children}) =>{
    const[cart,setcart] =useState([]);
    const addToCart =(product)=>{
        setcart((prevCart)=>[...prevCart,product])
    }

return(
    <CartContext.Provider value={{cart,addToCart}}>
    {children}
    </CartContext.Provider>
);
};
export {CartContext,CartProvider};