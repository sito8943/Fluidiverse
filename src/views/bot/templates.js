import AtomicBot from "../../models/AtomicBot";
import Perception, { Perceptions } from "../../models/Perception";
import InnerState, { InnerStateTypes } from "../../models/InnerState";
import Action, { ActionTypes } from "../../models/Action";

export const collector = new AtomicBot(
  ["Nada", "Mineral"], // environment states
  [
    new Perception("Nada", "Nada", Perceptions.nothing),
    new Perception("Mineral", "Mineral", Perceptions.mineral),
  ], // perceptions
  [
    new InnerState("Buscando", InnerStateTypes.search),
    new InnerState("Recogiendo", InnerStateTypes.harvest),
    new InnerState("Alerta", InnerStateTypes.alert),
  ], // inner states
  [
    new Action("Buscando", "Buscar", ActionTypes.good),
    new Action("Recogiendo", "Recoger", ActionTypes.good),
    new Action("Alerta", "Alerta", ActionTypes.alert),
  ], // actions
  {
    Buscando: {
      Nada: {
        next: "Buscando",
      },
      Mineral: {
        next: "Recogiendo",
      },
      Alerta: {
        next: "Alerta",
      },
    },
    Recogiendo: {
      Mineral: {
        next: "Recogiendo",
      },
      Nada: {
        next: "Buscando",
      },
      Alerta: {
        next: "Alerta",
      },
    },
    Alerta: {
      Nada: {
        next: "Alerta",
      },
      Mineral: {
        next: "Alerta",
      },
      Alerta: {
        next: "Alerta",
      },
    },
  },
  { i: new InnerState("Buscando", InnerStateTypes.search) }
);