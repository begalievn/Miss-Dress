import React, { useState } from "react";

import classes from "./addToBusketButton.module.scss";
import { shoppingCartApi } from "../../../../store/services/shoppingCartQuery";

interface IAddToBusketButton {
  text: string;
}

const AddToBusketButton = ({ text }: IAddToBusketButton | any) => {
  return <button className={classes.button}>{text}</button>;
};

export default AddToBusketButton;
