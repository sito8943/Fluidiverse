import React from "react";

import PropTypes from "prop-types";

import "./style.scss";

const UpperButton = (props) => {
  const { children } = props;
  return <button className="upper-button ease-transition">{children}</button>;
};

UpperButton.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UpperButton;
