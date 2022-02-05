import React, { useEffect, useState } from "react";
import { BoardGeneration } from "../../utils/game";

import PropTypes from "prop-types";

const Main = (props) => {
  const { lx, ly } = props;
  const [arrayMatrix, setArrayMatrix] = useState([]);
  useEffect(() => {
    const board = BoardGeneration(lx, ly);
    let xs = 0;
    const matrix = [];
    let row = [];
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
  }, []);
  return (
    <div>
      {arrayMatrix.map((row) => {
        return (
          <>
            {row.map((item, index) => {
              return <button key={`cell${index}`}>{item}</button>;
            })}
          </>
        );
      })}
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
