import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import AtomicBot from "../../models/AtomicBot";
import Perception from "../../models/Perception";
import InnerState from "../../models/InnerState";
import Action from "../../models/Action";

// style
import "./style.scss";

const errors = [
  "Campo requerido",
  "Estructura incorrecta, escribe palabras separadas por coma",
];

const Creation = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // states
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

  const MyBot = new AtomicBot(E, P, I, A, links, initial);

  useEffect(() => {}, []);

  const onSubmit = (data) => {};

  const validateInput = (input) => {
    if (input.length > 0) {
      if (!input.match(/^([A-Za-z]+,*)+$/)) return errors[1];
      else return "";
    }
    return errors[0];
  };

  const turnToArray = (input) => {
    const splitted = input.split(",");
    return splitted;
  };

  watch((item) => {
    const { environmentStates, perceptions, innerStates, actions } = item;

    // validating
    setEnvironmentStatesError(validateInput(environmentStates));
    setPerceptionsError(validateInput(perceptions));
    setInnerStatesError(validateInput(innerStates));
    setActionsError(validateInput(actions));

    // splitting
    setEnvironmentStatesArray(turnToArray(environmentStates));
    setPerceptionsArray(turnToArray(perceptions));
    setInnerStatesArray(turnToArray(innerStates));
    setActionsArray(turnToArray(actions));
  });

  return (
    <div>
      <form className="creation-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-card" style={{ width: 350 }}>
          <div className="form-input">
            <div className="form-legend">
              <label htmlFor="environmentStates">Estados del ambiente:</label>
            </div>
            <input
              id="environmentStates"
              type="text"
              {...register("environmentStates", {
                required: true,
                pattern: /^([A-Za-z]+,*)+$/,
              })}
            />
            <span className="tooltip-trigger">?</span>
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
                pattern: /^([A-Za-z]+,*)+$/,
              })}
            />
            <span className="tooltip-trigger">?</span>
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
                pattern: /^([A-Za-z]+,*)+$/,
              })}
            />
            <span className="tooltip-trigger">?</span>
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
                pattern: /^([A-Za-z]+,*)+$/,
              })}
            />
            <span className="tooltip-trigger">?</span>
          </div>
          <span className="error-span">{actionsError}</span>
        </div>
        <div className="form-card">
          <div>
            <h3>Enlaza percepciones con estados del ambiente</h3>
            <div>Estados del ambiente</div>
            <div>Percepciones</div>
          </div>
          <div>
            <h3>Enlaza percepcionees y estados internos</h3>
            <div>Percepciones</div>
            <div>Estados internos</div>
            <div>Estado interno resultado</div>
          </div>
          <div>
            <h3>Enlaza acciones con estados internos</h3>
            <div>Estados internos</div>
            <div>Acción</div>
          </div>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Creation;
