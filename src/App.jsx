import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './ProductList'
import NavBar from './NavBar'
import ShoppingCart from './ShoppingCart'

function App() {
const[cart,setcart]=useState([]);

const addtoCart = (product) => {
  setcart((prevCart)=>[...prevCart,product]);
};
console.log("cartkcha",cart);

  return (
    <>
    <NavBar cart={cart}/>
  <ProductList addToCart={addtoCart}/>
  <ShoppingCart cart={cart} />

    </>
  )
}

export default App
