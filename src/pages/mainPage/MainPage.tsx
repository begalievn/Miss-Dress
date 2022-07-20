import React from "react";

import { winter } from "../../assets/main-page/images";

import PhotoCardContainer from "../../components/main-page/photo-card-container/PhotoCardContainer";

import Collection from "./components/collection/Collection";
import Subscribe from "./components/subscribe/Subscribe";
import Advantages from "./components/advantages/Advantages";
import NewsList from "./components/newsList/NewsList";

import classes from "./mainPage.module.scss";

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
    <div className={classes.container}>
      <div className={classes.content}>
        <PhotoCardContainer />
        <Collection info={collectionInfo} />
        <Subscribe />
        <Advantages />
        <NewsList />
      </div>
    </div>
  );
};

export default MainPage;
