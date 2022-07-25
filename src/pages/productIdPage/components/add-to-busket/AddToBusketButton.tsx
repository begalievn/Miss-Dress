import React from "react";

import classes from "./addToBusketButton.module.scss";

interface IAddToBusketButton {
  text: string;
}

const AddToBusketButton = ({ text }: IAddToBusketButton) => {
  return <button className={classes.button}>{text}</button>;
};

export default AddToBusketButton;
