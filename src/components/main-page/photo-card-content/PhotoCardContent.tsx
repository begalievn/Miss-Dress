import React from "react";

import PhotoCard from "../../photo-card/PhotoCard";

import {
  colorsPalletIcon,
  blackStarIcon,
  whiteStarIcon,
  favoriteIcon,
} from "../../../assets/icons/icons";

import classes from "./photoCardContent.module.scss";

export const data = {
  price: {
    oldPrice: 7500,
    newPrice: 5990,
  },
  colors: 5,
  name: "Envy Look All Season Skirt",
  sizes: [29, 49],
  stars: 4,
  isFavorite: false,
};

interface IPhotoCardContent {
  image: string;
  id: number;
}

const PhotoCardContent = ({ image, id }: IPhotoCardContent) => {
  return (
    <div className={classes.container}>
      <div>
        <PhotoCard image={image} id={id} />
      </div>
      <div className={classes.content}>
        <div className={classes.first}>
          <div className={classes.price}>
            <span className={classes.old_price}>{data.price.oldPrice}</span>
            <span className={classes.new_price}>{data.price.newPrice}</span>
          </div>
          <div className={classes.colors_container}>
            <img src={colorsPalletIcon} alt={"color pallet icon"} />
            <span className={classes.colors}>{data.colors}</span>
          </div>
        </div>
        <div className={classes.second}>
          <h4>{data.name}</h4>
        </div>
        <div className={classes.third}>
          <p>
            Размер <span>{data.sizes[0]}</span>
          </p>
        </div>
        <div className={classes.fourth}>
          <div className={classes.stars}>
            <img src={blackStarIcon} alt={"star"} />
            <img src={blackStarIcon} alt={"star"} />
            <img src={blackStarIcon} alt={"star"} />
            <img src={blackStarIcon} alt={"star"} />
            <img src={blackStarIcon} alt={"star"} />
          </div>
          <div className={classes.favorite_icon}>
            <img src={favoriteIcon} alt={"favorite icon"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCardContent;
