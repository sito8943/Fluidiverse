import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// functions
import { BoardGeneration } from "../../utils/game";

// style
import "./style.scss";

// components
import Cell from "../cell/Cell";

const Board = (props) => {
  const { lx, ly, units } = props;

  const [board, setBoard] = useState(BoardGeneration(lx, ly));
  const [staticUnits, setStaticUnits] = useState([]);

  const existUnitIn = (y, x) => {
    let unit = { value: 0 };
    for (let i = 0; i < staticUnits.length && unit.value === 0; ++i)
      if (staticUnits[i].x === x && staticUnits[i].y === y)
        unit = staticUnits[i];
    return unit;
  };

  useEffect(() => {
    setBoard(BoardGeneration(lx, ly));
  }, [lx, ly]);

  useEffect(() => {
    setStaticUnits(units);
  }, units);

  return (
    <div className="board">
      {board.map((row, index) => {
        return (
          <span key={`row${index}`}>
            {row.map((item, jndex) => {
              return (
                <Cell
                  y={index}
                  x={jndex}
                  value={item}
                  unit={existUnitIn(index, jndex)}
                  key={`cell${jndex}`}
                />
              );
            })}
          </span>
        );
      })}
    </div>
  );
};

Board.defaultProps = {
  lx: 10,
  ly: 10,
  units: [],
};

Board.propTypes = {
  lx: PropTypes.number,
  ly: PropTypes.number,
};

export default Board;
