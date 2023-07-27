import React from 'react'

const NavBar = ({cart}) => {
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