import React, { useEffect, useState, useReducer } from "react";
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
  const { text, accept, cancel, onAccept, onCancel, visible, type, options } =
    props;

  const [shown, setShown] = useState(false);

  const selectedReducer = (currentState, toDo) => {
    const { type, value, key } = toDo;
    const newCurrentState = currentState;
    newCurrentState[key] = value;
    switch (type) {
      case "clicked":
        return newCurrentState;
      default:
        return {};
    }
  };

  const [selectedState, setSelectedState] = useReducer(selectedReducer, {});

  useEffect(() => {
    setShown(visible);
  }, [visible]);

  const jtemSelected = (e) => {
    const { id } = e.target;
    const split = id.split("[!]");
    const key = split[0];
    const value = split[1];
    if (selectedState[key])
      document
        .getElementById(`${key}[!]${selectedState[key]}`)
        .classList.remove("linked");
    setSelectedState({ type: "clicked", key, value });
    document.getElementById(id).classList.add("linked");
  };

  const action = () => {
    onAccept(selectedState);
  };

  return (
    <div
      className="dialog ease-transition"
      style={{ width: 500, opacity: shown ? 1 : 0, zIndex: shown ? 1 : -1 }}
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
      <div className="creation-options">
        {options.map((item, i) => (
          <div key={`c${i}`} className="creation-option-column">
            <h5>{item.key}</h5>
            <ul>
              {item.list.map((jtem, j) => (
                <li key={`j${j}`}>
                  <button
                    type="button"
                    id={`${item.key}[!]${j}`}
                    onClick={jtemSelected}
                    className="ease-transition list-toggle-button un-linked"
                  >
                    {jtem}
                  </button>
                </li>
              ))}{" "}
            </ul>
          </div>
        ))}
      </div>
      <div className="dialog-button-row">
        <button
          type="button"
          className="button primary ease-transition"
          onClick={action}
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
  accept: "Aceptar",
  cancel: "Cancelar",
};

CreationDialog.propTypes = {
  type: PropTypes.number,
  text: PropTypes.string.isRequired,
  accept: PropTypes.string,
  cancel: PropTypes.string,
  onAccept: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.objectOf({
      key: PropTypes.string,
      list: PropTypes.arrayOf(PropTypes.object),
    })
  ).isRequired,
};

export default CreationDialog;
