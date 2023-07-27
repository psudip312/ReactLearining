import React, { useContext } from 'react'
import ProductItem from './ProductItem';
import { CartContext } from './CartContext';



const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];
  
const ProductList = () => {

  const {addToCart} =useContext(CartContext)
  return (
    <div>
    <h2>Product List</h2>
    {products.map((product) => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
  ))}
    </div>
  )
}

export default ProductList