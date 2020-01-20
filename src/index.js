import React from "react";
import ReactDOM from "react-dom";
import { App } from "./screens/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";
import { rootReducer } from "./redux/reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
