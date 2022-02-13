import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { ContextProvider } from "./context/ContextProvider";
import Main from "./views/main/Main";
import { UnitCardProvider } from "./context/UnitCard";
import { RightSidebarProvider } from "./context/RightSidebarProvider";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <UnitCardProvider>
        <RightSidebarProvider>
          <Main />
        </RightSidebarProvider>
      </UnitCardProvider>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
