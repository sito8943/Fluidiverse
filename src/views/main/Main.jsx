import React, { useEffect, useState } from "react";
import {
  BoardGeneration,
  FromMatrixToArray,
  RandomMove,
  RandomPlayerPosition,
} from "../../utils/game";
import { index, subset, matrix } from "mathjs";

import PropTypes from "prop-types";

import "./style.scss";

const Main = (props) => {
  const { lx, ly } = props;
  const [board, setBoard] = useState(BoardGeneration(lx, ly));
  const [playerPosition, setPlayerPosition] = useState(
    RandomPlayerPosition(lx, ly)
  );
  const [lastPlayerPosition, setLastPlayerPosition] = useState({});

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
    setBoard(BoardGeneration(lx, ly));
    setPlayerPosition(RandomPlayerPosition(lx, ly));
  }, [lx, ly]);

  useEffect(() => {
    if (playerPosition.rx) {
      const newBoard = board;
      if (lastPlayerPosition.rx)
        newBoard[lastPlayerPosition.rx][lastPlayerPosition.ry] = 0;
      newBoard[playerPosition.rx][playerPosition.ry] = 1;
      setBoard(newBoard);
    }
  }, [playerPosition]);

  useEffect(() => {
    console.log(playerPosition);
    setInterval(() => {
      if (playerPosition.rx)
        if (playerPosition !== lastPlayerPosition) {
          setLastPlayerPosition(playerPosition);
          setPlayerPosition(RandomMove(playerPosition, lx, ly));
        }
    }, 10000);
  }, []);

  return (
    <div className="main-screen">
      <table className="board dark-scroll">
        {board.map((row, index) => {
          return (
            <tr key={`row${index}`}>
              {row.map((item, jndex) => {
                return (
                  <td>
                    <button
                      className={getCellColor(index, jndex)}
                      key={`cell${jndex}`}
                    >
                      {item !== 1 ? item : <span className="position">o</span>}
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
