import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

import CategoriesDropdowBtn from "../../components/categoriesDropdowButton/CategoriesDropdowBtn";

import Paginations from "../../components/pagination/Paginations";

import ContentFavorite from "./components/ContentFavorite";

import classes from "./favorite.module.scss";
import { productFavoritesApi } from "../../store/services/productFavoritesApi";
import { useState } from "react";

const FavoritePage = () => {
  const [counte, setCounte] = useState(1);
  const limit = 10;

  const Data = {
    limit: limit,
    counte: counte,
    // name: "privet",
  };

  const { data = {} } = productFavoritesApi.useGetFavoritesQuery(Data);

  const allPages = Math.ceil(data?.result?.count / 7);

  const cards = data?.result?.data;

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
        {cards &&
          cards.map((item: any) => (
            <div>
              <ContentFavorite
                key={item.id}
                name={item.title}
                price={item.price}
                colors={item.id}
                size={item.id}
                id={item.id}
                rate={item.rate}
              />
            </div>
          ))}
      </div>
      <Paginations
        onChange={(event: any, page: number) => setCounte(page)}
        count={allPages}
      />
    </>
  );
};

export default FavoritePage;
