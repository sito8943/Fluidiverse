import React, { useState } from "react";

import PropTypes from "prop-types";

// styles
import "./style.scss";

const TabView = (props) => {
  const { content, headers } = props;
  const [tab, setTab] = useState(0);

  return (
    <div className="tab-view">
      <div className="tab-headers">
        {headers.map((item, i) => (
          <button
            className={`button ease-transition ${
              i === tab ? "primary" : "ghost"
            }`}
            type="button"
            key={`tab-header${i}`}
            onClick={() => setTab(i)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="tab-content">{content[tab]}</div>
    </div>
  );
};

TabView.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  content: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default TabView;
