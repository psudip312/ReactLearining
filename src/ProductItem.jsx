import React from 'react'

const ProductItem = ({ product, addToCart }) => {
  return (
    <>
    <h3>{product.name}</h3>
    <p>Price: ${product.price}</p>
    <button onClick={() => addToCart(product)}>Add to Cart</button>
    </>
 
  )
}

export default ProductItem