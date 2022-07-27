import React from "react";

import classes from "./brownButton.module.scss";

interface IBrownButton {
  text: string;
}

const BrownButton = ({ text }: IBrownButton) => {
  return <button className={classes.button}>{text}</button>;
};

export default BrownButton;
