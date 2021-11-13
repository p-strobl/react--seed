import React from "react";
import Class from "classnames";
import MetaTags from "react-meta-tags";

import { isTouchDevice } from "Helper/Utilities";

import "./App.scss";

// import favicon from "Images/favicon.ico";
// import appleTouchIcon from "Images/apple-touch-icon.png";
// import safariPin from "Images/safari-pinned-tab.svg";
// import siteManifest from "Images/site.webmanifest";
// import browserConfig from "Images/browserconfig.xml";
// import "Images/android-chrome-192x192.png";
// import "Images/android-chrome-512x512.png";
// import "Images/mstile-150x150.png";

function Meta_Tags() {
  return (
    <MetaTags>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1"
      />
      {/* <meta name="msapplication-TileColor" content="#ffc40d" />
      <meta name="msapplication-config" content={browserConfig} />
      <meta name="theme-color" content="#ffffff"></meta>
      <link rel="shortcut icon" href={favicon}></link>
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon}></link>
      <link rel="mask-icon" href={safariPin} color="#0d883d"></link>
      <link rel="manifest" href={siteManifest}></link> */}
      <title>Title</title>
    </MetaTags>
  );
}

export function App() {
  const uiClasses = {
    app: "app",
    noTouch: "no-touch",
  };

  return (
    <>
      <Meta_Tags />
      <div className={Class(`${uiClasses.app}`, { [`${uiClasses.noTouch}`]: !isTouchDevice() })}>
        <div></div>
      </div>
    </>
  );
}
