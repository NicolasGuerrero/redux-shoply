import { ADD, REMOVE } from './actionTypes';
import data from './data.json';

const INITIAL_STATE = {
  productIds: Object.keys(data.products),
  inventory: data.products,
  cart: []
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      const inCart = state.cart.find(item => action.payload.id === item.id);

      if (inCart) {
        let editedCart = state.cart.map(item => action.payload.id === item.id
          ? { ...item, qty: item.qty + 1 }
          : item);

        return { ...state, cart: editedCart }
      }

      return {
        ...state,
        cart: [...state.cart, { id: action.payload.id, qty: 1 }]
      };

    case REMOVE:
      const currentItem = state.cart.find(item => action.payload.id === item.id);

      if (currentItem && currentItem.qty === 1) {
        let newCart = state.cart.filter(item => item.id !== action.payload.id);

        return { ...state, cart: newCart };
      }
      let reducedCart = state.cart.map(item => action.payload.id === item.id
        ? { ...item, qty: item.qty - 1 }
        : item);

      return { ...state, cart: reducedCart }

    default:

      return state;
  }
}

export default rootReducer;