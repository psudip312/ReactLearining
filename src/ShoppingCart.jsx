// ShoppingCart.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const ShoppingCart = () => {
    const {cart}=useContext(CartContext);
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
