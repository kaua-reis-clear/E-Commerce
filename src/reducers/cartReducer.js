import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_TOTAL_PRICE, UPDATE_TOTAL_PRODUCTS } from "../constants/cartConstants";

export const INITIAL_STATE = {products: [
  {
    storeId: 1,
    storeName: 'My Cell',
    location: 'International',
    products: [
      {
        id: 1,
        model: 'Galaxy A54 5G',
        image: 'https://images.samsung.com/is/image/samsung/p6pim/br/sm-a546elgdzto/gallery/br-galaxy-a54-5g-sm-a546-sm-a546elgdzto-535806788?$730_584_PNG$',
        price: 2609.10,
        oldPrice: 3399,
        freeDelivery: true,
        total: 1,
      },
      {
        id: 2,
        model: 'Galaxy A13',
        image: 'https://images.samsung.com/is/image/samsung/p6pim/br/sm-a135mlbjzto/gallery/br-galaxy-a13-sm-a135-sm-a135mlbjzto-531826439?$730_584_PNG$',
        price: 1439.10,
        freeDelivery: false,
        total: 1,
      }
    ]
  },
  {
    storeId: 2,
    storeName: 'Cell Here',
    location: 'China',
    products: [
      {
        id: 3,
        model: 'Galaxy A14',
        image: 'https://images.samsung.com/is/image/samsung/p6pim/br/sm-a146mzkgzto/gallery/br-galaxy-a14-5g-sm-a146-sm-a146mzkgzto-535246399?$730_584_PNG$',
        price: 1439.10,
        oldPrice: 1529.10,
        freeDelivery: false,
        total: 1
      },
    ]
  }
], totalPrice: 0, totalProducts: 0}

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