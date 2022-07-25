import React from "react";

import classes from "./productsGridContainer.module.scss";

interface IProductsGridContainer {
  children: React.ReactNode;
}

const ProductsGridContainer = ({ children }: IProductsGridContainer) => {
  return <div className={classes.container}>{children}</div>;
};

export default ProductsGridContainer;
