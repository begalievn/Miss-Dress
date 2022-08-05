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
          <CategoriesBlock />
          <BestSellersBlock />
          <NewProductsBlock />
          <Collection info={collectionInfo} />
          <Subscribe />
        </div>
        <div className={classes.advantagesContainer}>
          <Advantages />
        </div>
        <div className={classes.content}>
          <NewsList
            title={"Новости"}
            info={
              localStorage.getItem("news") &&
              JSON.parse(localStorage.getItem("news") || "")
            }
          />
        </div>
      </div>
    </>
  );
};

export default MainPage;
