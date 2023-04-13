import { createContext, useReducer, useState } from 'react';
import cartReducer, { INITIAL_STATE } from '../reducers/cartReducer';
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_TOTAL_PRICE, UPDATE_TOTAL_PRODUCTS } from '../constants/cartConstants';

export const CartContext = createContext(INITIAL_STATE);

export default function CartProvider({children}) {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  function addToCart(product) {
    const updatedCart = state.products.concat(product);

    updateTotalProducts(updatedCart);
    updateTotalPrice(updatedCart);
  
    dispatch({
      type: ADD_TO_CART,
      payload: updatedCart
    })
  }

  function removeFromCart(product) {
    const updatedCart = state.products.filter(currentProduct => currentProduct.id !== product.id);

    updateTotalProducts(updatedCart);
    updateTotalPrice(updatedCart);
  
    dispatch({
      type: REMOVE_FROM_CART,
      payload: updatedCart
    });
  }
  
  function updateTotalPrice(products) {
    let totalPrice = 0;
  
    products.forEach(product => totalPrice += product.price);
  
    dispatch({
      type: UPDATE_TOTAL_PRICE,
      payload: totalPrice
    })
  }

  function updateTotalProducts(products) {
    dispatch({
      type: UPDATE_TOTAL_PRODUCTS,
      payload: products.length
    })
  }

  const values = {
    state,
    addToCart,
    removeFromCart
  }

  return (
    <CartContext.Provider value={values}>{children}</CartContext.Provider>
  );
} 