import React from "react";
import Slider from "../../components/main/slider/Slider";
import classes from "./Main.module.scss";

function Main() {
  return (
    <div className={classes.all_container}>
      <Slider />
    </div>
  );
}

export default Main;
