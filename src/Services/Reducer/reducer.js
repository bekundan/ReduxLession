import { ADD_TO_CART } from "../constaints";
import { REMOVE_TO_CART } from "../constaints";
//1.initial state
const initialState = {
  //array because we have different type of data
  cardData: [],
};
export default function cartItem(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log("reducer", action);
      return [...state, { cardData: action.data }];
    case REMOVE_TO_CART:
      // console.log("reducer", action);
      state.pop();
      return [...state];
    default:
      return state;
  }
}
