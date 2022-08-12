import React from "react";

import BrownButton from "../../../../../components/brown-button/BrownButton";

import classes from "./viewMoreButton.module.scss";

function ViewMoreButton() {
  return (
    <div className={classes.viewMore}>
      <BrownButton text={"Посмотреть все"} />
    </div>
  );
}

export default ViewMoreButton;
