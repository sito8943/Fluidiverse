import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import AtomicBot from "../../models/AtomicBot";
import Perception from "../../models/Perception";
import InnerState from "../../models/InnerState";
import Action from "../../models/Action";

// style
import "./style.scss";

const Creation = () => {
  const { register, handleSubmit } = useForm();
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

  return (
    <div>
      <form className="creation-form">
        <div className="form-card" style={{ width: 350 }}>
          <div className="form-input">
            <div className="form-legend">
              <label for="environmentStates">Estados del ambiente</label>
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
          <div className="form-input">
            <div className="form-legend">
              <label for="perceptions">Percepciones</label>
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
          <div className="form-input">
            <div className="form-legend">
              <label for="innerStates">Estados internos</label>
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
          <div className="form-input">
            <div className="form-legend">
              <label for="actions">Acciones</label>
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
      </form>
    </div>
  );
};

export default Creation;
