import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { startGetUser } from "./actions/userAction";
import { startGetFact } from "./actions/factAction";
import { startGetComment } from "./actions/commentAction";

import App from "./App";

const store = configureStore();
console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

if (localStorage.getItem("authToken")) {
  store.dispatch(startGetUser());
}
if (localStorage.getItem("authToken")) {
  store.dispatch(startGetFact());
}
if (localStorage.getItem("authToken")) {
  store.dispatch(startGetComment());
}

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  jsx,

  document.getElementById("root")
);
