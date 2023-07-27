// ShoppingCart.js
import React from 'react';

const ShoppingCart = ({ cart }) => {
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
