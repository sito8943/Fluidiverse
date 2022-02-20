import React from "react";
import ReactDOM from "react-dom";

// contexts
import { ContextProvider } from "./context/ContextProvider";
import { UnitCardProvider } from "./context/UnitCard";
import { RightSidebarProvider } from "./context/RightSidebarProvider";

// views
import Creation from "./views/bot/Creation";
import RunningBot from "./views/bot/RunningBot";

// styles
import "./index.scss";
import "./assets/theme.scss";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <UnitCardProvider>
        <RightSidebarProvider>
          <RunningBot />
        </RightSidebarProvider>
      </UnitCardProvider>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
