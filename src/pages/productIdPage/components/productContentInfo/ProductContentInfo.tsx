import React from "react";
import { useParams } from "react-router-dom";

import { favoriteIcon } from "../../../../assets/icons/icons";
import { categoryOneProductApi } from "../../../../store/services/categoryOneProductApi";

import classes from "./productContentInfo.module.scss";

const ProductContentInfo = () => {

  const { productID } = useParams();

  const {
    data:newData,
    isLoading: loading,
    isError: error,
  } = categoryOneProductApi.useFetchCategoryOneProductApiQuery(productID);
  // console.log("newData", newData);

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h3>{newData ? newData.title : null}</h3>
      </div>
      <div className={classes.article}>
        <div>
          <span className={classes.article_name}>{"Артикул:"}</span>
          <span className={classes.article_data}>{newData ? newData.article : null}</span>
        </div>
        <div className={classes.like_icon}>
          <img src={favoriteIcon} alt="favorite icon" />
        </div>
      </div>
      <div className={classes.quantity}>
        <span className={classes.span}>{"Количество в линейке:"}</span>
        <span>{newData ? newData.amount : null}</span>
      </div>
      <div className={classes.color}>
        {/* <span>{"Цвет:"}</span> */}
        <span className={classes.color_colors}></span>
      </div>
      <div className={classes.price}>
        <span>{newData ? newData.price : null}</span>
        <span>{newData ? newData.discount : null}</span>
      </div>
      <div className={classes.information}>
        {/* <div> */}
          {/* <span>
            <span>{"Размер:"}</span>
            <span>{"Дата"}</span>
          </span> */}
          {/* <span>
            <span>{"Ткань:"}</span>
            <span>{"Data"}</span>
          </span> */}
        {/* </div> */}
        {/* <div> */}
          {/* <span>
            <span>{"Длина:"}</span>
            <span>{"Дата"}</span>
          </span> */}
          {/* <span>
            <span>{"Фасон:"}</span>
            <span>{"Дата"}</span>
          </span> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default ProductContentInfo;
