import React, { useEffect, useState } from "react";
import Board from "../../components/board/Board";
import { RandomPosition } from "../../utils/game";
// import { index, subset, matrix } from "mathjs";

// img
import p1 from "../../sprites/p1.gif";
import p2 from "../../sprites/p2.gif";
import p3 from "../../sprites/p3.gif";
import p4 from "../../sprites/p4.gif";
import dh1 from "../../sprites/dh1.gif";
import st1 from "../../sprites/st1.gif";

// context
import { useUnitCard } from "../../context/UnitCard";

// components
import StaticUnitCard from "../../components/card/StaticUnitCard";

// styles
import "./style.scss";

const units = [
  {
    id: 0,
    type: 2,
    img: p1,
    name: "Planeta 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit esse laudantium minus veritatis delectus assumenda ipsa vero inventore quis quae, expedita ullam, deserunt iste. Voluptatum illo explicabo tempora debitis.",
  },
  {
    id: 1,
    type: 2,
    img: p2,
    name: "Planeta 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit esse laudantium minus veritatis delectus assumenda ipsa vero inventore quis quae, expedita ullam, deserunt iste. Voluptatum illo explicabo tempora debitis.",
  },
  {
    id: 2,
    type: 2,
    img: p3,
    name: "Planeta 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit esse laudantium minus veritatis delectus assumenda ipsa vero inventore quis quae, expedita ullam, deserunt iste. Voluptatum illo explicabo tempora debitis.",
  },
  {
    id: 3,
    type: 2,
    img: p4,
    name: "Planeta 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit esse laudantium minus veritatis delectus assumenda ipsa vero inventore quis quae, expedita ullam, deserunt iste. Voluptatum illo explicabo tempora debitis.",
  },
  {
    id: 4,
    type: 3,
    img: dh1,
    name: "Planeta 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit esse laudantium minus veritatis delectus assumenda ipsa vero inventore quis quae, expedita ullam, deserunt iste. Voluptatum illo explicabo tempora debitis.",
  },
  {
    id: 5,
    type: 4,
    img: st1,
    name: "Planeta 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit esse laudantium minus veritatis delectus assumenda ipsa vero inventore quis quae, expedita ullam, deserunt iste. Voluptatum illo explicabo tempora debitis.",
  },
];

const Main = (props) => {
  const { unitCardState, setUnitCardState } = useUnitCard();

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
      const { type, img, id } = item;
      const newUnit = { id, type, img, x: rx, y: ry };
      worlds.push(newUnit);
    });
    setPlanets(worlds);
    setGenerated(true);
  };

  useEffect(() => {
    if (unitCardState.id) {
      const { type, img, name, description } =
        units[unitCardState.id.substring(1)];
      setUnitCardState({ type: "set", typeA: type, img, name, description });
    }
  }, [unitCardState.visible]);

  useEffect(() => {
    if (playerPosition.rx) {
      //setXPlayer((playerPosition.rx + 1) * 60 - 28);
      //setYPlayer((playerPosition.ry + 1) * 60 - 13);
    }
  }, [playerPosition]);

  return (
    <>
      {unitCardState.type ? <StaticUnitCard useCardContext /> : <></>}
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
    </>
  );
};

export default Main;
