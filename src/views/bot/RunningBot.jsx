import React, { useEffect, useState, useMemo, useReducer } from "react";

// components
import BotInfoCard from "../../components/card/BotInfoCard";

// functions
import { GenerateRandomNumber } from "../../utils/functions";
import { RandomMove, RandomPosition } from "../../utils/game";

// bot
import AtomicBot from "../../models/AtomicBot";
import Perception from "../../models/Perception";
import InnerState, { InnerStateTypes } from "../../models/InnerState";
import Action, { ActionTypes } from "../../models/Action";
import BotBoard from "../../models/BotBoard";

// assets
import kalar from "../../assets/img/kalardesertSmall.png";

// templates
import { collector } from "./templates";

const bot = collector;
const board = new BotBoard(10, 10, bot.E, [0, 0, 0, 0, 0, 0, 1, 1, 1, 1]);

const RunningBot = () => {
  const [botPosition, setBotPosition] = useState(0);

  const botAttributesReducer = (currentState, toDo) => {
    const { type, action, innerState, perception } = toDo;
    switch (type) {
      case "set-action":
        return { ...currentState, action };
      case "set-inner-state":
        return { ...currentState, innerState };
      case "set-perception":
        return { ...currentState, perception };
      case "reset":
        // reset
        return {
          action: "",
          innerState: "",
          perception: "",
        };
      default:
        // reset
        return {
          action,
          innerState,
          perception,
        };
    }
  };

  const [botStateAttributes, setBotStateAttributes] = useReducer(
    botAttributesReducer,
    {
      action: "",
      innerState: "",
      perception: "",
    }
  );
  const [tick, setTick] = useState(0);

  const playerBagReducer = (currentBag, toDo) => {
    const { mineral, action, count } = toDo;
    const newBag = currentBag;

    switch (action) {
      case "add":
        newBag[mineral] += count;
        break;
      case "remove":
        newBag[mineral] += count;
        break;
      default:
        //reset
        return {};
    }
    return newBag;
  };
  const [playerBag, setPlayerBag] = useReducer(playerBagReducer, {});

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
    bot.See(bot.E[boardCell]);
    // changing state
    bot.Next();
    // updating states
    setBotStateAttributes({
      type: "change",
      action: bot.Current("a"),
      innerState: bot.Current("i"),
      perception: bot.Current("p"),
    });
    setBotPosition(ran);

    const timer = setInterval(() => {
      setTick((prevTick) => prevTick + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (tick > 10) {
      // finish action
      const action = bot.Action();
      if (
        bot.currentI.Type === InnerStateTypes.harvest &&
        action.Type === ActionTypes.good
      ) {
        board.setCell(botPosition.ry, botPosition.rx, 0);
        setPlayerBag({ type: "add", mineral: "iron", count: 1 });
      }

      const move = RandomMove(botPosition, 10, 10);
      const boardCell = board.getCell(move.ry, move.rx);
      // if the last cell was a mineral
      // seeing environment state
      bot.See(bot.E[boardCell]);
      // changing state
      bot.Next();
      // updating states
      setBotStateAttributes({
        type: "change",
        action: bot.Current("a"),
        innerState: bot.Current("i"),
        perception: bot.Current("p"),
      });
      setBotPosition(move);
      setTick(0);
    }
  }, [tick]);

  return (
    <div>
      <BotInfoCard
        name="collector"
        innerState={botStateAttributes.innerState}
        perception={botStateAttributes.perception}
        planet={kalar}
      ></BotInfoCard>
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
