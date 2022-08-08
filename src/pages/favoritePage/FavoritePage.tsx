import React, { FC } from "react";

import classes from "./favorite.module.scss";

import ContentFavorite from "./components/ContentFavorite";

import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

import CategoriesDropdowBtn from "../../components/categoriesDropdowButton/CategoriesDropdowBtn";

import Paginations from "../../components/pagination/Paginations";

const FavoritePage = () => {
  const info = [
    {
      name: "Choper Shoulder Frill Vent Dress",
      price: 7900,
      colors: 4,
      size: 29,
      id: 1,
    },
    {
      name: "Envy Look Button Eco Dress",
      price: 7900,
      colors: 4,
      size: 29,
      id: 2,
    },
    {
      name: "Envy Look All Season Skirt",
      price: 7900,
      colors: 4,
      size: 29,
      id: 2,
    },
  ];

  return (
    <>
      <div className={classes.content_main}>
        <div className={classes.content_parent}>
          <Breadcrumbs />
          <div className={classes.result}>
            <h2 className={classes.title}>Избранное</h2>
            <CategoriesDropdowBtn />
          </div>
        </div>
        {info.map((item) => (
          <div>
            <ContentFavorite
              key={item.id}
              name={item.name}
              price={item.price}
              colors={item.colors}
              size={item.size}
              id={item.id}
            />
          </div>
        ))}
      </div>
      <Paginations />
    </>
  );
};

export default FavoritePage;
