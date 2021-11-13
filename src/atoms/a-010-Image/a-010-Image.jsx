﻿/* eslint-disable react/no-unknown-property */
import React from "react";
import PropTypes from "prop-types";
import Class from "classnames";
import { v4 as uuidv4 } from "uuid";

import "./a-010-image.scss";

export const A_010_Image = ({ parentClassName, image }) => {
  const nameSpace = "a-010";
  const uiClasses = {
    image: `${nameSpace}-image`,
  };

  return (
    <>
      {image ? (
        <picture
          className={Class(
            { [`${parentClassName}`]: parentClassName !== undefined },
            `${uiClasses.image}`,
          )}>
          {image.sources.map((source) => {
            return <source media={source.media} srcSet={source.srcset} key={uuidv4()} />;
          })}
          <img src={image.src} alt={image.alt} title={image.title} />
        </picture>
      ) : null}
    </>
  );
};

A_010_Image.propTypes = {
  parentClassName: PropTypes.string,
  image: PropTypes.object,
};
