import React from "react";
import ReactDOM from "react-dom";
import { App } from "./screens/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import { rootReducer } from "./redux/reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./styles/index.scss";

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
