import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// styles
import "./style.scss";

const YesNotDialog = (props) => {
  const { text, accept, cancel, onAccept, onCancel, visible } = props;

  const [shown, setShown] = useState(false);

  useEffect(() => {
    setShown(visible);
  }, [visible]);

  return (
    <div className="dialog ease-transition" style={{ opacity: shown ? 1 : 0 }}>
      <h4>{text}</h4>
      <button type="button" onClick={onAccept}>
        {accept}
      </button>
      <button type="button" onClick={onCancel}>
        {cancel}
      </button>
    </div>
  );
};

YesNotDialog.propTypes = {
  text: PropTypes.string.isRequired,
  accept: PropTypes.string.isRequired,
  cancel: PropTypes.string.isRequired,
  onAccept: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default YesNotDialog;
