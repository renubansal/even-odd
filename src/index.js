import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App.js";
import "./index.css";

import { configureStore } from "@reduxjs/toolkit";

const rootReducer = () => {
  return { foo: "bar" };
};

const store = configureStore({ reducer: rootReducer });

console.log("Store:", store);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
