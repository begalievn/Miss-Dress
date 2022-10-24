import React, { useState } from "react";

import { shoppingCartApi } from "../../../../store/secondary/shoppingCartQuery";

import classes from "./addToBusketButton.module.scss";

interface IAddToBusketButton {
  text: string;
}

const AddToBusketButton = ({ text }: IAddToBusketButton | any) => {
  return <button className={classes.button}>{text}</button>;
};

export default AddToBusketButton;
