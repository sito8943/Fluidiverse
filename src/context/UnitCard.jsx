import * as React from "react";

const UnitCard = React.createUnitCard();

const unitCardReducer = (unitCardState, action) => {
  switch (action.type) {
    case "reset":
      return {
        type: 0,
        img: "",
        name: "",
        description: "",
      };
    case "set":
      return {
        type: action.type,
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
  const unitCard = React.useUnitCard(UnitCard);
  if (unitCard === undefined)
    throw new Error("useUnitCard must be used within a Provider");
  return unitCard;
};

export { UnitCardProvider, useUnitCard };
