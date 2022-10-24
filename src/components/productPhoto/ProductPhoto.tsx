import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import classes from "./productPhoto.module.scss";

interface IProductPhoto {
  image?: string;
  category?: string;
  id: number;
}

const ProductPhoto = ({ image, id}: any) => {
  // const { productID } = useParams();
  return (
    <div className={classes.container}>
      <img src={image} alt="" />

      <Link to={`books/${id}`}>
        <button className={classes.button}>{"Смотреть"}</button>
      </Link>
    </div>
  );
};

export default ProductPhoto;
