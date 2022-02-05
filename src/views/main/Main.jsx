import React, { useEffect, useState } from "react";
import { BoardGeneration, RandomPlayerPosition } from "../../utils/game";
import { index } from "mathjs";

import PropTypes from "prop-types";

import "./style.scss";

const Main = (props) => {
  const { lx, ly } = props;
  const [arrayMatrix, setArrayMatrix] = useState([]);

  const getCellColor = (row, column) => {
    // bad-cell
    if (row % 2 === 0) {
      if (column % 2 !== 0) return "bad-cell";
      else return "good-cell";
    }

    if (row % 2 !== 0) {
      if (column % 2 === 0) return "bad-cell";
      else return "good-cell";
    }
  };

  useEffect(() => {
    const board = BoardGeneration(lx, ly);
    const playerPosition = RandomPlayerPosition(lx, ly);
    let xs = 0;
    const matrix = [];
    let row = [];
    console.log(playerPosition);
    board.subset(index(playerPosition.rx, playerPosition.ry), 1);
    board.forEach((value, index, board) => {
      if (xs < lx) {
        row.push(value);
        ++xs;
      } else {
        matrix.push(row);
        row = [];
        xs = 0;
      }
    });
    setArrayMatrix(matrix);
  }, [lx, ly]);

  return (
    <div className="main-screen">
      <table className="board dark-scroll">
        {arrayMatrix.map((row, index) => {
          return (
            <tr key={`row${index}`}>
              {row.map((item, jndex) => {
                return (
                  <td>
                    <button
                      className={getCellColor(index, jndex)}
                      key={`cell${jndex}`}
                    >
                      {item !== 1 ? item : "X"}
                    </button>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </table>
    </div>
  );
};

Main.defaultProps = {
  lx: 10,
  ly: 10,
};

Main.propTypes = {
  lx: PropTypes.number,
  ly: PropTypes.number,
};

export default Main;
