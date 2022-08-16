import React from "react";

import ContentReturnProduct from "./components/ContentReturnProduct";

import classes from "./return.module.scss";

const ReturnProduct = () => {
  
  return (
    <div className={classes.container}>
      <ContentReturnProduct />
    </div>
  );
};

export default ReturnProduct;
