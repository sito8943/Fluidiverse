import React, { useState } from "react";
import TabView from "../../components/TabView/TabView";
import Textarea from "../../layouts/Bot/Textarea/Textarea";

import { SyntaxValidator, RegEnums } from "../../utils/validators";

const CodeMode = () => {
  // final sets
  const [see, setSee] = useState("");
  const [next, setNext] = useState("");
  const [action, setAction] = useState("");

  // inputs
  const [seeInput, setSeeInput] = useState("");
  const [nextInput, setNextInput] = useState("");
  const [actionInput, setActionInput] = useState("");

  // !errors
  const [seesError, setSeesError] = useState("");
  const [nextsError, setNextsError] = useState("");
  const [actionsError, setActionsError] = useState("");

  const errorsList = ["Campo requerido", "Estructura incorrecta"];

  const handleInputs = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "see":
        console.log(SyntaxValidator(value,RegEnums.see));
        return setSeeInput(value);
      case "next":
        console.log(SyntaxValidator(value,RegEnums.next));
        return setNextInput(value);
      default:
        console.log(SyntaxValidator(value,RegEnums.action));
        return setActionInput(value);
    }
  };

  const tooltipsList = [
    "Función see(Ei) => Pj. Dado un estado del ambiente se obtiene una percepción",
    "Función next(Ei, Pj) => Pw. Dado un estado interno y una percepción se optiene el próximo estado interno",
    "Función action(Ei) => Aj. Dado un estado interno se obtiene una acción",
  ];

  return (
    <div>
      <TabView
        content={[
          <Textarea
            label="Enlaza percepciones con estados del ambiente"
            tooltip={tooltipsList[0]}
            value={seeInput}
            onChange={handleInputs}
            error={seesError}
            id="see"
          />,
          <Textarea
            label="Enlaza percepciones y estados internos usando la función next(Ii,Pj)
             => Iw"
            tooltip={tooltipsList[1]}
            value={nextInput}
            onChange={handleInputs}
            error={nextsError}
            id="next"
          />,
          <Textarea
            label="Enlaza acciones con estados internos usnado la función action
            action(Ii) => Aj"
            tooltip={tooltipsList[2]}
            value={actionInput}
            onChange={handleInputs}
            error={actionsError}
            id="action"
          />,
        ]}
        headers={["See", "Next", "Action"]}
      />
    </div>
  );
};

export default CodeMode;
