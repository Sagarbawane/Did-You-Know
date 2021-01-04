import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "../reducers/userReducer";
import factReducer from "../reducers/factReducer";
import commentReducer from "../reducers/commentReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      user: userReducer,
      fact: factReducer,
      comment: commentReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};
export default configureStore;
