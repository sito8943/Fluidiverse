import React from "react";

import PropTypes from "prop-types";

// styles
import "./style.scss";

const unitsType = ["nothing", "player", "planet", "dark-hole", "star"];

const Cell = (props) => {
  const { x, y, unit } = props;

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
      {unit.value === 0 ? (
        unit.value
      ) : (
        <img className={unitsType[unit.type]} src={unit.img} alt={unit.name} />
      )}
    </button>
  );
};

Cell.defaultProps = {
  unit: { value: 0 },
};

Cell.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  unit: PropTypes.object,
};

export default Cell;
