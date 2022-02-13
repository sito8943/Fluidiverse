import React from "react";
import { useForm } from "react-hook-form";

import AtomicBot from "../../models/atomicBot";
import Perception from "../../models/Perception";
import InnerState from "../../models/InnerState";
import Action from "../../models/Action";

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

  useEffect(() => {

  }, []);

  return <div>
      <form>
          <div>
              <label>Estados del ambiente</label><label>?</label>
              <input type="text" {...register("environmentStates", {required: true})}/>
          </div>
          <div>
              <label>Percepciones</label>
              <input type="text" {...register("perceptions", {required: true})}/>
          </div>
          <div>
              <label>Estados internos</label>
              <input type="text" {...register("innerStates", {required: true})}/>
          </div>
          <div>
              <label>Acciones</label>
              <input type="text" {...register("actions", {required: true, pattern: /^([A-Za-z]+[,])+$/})}/>
          </div>
          <div>
            <div>
              <h3>Enlaza percepciones con estados del ambiente</h3>
              <div>
                  Estados del ambiente
              </div>
              <div>
                  Percepciones
              </div>
            </div>
            <div>
              <h3>Enlaza percepcionees y estados internos</h3>
              <div>
                  Percepciones
              </div>
              <div>
                  Estados internos
              </div>
              <div>
                  Estado interno resultado
              </div>
            </div>
            <div>
              <h3>Enlaza acciones con estados internos</h3>
              <div>
                  Estados internos
              </div>
              <div>
                  Acción
              </div>
            </div>
          </div>
          
      </form>
  </div>;
};

export default Creation;
