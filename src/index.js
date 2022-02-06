import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import App from "./App";

import Main from "./views/main/Main";

// context
import { ContextProvider } from "./context/ContextProvider";
import { UnitCardProvider } from "./context/UnitCard";

// imgs
import back from "./sprites/SpaceBackground.png";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <UnitCardProvider>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundImage: `url(${back})`,
          }}
        >
          <Main />
        </div>
      </UnitCardProvider>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
