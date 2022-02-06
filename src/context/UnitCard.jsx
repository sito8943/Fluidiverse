import * as React from "react";

const UnitCard = React.createContext();

const unitCardReducer = (unitCardState, action) => {
  switch (action.type) {
    case "reset":
      return {
        visible: false,
        type: 0,
        img: "",
        name: "",
        description: "",
      };
    case "show":
      return {
        id: action.id,
        visible: true,
      };
    case "set":
      return {
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
