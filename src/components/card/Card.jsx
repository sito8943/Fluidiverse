import React from "react";
import PropTypes from "prop-types";

// style
import "./style.scss";

const Card = (props) => {
  const { id, className, style, children } = props;
  return (
    <div id={id} className={className} style={style}>
      {children}
    </div>
  );
};

Card.defaultProps = {
  id: "",
  className: "card vertical",
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
