import React from 'react'
import { CartProvider } from './CartContext';
import ProductList from './ProductList';
import Cart from './Cart';

const ContextApp = () => {
    return (
      <div>
        <CartProvider>
            <div>
                <ProductList />
                <Cart />
            </div>
        </CartProvider>
      </div>
    )
}

export default ContextApp;