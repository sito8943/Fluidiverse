import React, { useState } from "react";
import TabView from "../../components/TabView/TabView";

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
  const [perceptionsError, setPerceptionsError] = useState("");
  const [innerStatesError, setInnerStatesError] = useState("");
  const [actionsError, setActionsError] = useState("");

  const errorsList = ["Campo requerido", "Estructura incorrecta"];

  const tooltipsList = [
    "Función see(Ei) => Pj. Dado un estado del ambiente se obtiene una percepción",
    "Función next(Ei, Pj) => Pw. Dado un estado interno y una percepción se optiene el próximo estado interno",
    "Función action(Ei) => Aj. Dado un estado interno se obtiene una acción",
  ];

  const SeeForm = () => (
    <div className="form-input">
      <div className="form-legend">
        <label> Enlaza percepciones con estados del ambiente</label>
        <span className="tooltip-trigger" data-tip={tooltipsList[0]}>
          ?
        </span>
      </div>
      <textarea value={seeInput} onChange={setSeeInput} required />
      <span className="error-span">{perceptionsError}</span>
    </div>
  );

  const NextForm = () => (
    <div className="form-input">
      <div className="form-legend">
        <label>
          Enlaza percepcionees y estados internos usando la función next(Ii,Pj)
          {"=>"}Iw
        </label>
        <span className="tooltip-trigger" data-tip={tooltipsList[1]}>
          ?
        </span>
      </div>
      <textarea value={nextInput} onChange={setNextInput} />

      <span className="error-span">{innerStatesError}</span>
    </div>
  );

  const ActionForm = () => (
    <div className="form-input">
      <div className="form-legend">
        <label>
          Enlaza acciones con estados internos usnado la función action
          action(Ii){"=>"}Aj
        </label>
        <span className="tooltip-trigger" data-tip={tooltipsList[2]}>
          ?
        </span>
      </div>
      <textarea value={actionInput} onChange={setActionInput} />

      <span className="error-span">{actionsError}</span>
    </div>
  );
  return (
    <div>
      <TabView
        content={[<SeeForm />, <NextForm />, <ActionForm />]}
        headers={["See", "Next", "Action"]}
      />
    </div>
  );
};

export default CodeMode;
