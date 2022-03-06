import React, { useState } from "react";

const CodeMode = () => {
  const [see, setSee] = useState("");
  const [next, setNext] = useState("");
  const [action, setAction] = useState("");

  const [seeInput, setSeeInput] = useState("");
  const [nextInput, setNextInput] = useState("");
  const [actionInput, setActionInput] = useState("");

  const errorsList = ["Campo requerido", "Estructura incorrecta"];

  const tooltipsList = [
    "Estados posibles que ocurren en el ambiente",
    "Percepciones del bot a la hora de encontrarse con un estado del ambiente",
    "Estados internos del bot que indican que está haciendo",
    "Acciones que realiza el bot dependiendo de su estado interno",
  ];

  return (
    <div>
      <div className="form-input">
        <div className="form-legend">
          <label> Enlaza percepciones con estados del ambiente</label>
        </div>
        <textarea value={seeInput} onChange={setSeeInput} required />
        <span className="tooltip-trigger" data-tip={tooltipsList[3]}>
          ?
        </span>
        <span className="error-span">{actionsError}</span>
      </div>
      <div>
        <h3>
          Enlaza percepcionees y estados internos usando la función next(Ii,Pj)
          {"=>"}Iw
        </h3>
        <textarea value={nextInput} onChange={setNextInput} />
      </div>
      <div>
        <h3>
          Enlaza acciones con estados internos usnado la función action
          action(Ii){"=>"}Aj
        </h3>
        <textarea value={actionInput} onChange={setActionInput} />
      </div>
    </div>
  );
};

export default CodeMode;
