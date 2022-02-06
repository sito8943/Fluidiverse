import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// functions
import { BoardGeneration } from "../../utils/game";

// style
import "./style.scss";

// components
import Cell from "../cell/Cell";

const Board = (props) => {
  const { lx, ly } = props;

  const [board, setBoard] = useState(BoardGeneration(lx, ly));
  const [units, setUnits] = useState([]);

  useEffect(() => {
    setBoard(BoardGeneration(lx, ly));
  }, [lx, ly]);

  return (
    <div className="board">
      {board.map((row, index) => {
        return (
          <span key={`row${index}`}>
            {row.map((item, jndex) => {
              return <Cell y={index} x={jndex} value={item} />;
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
};

Board.propTypes = {
  lx: PropTypes.number,
  ly: PropTypes.number,
};

export default Board;
