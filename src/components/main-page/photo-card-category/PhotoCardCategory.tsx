import React from "react";

import PhotoCard from "../photo-card/PhotoCard";

import classes from "./photoCardCategory.module.scss";

const PhotoCardCategory = () => {
  return (
    <div>
      <div>
        <PhotoCard />
      </div>
      <div className={classes.content}></div>
    </div>
  );
};

export default PhotoCardCategory;
