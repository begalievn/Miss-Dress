import React from "react";

import { photoCardImage } from "../../../assets/main-page/images";

import classes from "./photoCard.module.scss";

const PhotoCard = () => {
  return (
    <div className={classes.container}>
      <img src={photoCardImage} alt="" />
      <button className={classes.button}>{`Смотреть`}</button>
    </div>
  );
};

export default PhotoCard;
