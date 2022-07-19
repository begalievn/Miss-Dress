import React from "react";

import classes from "./mainPage.module.scss";
import CategoriesBlock from "./components/categories-block/CategoriesBlock";
import BestSellersBlock from "./components/best-sellers-block/BestSellersBlock";
import NewProductsBlock from "./components/new-products-block/NewProductsBlock";
import Slider from "./components/slider/Slider";

const MainPage = () => {
  return (
    <>
      <Slider />
      <div className={classes.container}>
        <div className={classes.content}>
          <CategoriesBlock />
          <BestSellersBlock />
          <NewProductsBlock />
        </div>
      </div>
    </>
  );
};

export default MainPage;
