import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReactTooltip from "react-tooltip";

import AtomicBot from "../../models/AtomicBot";
import Perception from "../../models/Perception";
import InnerState from "../../models/InnerState";
import Action from "../../models/Action";

// style
import "./style.scss";

const Creation = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // states
  // strings
  const [environmentStatesString, setEnvironmentStatesString] = useState([]);
  const [perceptionsString, setPerceptionsString] = useState([]);
  const [innerStatesString, setInnerStatesString] = useState([]);
  const [actionsString, setActionsString] = useState([]);

  // arrays
  const [environmentStatesArray, setEnvironmentStatesArray] = useState([]);
  const [perceptionsArray, setPerceptionsArray] = useState([]);
  const [innerStatesArray, setInnerStatesArray] = useState([]);
  const [actionsArray, setActionsArray] = useState([]);

  // !errors
  const [environmentStatesError, setEnvironmentStatesError] = useState(
    errors[0]
  );
  const [perceptionsError, setPerceptionsError] = useState(errors[0]);
  const [innerStatesError, setInnerStatesError] = useState(errors[0]);
  const [actionsError, setActionsError] = useState(errors[0]);

  const E = ["Nada", "Mineral"]; // environment states
  const P = [
    new Perception("Nada", "Nada"),
    new Perception("Mineral", "Mineral"),
  ]; // perceptions
  const I = [new InnerState("Buscando"), new InnerState("Recogiendo")]; // inner states
  const A = [
    new Action("Buscando", "Buscar"),
    new Action("Recogiendo", "Recoger"),
  ]; // actions
  const links = {
    Buscando: {
      Nada: {
        next: "Buscando",
      },
    },
    Recogiendo: {
      Mineral: {
        next: "Recogiendo",
      },
    },
  };
  const initial = { i: I[0] };

  const errorsList = [
    "Campo requerido",
    "Estructura incorrecta, escribe palabras separadas por coma, no se admiten números",
  ];

  const tooltipsList = [
    "Estados posibles que ocurren en el ambiente",
    "Percepciones del bot a la hora de encontrarse con un estado del ambiente",
    "Estados internos del bot que indican que está haciendo",
    "Acciones que realiza el bot dependiendo de su estado interno",
  ];

  const MyBot = new AtomicBot(E, P, I, A, links, initial);

  useEffect(() => {}, []);

  const onSubmit = (data) => {};

  const validateInput = (input) => {
    if (input.length > 0) {
      console.log(input.match(/^([A-Za-z ]+,*)+$/));
      if (input.match(/^([A-Za-z ]+,*)+$/) === null) return errorsList[1];
      else return "";
    }
    return errorsList[0];
  };

  const turnToArray = (input) => {
    const splitted = input.split(",");
    return splitted;
  };

  watch((item) => {
    const { environmentStates, perceptions, innerStates, actions } = item;

    if (environmentStates !== environmentStatesString) {
      setEnvironmentStatesString(environmentStates);
      console.log(validateInput(environmentStates));
      setEnvironmentStatesError(validateInput(environmentStates));
      setEnvironmentStatesArray(turnToArray(environmentStates));
    }

    if (perceptions !== perceptionsString) {
      setPerceptionsString(perceptions);
      setPerceptionsError(validateInput(perceptions));
      setPerceptionsArray(turnToArray(perceptions));
    }

    if (innerStates !== innerStatesString) {
      setInnerStatesString(innerStates);
      setInnerStatesError(validateInput(innerStates));
      setInnerStatesArray(turnToArray(innerStates));
    }

    if (actions !== actionsString) {
      setActionsString(actions);
      setActionsError(validateInput(actions));
      setActionsArray(turnToArray(actions));
    }
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <form className="creation-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-card" style={{ width: 350 }}>
            <h3>Define los parámetros del bot</h3>
            <div className="form-input">
              <div className="form-legend">
                <label htmlFor="environmentStates">Estados del ambiente:</label>
              </div>
              <input
                id="environmentStates"
                type="text"
                {...register("environmentStates", {
                  required: true,
                  pattern: /^([A-Za-z ]+,*)+$/,
                })}
              />
              <span className="tooltip-trigger" data-tip={tooltipsList[0]}>
                ?
              </span>
            </div>
            <span className="error-span">{environmentStatesError}</span>
            <div className="form-input">
              <div className="form-legend">
                <label htmlFor="perceptions">Percepciones:</label>
              </div>
              <input
                id="perceptions"
                type="text"
                {...register("perceptions", {
                  required: true,
                  pattern: /^([A-Za-z ]+,*)+$/,
                })}
              />
              <span className="tooltip-trigger" data-tip={tooltipsList[1]}>?</span>
            </div>
            <span className="error-span">{perceptionsError}</span>
            <div className="form-input">
              <div className="form-legend">
                <label htmlFor="innerStates">Estados internos:</label>
              </div>
              <input
                id="innerStates"
                type="text"
                {...register("innerStates", {
                  required: true,
                  pattern: /^([A-Za-z ]+,*)+$/,
                })}
              />
              <span className="tooltip-trigger" data-tip={tooltipsList[2]}>
                ?
              </span>
            </div>
            <span className="error-span">{innerStatesError}</span>
            <div className="form-input">
              <div className="form-legend">
                <label htmlFor="actions">Acciones:</label>
              </div>
              <input
                id="actions"
                type="text"
                {...register("actions", {
                  required: true,
                  pattern: /^([A-Za-z ]+,*)+$/,
                })}
              />
              <span className="tooltip-trigger" data-tip={tooltipsList[3]}>
                ?
              </span>
            </div>
            <span className="error-span">{actionsError}</span>
          </div>
          <div className="form-card" style={{ width: 450 }}>
            <div>
              <h3>Enlaza percepciones con estados del ambiente</h3>
              <div className="flex-column">
                <div>
                  Estados del ambiente
                  <ul>
                    {environmentStatesArray.map((item, i) => {
                      return <li key={`eS${i}`}>{item}</li>;
                    })}
                  </ul>
                </div>
                <div>
                  Percepciones
                  <ul>
                    {perceptionsArray.map((item, i) => {
                      return <li key={`eS${i}`}>{item}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3>Enlaza percepcionees y estados internos</h3>
              <div className="flex-column">
                <div>
                  Estados internos
                  <ul>
                    {innerStatesArray.map((item, i) => {
                      return <li key={`eS${i}`}>{item}</li>;
                    })}
                  </ul>
                </div>
                <div>
                  Percepciones
                  <ul>
                    {perceptionsArray.map((item, i) => {
                      return <li key={`eS${i}`}>{item}</li>;
                    })}
                  </ul>
                </div>
                <div>
                  Estado interno resultado
                  <ul>
                    {innerStatesArray.map((item, i) => {
                      return <li key={`eS${i}`}>{item}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3>Enlaza acciones con estados internos</h3>
              <div className="flex-column">
                <div>
                  Estados internos
                  <ul>
                    {innerStatesArray.map((item, i) => {
                      return <li key={`eS${i}`}>{item}</li>;
                    })}
                  </ul>
                </div>
                <div>
                  Acción
                  <ul>
                    {actionsArray.map((item, i) => {
                      return <li key={`eS${i}`}>{item}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </form>
        <ReactTooltip />
        <input type="submit" className="button primary ease-transition" />
      </div>
    </div>
  );
};

export default Creation;
