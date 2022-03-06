import React from "react";

import PropTypes from "prop-types";

const Textarea = (props) => {
  const { label, tooltip, value, onChange, error, id } = props;
  return (
    <div className="form-input">
      <div className="form-legend">
        <label>{label}</label>
        <span className="tooltip-trigger" data-tip={tooltip}>
          ?
        </span>
      </div>
      <textarea id={id} value={value} onChange={onChange} />

      <span className="error-span">{error}</span>
    </div>
  );
};

Textarea.defaultProps = {
  label: "",
  tooltip: "",
  value: "",
  onChange: null,
  error: "",
};

Textarea.propTypes = {
  label: PropTypes.string,
  tooltip: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default Textarea;
