import React from "react";

import ProductPhoto from "../productPhoto/ProductPhoto";

import { CategoryTypes } from "../../utils/types/types";

import classes from "./photoCardCategory.module.scss";

interface IPhotoCardCategory {
  image: string;
  category: string;
  id: number;
}

const PhotoCardCategory = ({ cover, title, id }: any) => {
  return (
    <div className={classes.container}>
      <div>
        <ProductPhoto image={cover} category={title} id={id} />
      </div>
      <div className={classes.content}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default PhotoCardCategory;
