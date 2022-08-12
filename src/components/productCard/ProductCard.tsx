import React from "react";

import { colorsPalletIcon, favoriteIcon } from "../../assets/icons/icons";

import ProductPhoto from "../productPhoto/ProductPhoto";

import { useNavigate } from "react-router-dom";

import { RatingComponent } from "../RatingComponent/RatingComponent";

import classes from "./productCard.module.scss";

interface Images {
  contentSize: number;
  contentType: string;
  createDate: string;
  fileKey: string;
  id: number;
  name: string;
  status: number;
  updateDate: string;
  url: string;
}

interface IProductCard {
  title: string;
  price: number;
  id: number;
  image: Images[] | [];
  width?: string;
  rate: number;
  status: number;
}

const ProductCard = ({
  title,
  price,
  image,
  id,
  rate,
  status,
  width,
}: IProductCard) => {
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div>
        <ProductPhoto image={image[0]?.url} id={id} />
      </div>
      <div className={classes.content}>
        <div className={classes.first}>
          <div className={classes.price}>
            <span className={classes.old_price}>{price}</span>
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
  );
};

export default ProductCard;
