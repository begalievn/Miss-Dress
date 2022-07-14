import React from "react";

import { photoCardImage } from "../../assets/main-page/images";

import classes from "./photoCard.module.scss";

const PhotoCard = () => {
  return (
    <div className={classes.container}>
      <img src={photoCardImage} />
    </div>
  );
};

export default PhotoCard;
