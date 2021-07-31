import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import "./index.css";
import App from "./App";
import reducers from "./reducers";

const { worker } = require('./mocks/browser');
worker.start();

const store = createStore(reducers, applyMiddleware(thunk));

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    rootElement
);

//Task List:
//X Add in all necessary components and libary methods.
//X Create a store that includes thunk and logger middleware support.
//X Wrap the App component in a react-redux Provider element.