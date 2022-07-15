import React from "react";

import PhotoCardContent from "../../../../components/main-page/photo-card-content/PhotoCardContent";

import classes from "./newProductsBlock.module.scss";

const NewProductsBlock = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}></div>
      <div className={classes.content}>
        <PhotoCardContent />
        <PhotoCardContent />
        <PhotoCardContent />
        <PhotoCardContent />
        <PhotoCardContent />
        <PhotoCardContent />
      </div>
    </div>
  );
};

export default NewProductsBlock;
