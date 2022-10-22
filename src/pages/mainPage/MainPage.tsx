import React, { useEffect } from "react";

import { winter } from "../../assets/main-page/images";

import Collection from "./components/collection/Collection";

import Subscribe from "./components/subscribe/Subscribe";
import CategoriesBlock from "./components/categories-block/CategoriesBlock";
import BestSellersBlock from "./components/best-sellers-block/BestSellersBlock";
import NewProductsBlock from "./components/new-products-block/NewProductsBlock";
import Slider from "./components/slider/Slider";


import classes from "./mainPage.module.scss";

export const collectionInfo = [
  {
    image: winter,
    title: "ЛЕТО",
    path: "summer",
  },
  {
    image: "https://picsum.photos/500",
    title: "ВЕСНА",
    path: "spring",
  },
  {
    image: winter,
    title: "ОСЕНЬ ",
    path: "autumn",
  },
  {
    image: winter,
    title: "ЗИМА",
    path: "winter",
  },
];

const MainPage = () => {

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior:"smooth"});
  }, []);

  return (
    <>
      {/*<Slider />*/}
      <div className={classes.container}>
        <div className={classes.content}>
          {/*<CategoriesBlock />*/}
          {/*<BestSellersBlock />*/}
          {/*<NewProductsBlock />*/}
          {/*<Collection info={collectionInfo} />*/}
          {/*<Subscribe />*/}
        </div>
        {/*<div className={classes.advantagesContainer}>*/}
        {/*  <Advantages />*/}
        {/*</div>*/}
        {/*<div className={classes.content}>*/}
        {/*  <NewsList*/}
        {/*    title={"Новости"}*/}
        {/*    info={*/}
        {/*      localStorage.getItem("news") &&*/}
        {/*      JSON.parse(localStorage.getItem("news") || "")*/}
        {/*    }*/}
        {/*  />*/}
        {/*</div>*/}
      </div>
    </>
  );
};

export default MainPage;
