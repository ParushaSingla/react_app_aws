import {
  ADD_TO_CART,
  REMOVE_ITEM,
  ADD_QUANTITY,
  SUB_QUANTITY,
  ADD_SHIPPING,
} from "../actions/action-type/cart-actions";

const initState = {
  addedItems: [],
  total: 0,
};
const defaultState =
  (JSON.parse(localStorage.getItem("state"))?JSON.parse(localStorage.getItem("state")).cartList:null) || initState;
const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      let addedItem = action.item;
      let existed_item = state.addedItems.find(
        (item) => action.item.id === item.id
      );
      if (existed_item) {
        existed_item.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem.price,
        };
      } else {
        addedItem.quantity = 1;
        //calculating the total
        let newTotal = state.total + addedItem.price;
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal,
        };
      }
    }
    case REMOVE_ITEM: {
      let itemToRemove = state.addedItems.find((item) => action.id === item.id);
      let new_items = state.addedItems.filter((item) => action.id !== item.id);

      //calculating the total
      let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
      console.log(itemToRemove);
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    }
    case ADD_QUANTITY: {
      let addedItem = state.addedItems.find((item) => item.id === action.id);
      addedItem.quantity += 1;
      let newTotal = state.total + addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
    case SUB_QUANTITY: {
      let addedItem = state.addedItems.find((item) => item.id === action.id);
      //if the qt == 0 then it should be removed
      if (addedItem.quantity === 1) {
        let new_items = state.addedItems.filter(
          (item) => item.id !== action.id
        );
        let newTotal = state.total - addedItem.price;
        return {
          ...state,
          addedItems: new_items,
          total: newTotal,
        };
      } else {
        addedItem.quantity -= 1;
        let newTotal = state.total - addedItem.price;
        return {
          ...state,
          total: newTotal,
        };
      }
    }
    case ADD_SHIPPING: {
      let new_items = [];
      let newTotal = 0;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
