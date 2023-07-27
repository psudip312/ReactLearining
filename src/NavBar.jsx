import React, { useContext } from 'react'
import { CartContext } from './CartContext'

const NavBar = () => {
    const {cart}=useContext(CartContext)
  return (
    <div>
    <nav>
    <h1>Shopping Cart</h1>
    <p>Cart Items: {cart.length}</p>
    </nav>
    </div>
  )
}

export default NavBar