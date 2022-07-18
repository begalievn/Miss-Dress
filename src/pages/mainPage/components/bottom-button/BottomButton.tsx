import React, { FC } from "react";

import classes from "./bottomButton.module.scss";

interface IBottomButton {
  text: string;
}

const BottomButton: FC<IBottomButton> = ({ text }) => {
  return (
    <div className={classes.container}>
      <button>{text}</button>
    </div>
  );
};

export default BottomButton;
