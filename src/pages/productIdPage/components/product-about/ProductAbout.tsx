import React from "react";

import classes from "./productAbout.module.scss";

interface IProductAbout {
  text: string;
}

const ProductAbout = ({ text }: IProductAbout) => {
  return (
    <div className={classes.container}>
      <h4>О товаре:</h4>
      <p>{text}</p>
    </div>
  );
};

export default ProductAbout;
