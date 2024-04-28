import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

// MMMIIIMMPP
// APDE REDUX VALA CODE NE REACT VALA CODE SATHE LINK KARVU HOY TO APDE "PROVIDER" NO USE KARIYE CHIYE....AMA APDE <App></App> ne <Provider></Provider> NI ANDER WRAP KARVA NI HOY CHE
// NICHE DEKHADIYU TE AKHU SYSNTAX CHE APDE COMPOLSORY AA "store={store}" NE PAN LAKHVU J PADE CHE 
root.render(
  <Provider  store={store} >
      <App />
  </Provider>
);
