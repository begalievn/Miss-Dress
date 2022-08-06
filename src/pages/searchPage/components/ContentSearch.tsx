import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import classes from "../search.module.scss";

import ProductPhoto from "../../../components/productPhoto/ProductPhoto";

import { colorsPalletIcon, favoriteIcon } from "../../../assets/icons/icons";

import { ProductTest } from "../../../utils/types/types";

import { RatingComponent } from "../../../components/RatingComponent/RatingComponent";

const ContentSearch = ({
  id,
  title,
  price,
  image,
  discount,
  rate,
  status,
}: ProductTest) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/category/5");
  };

  return (
    <>
      <div className={classes.content}>
        <div className={classes.container}>
          <div onClick={() => handleClick()}>
            <ProductPhoto image={image[1]?.url} id={id} />
          </div>
          <div className={classes.content}>
            <div className={classes.first}>
              <div className={classes.price}>
                <span className={classes.old_price}>1000</span>
                <span className={classes.new_price}>{price}</span>
              </div>
              <div className={classes.colors_container}>
                <img src={colorsPalletIcon} alt={"color pallet icon"} />
                <span className={classes.colors}>4</span>
              </div>
            </div>
            <div className={classes.second}>
              <h4>{title}</h4>
            </div>
            <div className={classes.third}>
              <p>
                Размер <span>29</span>
              </p>
            </div>
            <div className={classes.fourth}>
              <div className={classes.stars}>
                <RatingComponent rate={rate} />
              </div>
              <div className={classes.favorite_icon}>
                <img src={favoriteIcon} alt={"favorite icon"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentSearch;
