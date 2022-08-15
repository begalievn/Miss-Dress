import React from "react";
import { on } from "stream";

import classes from "./addToBusketButton.module.scss";

interface IAddToBusketButton {
  text: string;
}

const AddToBusketButton = ({ text }: IAddToBusketButton | any) => {
  return <button className={classes.button}>{text}</button>;
};

export default AddToBusketButton;
