import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import classes from "./productPhoto.module.scss";

interface IProductPhoto {
  image?: string;
  category?: string;
  id: number;
}

const ProductPhoto = ({ image, id, category }: IProductPhoto) => {
  // const { productID } = useParams();
  return (
    <div className={classes.container}>
      <img src={image} alt="" />

      <Link to={`${id}`}>
        <button className={classes.button}>{"Смотреть"}</button>
      </Link>
    </div>
  );
};

export default ProductPhoto;
