import React from "react";
import PropTypes from "prop-types";

// components
import Card from "./Card";

// style
import "./style.scss";

const StaticUnitCard = (props) => {
  const { type, img, name, description } = props;
  return (
    <Card>
      <img src={img} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <button className="button ghost">Hola</button>
      </div>
    </Card>
  );
};

StaticUnitCard.propsType = {
  type: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default StaticUnitCard;
