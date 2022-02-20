import React, { useEffect, useState } from "react";

// functions
import { GenerateRandomNumber } from "../../utils/functions";
import { RandomMove, RandomPosition } from "../../utils/game";

// bot
import AtomicBot from "../../models/AtomicBot";
import Perception from "../../models/Perception";
import InnerState from "../../models/InnerState";
import Action from "../../models/Action";
import BotBoard from "../../models/BotBoard";

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
const bot = new AtomicBot(E, P, I, A, links, initial);
const board = new BotBoard(10, 10, E);

const RunningBot = () => {
  const [botPosition, setBotPosition] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const ran = RandomPosition(10, 10);
    setBotPosition(ran);
    setBotPosition(ran);
    const boardCell = board.getCell(ran.ry, ran.rx);
    console.log(ran);
    console.log(bot.See(E[boardCell]));
    /*setInterval(() => {
      setTick(tick + 1);
    }, 1000);*/
  }, []);

  useEffect(() => {
    if (tick > 0) {
      console.log(botPosition);
      const move = RandomMove(botPosition, 10, 10);
      const boardCell = board.getCell(move.ry, move.rx);
      console.log(move);
      console.log(bot.See(E[boardCell]));
    }
  }, [tick]);

  return (
    <div>
      <button
        onClick={() => {
          setTick(tick + 1);
        }}
      >
        Hola
      </button>
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
                    }}
                    key={`j${j}`}
                  >
                    {jtem}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RunningBot;
