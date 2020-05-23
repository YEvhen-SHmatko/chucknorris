import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import State from "./hooks/State";
import App from "./components/App";
import "./styles/normalize.css";
import "./fonts/Roboto/Roboto.css";
import "./styles/MyNormalize.css";
ReactDOM.render(
  <React.StrictMode>
    <State>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </State>
  </React.StrictMode>,
  document.getElementById("root")
);
