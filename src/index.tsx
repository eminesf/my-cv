import React from "react";
import ReactDOM from "react-dom";
import "./styles/globals.css";
import App from "./App";
import { MenuProvider } from "./Hooks/useMenu";

ReactDOM.render(
  <React.StrictMode>
    <MenuProvider>
      <App />
    </MenuProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
