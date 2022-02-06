import React, { forwardRef } from "react";
import { useDrag } from "react-dnd";
import PropTypes from "prop-types";

// style
import "./style.scss";

const Card = forwardRef((props, ref) => {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    []
  );
  const { id, className, style, children } = props;
  return (
    <div ref={dragRef} id={id} className={className} style={style}>
      {children}
    </div>
  );
});

Card.defaultProps = {
  id: "",
  className: "card vertical",
  style: {},
  children: [],
};

Card.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.array,
};

export default Card;
