import React from "react";

import classes from "./favoriteProducts.module.scss";

import { IFavBlock } from "../../../../../utils/types/types";

const FavoriteProducts = ({ title, name, sales, income }: IFavBlock) => {
  return (
    <div className={classes.regularUsers}>
      <h2>{title}</h2>
      <div className={classes.inner}>
        <h5>{name}</h5>
        <p>{sales} продаж</p>
        <p>{income}k+ доход</p>
      </div>
      <button className={classes.view_more}>Посмотреть все</button>
    </div>
  );
};

export default FavoriteProducts;
