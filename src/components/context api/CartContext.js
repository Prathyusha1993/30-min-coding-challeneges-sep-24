import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    }

    const removeFromCart = (index) => {
        setCart(cart.filter((_, i) => i !== index));
    }

    return (
        <CartContext.Provider value={{cart, addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}