import React from "react";

import PropTypes from "prop-types";

// styles
import "./style.scss";

const unitsType = ["nothing", "player", "planet", "dark-hole", "star"];

const Cell = (props) => {
  const { x, y, unit, onMouseEnter, onMouseLeave, onClick } = props;

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
    <button
      name={unit.type !== 0 ? `u${unit.id}` : ""}
      className={`cell ${getCellColor(x, y)}`}
      key={`cell${x}`}
      onMouseEnter={unit.type !== 0 ? onMouseEnter : null}
      onMouseLeave={unit.type !== 0 ? onMouseLeave : null}
      onClick={unit.type !== 0 ? onClick : null}
    >
      {unit.type === 0 ? (
        unit.type
      ) : (
        <img className={unitsType[unit.type]} src={unit.img} alt={unit.name} />
      )}
    </button>
  );
};

Cell.defaultProps = {
  unit: { type: 0 },
  onMouseEnter: null,
  onMouseLeave: null,
  onClick: null,
};

Cell.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  unit: PropTypes.object,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default Cell;
