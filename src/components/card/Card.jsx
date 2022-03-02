import React, { forwardRef } from "react";
import PropTypes from "prop-types";

// style
import "./style.scss";

const Card = forwardRef((props, ref) => {
  const { id, className, style, orentation, children } = props;
  return (
    <div
      ref={ref}
      id={id}
      className={`card ${className} ${orentation}`}
      style={style}
    >
      {children}
    </div>
  );
});

Card.defaultProps = {
  id: "",
  className: "",
  orentation: "vertical",
  style: {},
  children: [],
};

Card.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.array,
};

export default Card;
