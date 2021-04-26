import React from 'react';
import ReactDOM from 'react-dom';
import "./components/styles/index.css";
import App from './App.js';
import "bootstrap/dist/css/bootstrap.min.css";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducers from "./store";

const store = createStore( rootReducers );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);