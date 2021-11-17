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
    <div className={Class(`${uiClasses.app}`, { [`${uiClasses.noTouch}`]: !isTouchDevice() })}>
      <header>
        <section className="u-section">
          <div className="u-container">
            <div className="grid-container">
              <div className="col-span-6">Header Content</div>
              <div className="col-span-6">Header Content</div>
            </div>
          </div>
        </section>
        <section className="u-section--e2e">
          <div className="u-container">
            <div className="grid-container">
              <div className="col-span-6">Header Content</div>
            </div>
          </div>
        </section>
      </header>
      <main>
        <div className="module-container--fluid">Main Content</div>
      </main>
      <footer>
        <div>Footer Content</div>
      </footer>
    </div>
  );
}
