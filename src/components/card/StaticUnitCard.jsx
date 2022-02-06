import React, { useEffect, useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import PropTypes from "prop-types";

// components
import Card from "./Card";

// context
import { useUnitCard } from "../../context/UnitCard";

// imgs
import back from "../../sprites/SpaceBackground.png";

// style
import "./style.scss";
import { XIcon } from "../../icons/icons";

const StaticUnitCard = (props) => {
  const { type, img, name, description, useCardContext } = props;
  const { unitCardState, setUnitCardState } = useUnitCard();

  const [typeState, setTypeState] = useState(0);
  const [imgState, setImgState] = useState(0);
  const [nameState, setNameState] = useState(0);
  const [descriptionState, setDescriptionState] = useState(0);

  const ref = useOnclickOutside(() => {
    showOff();
  });

  const showOff = () => {
    console.log("card", unitCardState);
    if (unitCardState.opacity > 0) {
      setUnitCardState({ type: "hide" });

      setTimeout(() => {
        setUnitCardState({ type: "reset" });
      }, 400);
    }
  };

  const closeButton = () => {
    showOff();
  };

  const travelTo = () => {
    showOff();
  };

  useEffect(() => {
    if (useCardContext) {
      const { type, img, name, description } = unitCardState;
      setTypeState(type);
      setImgState(img);
      setNameState(name);
      setDescriptionState(description);
    } else {
      setTypeState(type);
      setImgState(img);
      setNameState(name);
      setDescriptionState(description);
    }
  }, [useCardContext, unitCardState, img, type, name, description]);

  return (
    <Card
      className="card vertical absolute ease-transition"
      style={{
        backgroundColor: "#222333cc",
        opacity: unitCardState.opacity,
        zIndex: unitCardState.opacity ? 1 : -1,
      }}
      ref={unitCardState.opacity > 0 ? ref : null}
    >
      <div className="close-container">
        <button onClick={closeButton}>
          <XIcon />
        </button>
      </div>

      <div>
        <img src={imgState} alt={nameState} />
      </div>

      <div className="text-container">
        <h3>{nameState}</h3>
        <p>{descriptionState}</p>
        <button className="button ghost ease-transition" onClick={travelTo}>
          Viajar
        </button>
      </div>
    </Card>
  );
};

StaticUnitCard.defaultProps = {
  type: 0,
  img: "",
  name: "",
  description: "",
  useCardContext: false,
};

StaticUnitCard.propsType = {
  type: PropTypes.number,
  img: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  useCardContext: PropTypes.bool,
};

export default StaticUnitCard;
