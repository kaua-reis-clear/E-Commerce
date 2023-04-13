import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_TOTAL_PRICE, UPDATE_TOTAL_PRODUCTS } from "../constants/cartConstants";

export const INITIAL_STATE = {products: [], totalPrice: 0, totalProducts: 0}

export default function cartReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_TO_CART:
      return { ...state, products: action.payload };
    
    case REMOVE_FROM_CART:
      return { ...state, products: action.payload };

    case UPDATE_TOTAL_PRICE:
      return { ...state, totalPrice: action.payload };

    case UPDATE_TOTAL_PRODUCTS:
      return { ...state,  totalProducts: action.payload };

    default:
      throw new Error();
  }
}