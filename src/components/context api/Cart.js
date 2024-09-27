import React from 'react'
import { useCart } from './CartContext'

const Cart = () => {
    const {removeFromCart, cart} = useCart();
  return (
    <div>
        <h2>Cart</h2>
        <ul>
            {cart.length > 0 ? (cart.map((item, index) => {
                return (
                    <li key={index}>
                        {item}
                        <button onClick={() => removeFromCart(index)}>Remove</button>
                    </li>
                )
            })) : (
                <p>Cart is Empty</p>
            )}
        </ul>
    </div>
  )
}

export default Cart