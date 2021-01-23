import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { names } from "./names.json";

ReactDOM.render(
  <React.StrictMode>
    <App names={names} />
  </React.StrictMode>,
  document.getElementById("root")
);
