import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga"
import "./index.css";
import App from "./App";
import Redone from "./Redone";
import Redtwo from "./Redtwo";
import Saga from './Saga'
import reportWebVitals from "./reportWebVitals";

const rootReducer = combineReducers({
  red1: Redone,
  red2: Redtwo,
});

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));
sagaMiddleware.run(Saga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
