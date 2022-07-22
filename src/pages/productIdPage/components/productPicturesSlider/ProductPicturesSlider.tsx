import React from "react";

import classes from "./productPicturesSlider.module.scss";

const ProductPicturesSlider = () => {
  return (
    <div className={classes.container}>
      <div className={classes.arrow_up}></div>
      <div className={classes.pictures}>
        <div className={classes.carousel}></div>
      </div>
      <div className={classes.arrow_down}></div>
    </div>
  );
};

export default ProductPicturesSlider;
