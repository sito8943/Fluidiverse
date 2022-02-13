import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { ContextProvider } from "./context/ContextProvider";
import Creation from "./views/bot/Creation";
import { UnitCardProvider } from "./context/UnitCard";
import { RightSidebarProvider } from "./context/RightSidebarProvider";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <UnitCardProvider>
        <RightSidebarProvider>
          <Creation />
        </RightSidebarProvider>
      </UnitCardProvider>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
