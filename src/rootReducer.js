import { ADD, REMOVE } from './actionTypes';
import data from './data.json';

const INITIAL_STATE = {
  productIds: Object.keys(data.products),
  inventory: data.products,
  cart: [],
  count: 0,
  totalCost: 0
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      let price = state.inventory[action.payload.id].price;
      let newTotal = price + state.totalCost;
      const inCart = state.cart.find(item => action.payload.id === item.id);

      if (inCart) {
        let editedCart = state.cart.map(item => action.payload.id === item.id
          ? { ...item, qty: item.qty + 1 }
          : item);

        return { ...state, cart: editedCart, count: state.count + 1, totalCost: newTotal }
      }

      return {
        ...state,
        cart: [...state.cart, { id: action.payload.id, qty: 1 }],
        count: state.count + 1,
        totalCost: newTotal
      };

    case REMOVE:
      const currentItem = state.cart.find(item => action.payload.id === item.id);

      const costReduction = state.inventory[action.payload.id].price;

      if (currentItem && currentItem.qty === 1) {
        let newCart = state.cart.filter(item => item.id !== action.payload.id);

        let editedPrice = state.totalCost - costReduction;

        return { ...state, cart: newCart, count: state.count - 1, totalCost: editedPrice };

      } else if (currentItem) {
        let reducedCart = state.cart.map(item => action.payload.id === item.id
          ? { ...item, qty: item.qty - 1 }
          : item);

        let reducedPrice = state.totalCost - costReduction;

        return { ...state, cart: reducedCart, count: state.count - 1, totalCost: reducedPrice }
      }
      return state;
    default:
      return state;
  }
}

export default rootReducer;