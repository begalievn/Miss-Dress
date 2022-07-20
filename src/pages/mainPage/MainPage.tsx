import React from "react";

import { winter } from "../../assets/main-page/images";

import Collection from "./components/collection/Collection";
import Subscribe from "./components/subscribe/Subscribe";
import Advantages from "./components/advantages/Advantages";
import NewsList from "./components/newsList/NewsList";

import classes from "./mainPage.module.scss";
import CategoriesBlock from "./components/categories-block/CategoriesBlock";
import BestSellersBlock from "./components/best-sellers-block/BestSellersBlock";
import NewProductsBlock from "./components/new-products-block/NewProductsBlock";
import Slider from "./components/slider/Slider";

const collectionInfo = [
  {
    image: winter,
    title: "ЛЕТО",
  },
  {
    image: "https://picsum.photos/500",
    title: "ВЕСНА",
  },
  {
    image: winter,
    title: "ОСЕНЬ ",
  },
  {
    image: winter,
    title: "ЗИМА",
  },
];

const MainPage = () => {
  return (
    <>
      <Slider />
      <div className={classes.container}>
        <div className={classes.content}>
          <Collection info={collectionInfo} />
          <Subscribe />
          <Advantages />
          <NewsList />
          <CategoriesBlock />
          <BestSellersBlock />
          <NewProductsBlock />
        </div>
      </div>
    </>
  );
};

export default MainPage;
