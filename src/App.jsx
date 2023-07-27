import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductList from "./ProductList";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";
import { CartProvider } from "./CartContext";

function App() {

  return (
    <>
      <CartProvider>
        <NavBar />
        <ProductList />
        <ShoppingCart />
      </CartProvider>
    </>
  );
}

export default App;
