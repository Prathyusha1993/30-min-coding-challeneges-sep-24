import React from 'react'
import { useCart } from './CartContext'

const ProductList = () => {
    const {addToCart} = useCart();
    const products = ['MacBook', 'iPhone', 'iPad', 'Apple Watch', 'AirPods', 'Apple Tv', 'Homepod', 'iPod Touch', 'Accessories']
  return (
    <div>
        <h2>Products List</h2>
        {products.map((product, index) => {
            return (
                <div>
                    <h3>{product}</h3>
                    <button onClick={() => addToCart(product)}>Add To Cart</button>
                </div>
            )
        })}
    </div>
  )
}

export default ProductList;