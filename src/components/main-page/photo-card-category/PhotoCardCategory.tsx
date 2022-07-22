import React from "react";

import PhotoCard from "../../photo-card/PhotoCard";

import classes from "./photoCardCategory.module.scss";

interface IPhotoCardCategory {
  image: string;
  category: string;
  id: number;
}

const PhotoCardCategory = ({ image, category, id }: IPhotoCardCategory) => {
  return (
    <div className={classes.container}>
      <div>
        <PhotoCard image={image} category={category} id={id} />
      </div>
      <div className={classes.content}>
        <p>{category}</p>
      </div>
    </div>
  );
};

export default PhotoCardCategory;
