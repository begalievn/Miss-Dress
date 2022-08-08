import React from "react";
import classes from "./LoaderError.module.scss";
const LoaderError = () => {
  return (
    <div className={classes.internalServerError}>
      <div className={classes.internalServerError__header}>Error 500</div>
      <div className={classes.internalServerError__body}>
        <p>We had an internal problem</p>
        <p>Dont worry - We are on it</p>
      </div>
    </div>
  );
};

export default LoaderError;
