import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { ContextProvider } from "./context/ContextProvider";
import Main from "./views/main/Main";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Main />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
