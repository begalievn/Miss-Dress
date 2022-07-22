import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./productPhoto.module.scss";

interface IProductPhoto {
  image?: string;
  category?: string;
  id: number;
}

const ProductPhoto = ({ image, id, category }: IProductPhoto) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/products");
  };

  return (
    <div className={classes.container}>
      <img src={image} alt="" />
      <button className={classes.button} onClick={clickHandler}>
        {"Смотреть"}
      </button>
    </div>
  );
};

export default ProductPhoto;
