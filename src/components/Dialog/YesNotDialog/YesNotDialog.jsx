import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// styles
import "../style.scss";
import {
  CorrectIcon,
  ExclamationIcon,
  InfoIcon,
  XIcon,
} from "../../../icons/icons";

export const DialogTypesEnum = {
  Warning: 0,
  Error: 1,
  Success: 2,
  Information: 3,
};

export const DialogTypesNames = [
  "Advertencia",
  "Error",
  "Éxito",
  "Información",
];

const YesNotDialog = (props) => {
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

YesNotDialog.defaultProps = {
  type: 0, // Warning
  accept: "Aceptar",
  cancel: "Cancelar",
};

YesNotDialog.propTypes = {
  type: PropTypes.number,
  text: PropTypes.string.isRequired,
  accept: PropTypes.string,
  cancel: PropTypes.string,
  onAccept: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default YesNotDialog;
