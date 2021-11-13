import React from "react";
import PropTypes from "prop-types";

export function A_001_Headline({ type, text }) {
  const nameSpace = "a-001";
  const uiClasses = {
    componentName: `${nameSpace}-${type}-headline`,
  };

  return React.createElement(type, { className: `${uiClasses.componentName}` }, text);
}

A_001_Headline.defaultProps = {
  type: "",
  text: "",
};

A_001_Headline.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
};
