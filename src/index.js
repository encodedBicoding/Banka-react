import React from "react";
import { render } from "react-dom";
import App from "./components/App.js";
import { BrowserRouter } from "react-router-dom";
import "./styles/main.css";

const root = document.getElementById("root");

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);

module.hot.accept();
