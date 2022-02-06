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

const StaticUnitCard = (props) => {
  const { type, img, name, description, useCardContext } = props;
  const { unitCardState, setUnitCardState } = useUnitCard();

  const [typeState, setTypeState] = useState(0);
  const [imgState, setImgState] = useState(0);
  const [nameState, setNameState] = useState(0);
  const [descriptionState, setDescriptionState] = useState(0);

  const ref = useOnclickOutside(() => {
    setUnitCardState({ type: "reset" });
  });

  useEffect(() => {
    if (useCardContext) {
      setTypeState(unitCardState.type);
      setImgState(unitCardState.img);
      setNameState(unitCardState.name);
      setDescriptionState(unitCardState.description);
    }
  }, [
    useCardContext,
    unitCardState.type,
    unitCardState.img,
    unitCardState.name,
    unitCardState.description,
  ]);

  return (
    <Card
      className="card vertical absolute"
      style={{ backgroundImage: `url(${back})` }}
      ref={ref}
    >
      <div>
        <img src={imgState} alt={nameState} />
      </div>

      <div className="text-container">
        <h3>{nameState}</h3>
        <p>{descriptionState}</p>
        <button className="button ghost ease-transition">Hola</button>
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
