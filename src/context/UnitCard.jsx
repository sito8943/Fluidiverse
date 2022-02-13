import * as React from "react";

const UnitCard = React.createContext();

const unitCardReducer = (unitCardState, action) => {
  switch (action.type) {
    case "reset":
      return {
        opacity: 0,
        visible: false,
        type: 0,
        img: "",
        name: "",
        description: "",
      };
    case "hide":
      return {
        opacity: 0,
        visible: false,
        type: unitCardState.type,
        img: unitCardState.img,
        name: unitCardState.name,
        description: unitCardState.description,
      };
    case "show":
      return {
        opacity: 0,
        id: action.id,
        visible: true,
      };
    case "set":
      return {
        opacity: 1,
        visible: true,
        type: action.typeA,
        img: action.img,
        name: action.name,
        description: action.description,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const UnitCardProvider = ({ children }) => {
  const [unitCardState, setUnitCardState] = React.useReducer(unitCardReducer, {
    opacity: 0,
    visible: false,
    type: 0,
    img: "",
    name: "",
    description: "",
  });

  const value = { unitCardState, setUnitCardState };
  return <UnitCard.Provider value={value}>{children}</UnitCard.Provider>;
};

//hooks
const useUnitCard = () => {
  const unitCard = React.useContext(UnitCard);
  if (unitCard === undefined)
    throw new Error("useUnitCard must be used within a Provider");
  return unitCard;
};

export { UnitCardProvider, useUnitCard };
