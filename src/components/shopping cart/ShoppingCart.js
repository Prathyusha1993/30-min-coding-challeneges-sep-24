import React, { useState } from 'react'

const ShoppingCart = () => {
    const [cart, setCart] = useState([]);
    const products = ['MacBook', 'iPhone', 'iPad', 'Apple Watch', 'AirPods', 'Apple Tv', 'Homepod', 'iPod Touch', 'Accessories'];

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    };

    const handleRemoveCart = (index) => {
        setCart(cart.filter((_, i) => i != index))
    } 

  return (
    <div>
        <h2>Shopping Cart</h2>
        {products.map((product, index) => {
            return (
                <div key={index}>
                    <h3>{product}</h3>
                    <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
            )
        })}
        <ul>
            {cart.map((item, index) => (
                <li key={index}>
                    {item}
                    <button onClick={() => handleRemoveCart(index)}>Remove From Cart</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ShoppingCart;