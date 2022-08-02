import React from "react";

import { useNavigate } from "react-router-dom";

import classes from "../search.module.scss";

import ProductPhoto from "../../../components/productPhoto/ProductPhoto";

import {
  blackStarIcon,
  colorsPalletIcon,
  favoriteIcon,
} from "../../../assets/icons/icons";

import { ProductTest } from "../../../utils/types/types";

const ContentSearch = ({ id, title, price, discount, rate }: ProductTest) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/category/4");
  };

  return (
    <>
      <div className={classes.content}>
        <div className={classes.container}>
          <div>
            <ProductPhoto
              image="https://img1.akspic.ru/crops/2/5/8/3/4/143852/143852-atmosfera-prirodnyj_landshaft-utro-nebo-gora-1500x2100.jpg"
              id={id}
            />
          </div>
          <div onClick={handleClick} className={classes.content}>
            <div className={classes.first}>
              <div className={classes.price}>
                <span className={classes.old_price}>200</span>
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
                <img src={blackStarIcon} alt={"star"} />
                <img src={blackStarIcon} alt={"star"} />
                <img src={blackStarIcon} alt={"star"} />
                <img src={blackStarIcon} alt={"star"} />
                <img src={blackStarIcon} alt={"star"} />
                {rate}
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
