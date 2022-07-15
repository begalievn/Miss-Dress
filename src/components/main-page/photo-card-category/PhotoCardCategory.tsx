import React from "react";

import PhotoCard from "../../photo-card/PhotoCard";

import classes from "./photoCardCategory.module.scss";

const PhotoCardCategory = () => {
  return (
    <div className={classes.container}>
      <div>
        <PhotoCard />
      </div>
      <div className={classes.content}>
        <p>{"Джинсы"}</p>
      </div>
    </div>
  );
};

export default PhotoCardCategory;
