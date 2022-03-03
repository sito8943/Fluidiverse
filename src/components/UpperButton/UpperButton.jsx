import React from "react";

import PropTypes from "prop-types";

import "./style.scss";

const UpperButton = (props) => {
  const { children, corner, action } = props;
  return (
    <button
      onClick={action}
      className={`upper-button ease-transition ${corner}`}
    >
      {children}
    </button>
  );
};

UpperButton.defaultProps = {
  corner: "upper-left",
};

UpperButton.propTypes = {
  corner: PropTypes.string,
  children: PropTypes.element.isRequired,
  action: PropTypes.func.isRequired,
};

export default UpperButton;
