import React from "react";
import { useParams } from "react-router-dom";

import { searchApi } from "../../store/secondary/SearchApi";


import CategoriesDropdowBtn from "../../components/categoriesDropdowButton/CategoriesDropdowBtn";

import Paginations from "../../components/pagination/Paginations";

import BestSellersBlock from "../mainPage/components/best-sellers-block/BestSellersBlock";

import classes from "./search.module.scss";

import ContentSearch from "./components/ContentSearch";

const SearchPage = () => {
  const { name } = useParams();

  const { data = [], isLoading, isError } = searchApi.useFetchSearchQuery(name);

  const cards = data.result?.data || [];

  return (
    <>
      <div className={classes.content_main}>
        <div className={classes.content_parent}>
          <div className={classes.result}>
            <h2 className={classes.title}>Результаты поиска</h2>
            <CategoriesDropdowBtn />
          </div>
          <p className={classes.subtitle}>Найдено {cards.length} моделей</p>
        </div>
        {isLoading && <h1>Идет загрузка...</h1>}
        {isError && <h1>Произошла ошибка при загрузке...</h1>}
        {cards && cards.length > 0 ? (
          cards.map((card: any) => (
            <div>
              <ContentSearch
                key={card.id}
                id={card.id}
                title={card.title}
                price={card.price}
                discount={card.discount}
                rate={card.rate}
                image={card.images}
                status={card.status}
              />
            </div>
          ))
        ) : (
          <div className={classes.content_main_block}>
            <BestSellersBlock />
          </div>
        )}
      </div>
      <Paginations />
    </>
  );
};

export default SearchPage;
