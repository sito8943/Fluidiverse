import React from "react";

import PropTypes from "prop-types";

// styles
import "./style.scss";

const Cell = (props) => {
  const { x, y, value } = props;

  const getCellColor = () => {
    // bad-cell
    if (y % 2 === 0) {
      if (x % 2 !== 0) return "bad-cell";
      else return "good-cell";
    }

    if (y % 2 !== 0) {
      if (x % 2 === 0) return "bad-cell";
      else return "good-cell";
    }
  };
  return (
    <button className={`cell ${getCellColor(x, y)}`} key={`cell${x}`}>
      {value !== 1 ? value : <span className="position">o</span>}
    </button>
  );
};

Cell.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default Cell;
