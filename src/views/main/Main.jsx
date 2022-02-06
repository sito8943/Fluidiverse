import React, { useEffect, useState } from "react";
import Board from "../../components/board/Board";
import { BoardGeneration, RandomMove, RandomPosition } from "../../utils/game";
// import { index, subset, matrix } from "mathjs";

// img
import p1 from "../../sprites/p1.gif";
import p2 from "../../sprites/p2.gif";
import p3 from "../../sprites/p3.gif";
import p4 from "../../sprites/p4.gif";
import dh1 from "../../sprites/dh1.gif";
import st1 from "../../sprites/st1.gif";

// styles
import "./style.scss";

const units = [
  {
    type: 2,
    img: p1,
  },
  {
    type: 2,
    img: p2,
  },
  {
    type: 2,
    img: p3,
  },
  {
    type: 2,
    img: p4,
  },
  {
    type: 3,
    img: dh1,
  },
  {
    type: 4,
    img: st1,
  },
];

const Main = (props) => {
  const [steps, setSteps] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [generated, setGenerated] = useState(false);
  const [playerPosition, setPlayerPosition] = useState({});

  const generate = () => {
    setPlayerPosition(RandomPosition(10, 10));
    const worlds = [];
    units.forEach((item) => {
      const position = RandomPosition(10, 10);
      const { rx, ry } = position;
      const { type, img } = item;
      const newUnit = { type, img, x: rx, y: ry };
      worlds.push(newUnit);
    });
    setPlanets(worlds);
    setGenerated(true);
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

      {generated && <Board units={planets} lx={10} ly={10} />}

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
