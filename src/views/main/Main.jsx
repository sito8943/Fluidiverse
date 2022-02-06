import React, { useEffect, useState } from "react";
import Board from "../../components/board/Board";
import {
  BoardGeneration,
  RandomMove,
  RandomPlayerPosition,
} from "../../utils/game";
// import { index, subset, matrix } from "mathjs";

import "./style.scss";

const Main = (props) => {
  const [steps, setSteps] = useState([]);
  const [playerPosition, setPlayerPosition] = useState({});

  const generate = () => {
    setPlayerPosition(RandomPlayerPosition(10, 10));
    /*setInterval(() => {
      if (playerPosition.rx)
        setPlayerPosition(RandomMove(playerPosition, 10, 10));
    }, 5000);*/
  };

  useEffect(() => {
    if (playerPosition.rx) {
      //setXPlayer((playerPosition.rx + 1) * 60 - 28);
      //setYPlayer((playerPosition.ry + 1) * 60 - 13);
    }
  }, [playerPosition]);

  return (
    <div className="main-screen" style={{ display: "flex" }}>
      <div>
        <button onClick={generate}>Hola</button>
      </div>

      <Board lx="10" ly="10" />

      <div>
        <ul>
          {steps.map((item, i) => {
            return <li key={`li${i}`}>{`${item.rx}, ${item.ry}`}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Main;
