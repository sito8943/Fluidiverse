import React, { useEffect } from "react";
import PropTypes from "prop-types";

// contexts
import { useRightSidebar } from "../../context/RightSidebarProvider";

// styles
import "./style.scss";

const Sidebar = (props) => {
  const { id, className, style, children, orientation } = props;
  const { rightSidebarState, setRightSidebarState } = useRightSidebar();

  useEffect(() => {}, []);

  return (
    <div
      style={{
        opacity: rightSidebarState.opacity,
        zIndex: rightSidebarState.opacity ? 1 : -1,
      }}
      className={`${className} ${orientation}`}
      id={id}
    >
      {children}
    </div>
  );
};

Sidebar.defaultProps = {
  id: "",
  className: "sidebar absolute ease-transition",
  style: {},
  children: [],
  orientation: "right",
};

Sidebar.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.array,
  orientation: PropTypes.string,
};

export default Sidebar;
