import React from "react";

import classes from "../favorite.module.scss";
import ProductPhoto from "../../../components/productPhoto/ProductPhoto";
import {
  colorsPalletIcon,
  favoriteIcon,
  filledLike,
} from "../../../assets/icons/icons";
import { RatingComponent } from "../../../components/RatingComponent/RatingComponent";
import { IFavorites } from "../../../utils/types/types";
import { productFavoritesApi } from "../../../store/services/productFavoritesApi";

const ContentFavorite = ({
  name,
  id,
  price,
  size,
  colors,
  rate,
}: IFavorites) => {
  const [addFav] = productFavoritesApi.useAddFavoritesMutation();

  const handleAddFav = () => {
    addFav({ name, id, price, size, colors, rate });
  };

  return (
    <div className={classes.content}>
      <div className={classes.container}>
        <div>
          <ProductPhoto
            image="https://img1.akspic.ru/crops/2/5/8/3/4/143852/143852-atmosfera-prirodnyj_landshaft-utro-nebo-gora-1500x2100.jpg"
            id={id}
          />
        </div>
        <div className={classes.content}>
          <div className={classes.first}>
            <div className={classes.price}>
              <span className={classes.old_price}>{price}</span>
              <span className={classes.new_price}>{price}</span>
            </div>
            <div className={classes.colors_container}>
              <img src={colorsPalletIcon} alt={"color pallet icon"} />
              <span className={classes.colors}>{colors}</span>
            </div>
          </div>
          <div className={classes.second}>
            <h4>{name}</h4>
          </div>
          <div className={classes.third}>
            <p>
              Размер <span>{size}</span>
            </p>
          </div>
          <div className={classes.fourth}>
            <div className={classes.stars}>
              <RatingComponent rate={rate} />
            </div>
            <div onClick={handleAddFav} className={classes.favorite_icon}>
              <img src={filledLike} alt={"favorite icon"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentFavorite;
