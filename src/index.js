import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App.js";
import "./index.css";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/index.js";
import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));
store.subscribe(() => console.log("Store state:", store.getState()));


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
<App />
    </Provider>

);
