import React from "react";

import ProductPhoto from "../productPhoto/ProductPhoto";

import { CategoryTypes } from "../../utils/types/types";

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
        <ProductPhoto image={image} category={category} id={id} />
      </div>
      <div className={classes.content}>
        <p>{category}</p>
      </div>
    </div>
  );
};

export default PhotoCardCategory;
