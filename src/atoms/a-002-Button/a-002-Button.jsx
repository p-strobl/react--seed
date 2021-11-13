import React from "react";
import PropTypes from "prop-types";

import "./a-002-Button.scss";

export function A_002_Button({ label, clickEvent }) {
  const nameSpace = "a-002";
  const uiClasses = {
    componentName: `${nameSpace}-button`,
  };

  return (
    <button className={`${uiClasses.componentName}`} onClick={clickEvent}>
      {label}
    </button>
  );
}

A_002_Button.propTypes = {
  label: PropTypes.string,
  clickEvent: PropTypes.func,
};
