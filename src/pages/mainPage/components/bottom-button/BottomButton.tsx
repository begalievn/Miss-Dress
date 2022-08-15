import React, { FC } from "react";

// import { useNavigate } from "react-router-dom";

import classes from "./bottomButton.module.scss";

interface IBottomButton {
  text: string;
}

const BottomButton: FC<IBottomButton> = ({ text }) => {
  // const navigate = useNavigate();

  // const clickHandler = () => {
  //   navigate("/products");
  // };

  return (
    <div className={classes.container}>
      {/* <button onClick={clickHandler}>{text}</button> */}
      <button className={classes.btn}>{text}</button>
    </div>
  );
};

export default BottomButton;
