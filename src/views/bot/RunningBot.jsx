import React, { useEffect, useState, useMemo } from "react";

// functions
import { GenerateRandomNumber } from "../../utils/functions";
import { RandomMove, RandomPosition } from "../../utils/game";

// bot
import AtomicBot from "../../models/AtomicBot";
import Perception from "../../models/Perception";
import InnerState, { InnerStateTypes } from "../../models/InnerState";
import Action, { ActionTypes } from "../../models/Action";
import BotBoard from "../../models/BotBoard";

const E = ["Nada", "Mineral"]; // environment states
const P = [
  new Perception("Nada", "Nada"),
  new Perception("Mineral", "Mineral"),
]; // perceptions
const I = [
  new InnerState("Buscando", InnerStateTypes.search),
  new InnerState("Recogiendo", InnerStateTypes.harvest),
  new InnerState("Alerta", InnerStateTypes.alert),
]; // inner states
const A = [
  new Action("Buscando", "Buscar", ActionTypes.good),
  new Action("Recogiendo", "Recoger", ActionTypes.good),
  new Action("Alerta", "Alerta", ActionTypes.alert),
]; // actions
const links = {
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
      next: "Alerta",
    },
    Nada: {
      next: "Buscando",
    },
    Alerta: {
      next: "Alerta",
    },
  },
  Alert: {
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
};
const initial = { i: I[0] };
const bot = new AtomicBot(E, P, I, A, links, initial);
const board = new BotBoard(10, 10, E, [0, 0, 0, 0, 0, 0, 1, 1, 1, 1]);

const RunningBot = () => {
  const [botPosition, setBotPosition] = useState(0);
  const [tick, setTick] = useState(0);

  const BotBoardView = useMemo(() => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {board.Board.map((item, i) => {
          return (
            <div key={`d${i}`}>
              {item.map((jtem, j) => {
                return (
                  <div
                    style={{
                      margin: "10px",
                      border: "1px solid",
                      padding: "10px",
                      backgroundColor:
                        j === botPosition.rx && j === botPosition.ry
                          ? "#1d1d1d"
                          : "aliceblue",
                    }}
                    key={`j${j}`}
                  >
                    {j === botPosition.rx && j === botPosition.ry ? "B" : jtem}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }, [board]);

  useEffect(() => {
    const ran = RandomPosition(10, 10);
    const boardCell = board.getCell(ran.ry, ran.rx);
    // seeing first environment state
    bot.See(E[boardCell]);
    // changing state
    bot.Next();
    setBotPosition(ran);
  }, []);

  useEffect(() => {
    if (tick > 0) {
      // finish action
      const action = bot.Action();
      if (
        bot.currentI.Type === InnerStateTypes.harvest &&
        action.Type === ActionTypes.good
      )
        board.setCell(botPosition.ry, botPosition.rx, 0);
      const move = RandomMove(botPosition, 10, 10);
      const boardCell = board.getCell(move.ry, move.rx);
      // seeing environment state
      bot.See(E[boardCell]);
      // changing state
      bot.Next();
      setBotPosition(move);
    }
  }, [tick]);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setTick(tick + 1);
          }}
        >
          Hola
        </button>
        {botPosition !== 0 && BotBoardView}
      </div>
      <div>
        {botPosition !== 0 && (
          <div>
            {bot.currentP.Name}
            {bot.currentI.Name}
          </div>
        )}
        <div></div>
      </div>
    </div>
  );
};

export default RunningBot;
