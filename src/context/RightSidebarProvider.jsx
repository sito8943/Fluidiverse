import * as React from "react";

const RightSidebar = React.createContext();

const rightSidebarReducer = (rightSidebarState, action) => {
  switch (action.type) {
    case "setCard":
      return {
        opacity: rightSidebarState.opacity,
        card: action.card,
        menu: rightSidebarState.menu,
      };
    case "setMenu":
      return {
        opacity: rightSidebarState.opacity,
        card: rightSidebarState.card,
        menu: action.menu,
      };
    case "show":
      return {
        opacity: 1,
        card: rightSidebarState.card,
        menu: rightSidebarState.menu,
      };
    case "hide":
      return {
        opacity: 0,
        card: rightSidebarState.card,
        menu: rightSidebarState.menu,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const RightSidebarProvider = ({ children }) => {
  const [rightSidebarState, setRightSidebarState] = React.useReducer(
    rightSidebarReducer,
    {
      opacity: 0,
      visible: false,
      type: 0,
      img: "",
      name: "",
      description: "",
    }
  );

  const value = { rightSidebarState, setRightSidebarState };
  return (
    <RightSidebar.Provider value={value}>{children}</RightSidebar.Provider>
  );
};

//hooks
const useRightSidebar = () => {
  const rightSidebar = React.useContext(RightSidebar);
  if (rightSidebar === undefined)
    throw new Error("useRightSidebar must be used within a Provider");
  return rightSidebar;
};

export { RightSidebarProvider, useRightSidebar };
