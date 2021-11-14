import React from "react";
import Class from "classnames";

import { isTouchDevice } from "Helper/Utilities";

import "./App.scss";

export function App() {
  const uiClasses = {
    app: "app",
    noTouch: "no-touch",
  };

  return (
    <div
      className={Class(`${uiClasses.app}`, {
        [`${uiClasses.noTouch}`]: !isTouchDevice(),
      })}
    >
      <div>Hell World</div>
    </div>
  );
}
