import React from "react";

import PhotoCard from "../photo-card/PhotoCard";

import classes from "./photoCardContainer.module.scss";

const PhotoCardContainer = () => {
  return (
    <div>
      <div>
        <PhotoCard />
      </div>
      <div className={classes.content}></div>
    </div>
  );
};

export default PhotoCardContainer;
