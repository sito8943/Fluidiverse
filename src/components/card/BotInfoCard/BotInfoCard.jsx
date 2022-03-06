import React, { useEffect, useReducer } from "react";

import PropTypes from "prop-types";

// styles
import "../style.scss";

import Card from "../Card";

const BotInfoCard = (props) => {
  const { name, innerState, perception, planet } = props;

  const cardStateReducer = (currentState, toDo) => {
    const { type, name, innerState, perception, planet } = toDo;
    switch (type) {
      case "set-name":
        return { ...currentState, name };
      case "set-inner-state":
        return { ...currentState, innerState: innerState };
      case "set-perception":
        return { ...currentState, perception: perception };
      case "set-planet":
        return { ...currentState, planet };

      default:
        return {
          name,
          innerState,
          perception,
          planet,
        };
    }
  };

  const [cardState, setCardState] = useReducer(cardStateReducer, {
    name: "",
    innerState: "",
    perception: "",
    planet: "",
  });

  useEffect(() => {
    setCardState({
      type: "all",
      name,
      innerState: innerState.Name,
      perception: perception.Name,
      planet,
    });
  }, [name, innerState.Name, perception.Name, planet]);

  const texts = {
    Perception: "Percepción actual",
    InnerState: "Estado interno",
  };

  return (
    <div className="container">
      <Card orentation="horizontal bot-info-card">
        <div className="flex">
          <div style={{ backgroundImage: planet }}>
            <img src={cardState.planet} alt={"innerState"} />
          </div>
          <div>
            <h3>{cardState.name}</h3>
            <p>
              {`${texts["Perception"]}: `}
              <span>{`${cardState.perception}`}</span>
            </p>
            <p>
              {`${texts["InnerState"]}: `}
              <span>{`${cardState.innerState}`}</span>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

BotInfoCard.propTypes = {
  planet: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  innerState: PropTypes.object.isRequired,
  perception: PropTypes.object.isRequired,
};

export default BotInfoCard;
