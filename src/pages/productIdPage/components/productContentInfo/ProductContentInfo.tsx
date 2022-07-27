import React from "react";

import { favoriteIcon } from "../../../../assets/icons/icons";

import classes from "./productContentInfo.module.scss";

const ProductContentInfo = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h3>{"Title"}</h3>
      </div>
      <div className={classes.article}>
        <div>
          <span className={classes.article_name}>{"Артикул:"}</span>
          <span className={classes.article_data}>{"data"}</span>
        </div>
        <div className={classes.like_icon}>
          <img src={favoriteIcon} alt="favorite icon" />
        </div>
      </div>
      <div className={classes.quantity}>
        <span className={classes.span}>{"Количество в линейке:"}</span>
        <span>{"data"}</span>
      </div>
      <div className={classes.color}>
        <span>{"Цвет:"}</span>
        <span className={classes.color_colors}></span>
      </div>
      <div className={classes.price}>
        <span>{5990}</span>
        <span>{7500}</span>
      </div>
      <div className={classes.information}>
        <div>
          <span>
            <span>{"Размер:"}</span>
            <span>{"Дата"}</span>
          </span>
          <span>
            <span>{"Ткань:"}</span>
            <span>{"Data"}</span>
          </span>
        </div>
        <div>
          <span>
            <span>{"Длина:"}</span>
            <span>{"Дата"}</span>
          </span>
          <span>
            <span>{"Фасон:"}</span>
            <span>{"Дата"}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductContentInfo;