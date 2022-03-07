import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// styles
import "./style.scss";
import {
  CorrectIcon,
  ExclamationIcon,
  InfoIcon,
  XIcon,
} from "../../../icons/icons";
import {
  DialogTypesEnum,
  DialogTypesNames,
} from "../YesNotDialog/YesNotDialog";

const CreationDialog = (props) => {
  const { text, accept, cancel, onAccept, onCancel, visible, type } = props;

  const [shown, setShown] = useState(false);

  useEffect(() => {
    setShown(visible);
  }, [visible]);

  return (
    <div
      className="dialog ease-transition"
      style={{ opacity: shown ? 1 : 0, zIndex: shown ? 1 : -1 }}
    >
      <div className="flex align-center">
        {type === DialogTypesEnum.Warning && (
          <ExclamationIcon className="icon warning" />
        )}
        {type === DialogTypesEnum.Success && (
          <CorrectIcon className="icon success" />
        )}
        {type === DialogTypesEnum.Information && (
          <InfoIcon className="icon information" />
        )}
        {type === DialogTypesEnum.Error && <XIcon className="icon error" />}

        <h2>{DialogTypesNames[type]}</h2>
      </div>
      <h4>{text}</h4>
      <div className="dialog-button-row">
        <button
          type="button"
          className="button primary ease-transition"
          onClick={onAccept}
        >
          {accept}
        </button>
        <button
          type="button"
          className="button ghost ease-transition"
          onClick={onCancel}
        >
          {cancel}
        </button>
      </div>
    </div>
  );
};

CreationDialog.defaultProps = {
  type: 0, // Warning
};

CreationDialog.propTypes = {
  type: PropTypes.number,
  text: PropTypes.string.isRequired,
  accept: PropTypes.string.isRequired,
  cancel: PropTypes.string.isRequired,
  onAccept: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default CreationDialog;
