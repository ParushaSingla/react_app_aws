import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { saveState } from "./localStorage";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
store.subscribe(() => {
  saveState({
    cartList: store.getState().cartListReducer,
  });
});
export default store;
