import React from "react";

import CardsContainer from "../../../../containers/cardsContainer/CardsContainer";

import BottomButton from "../bottom-button/BottomButton";

import classes from "./newProductsBlock.module.scss";

import ProductCard from "../../../../components/productCard/ProductCard";

import { productsApi } from "../../../../store/services/productsApi";

const NewProductsBlock = () => {
  const { data = [] } = productsApi.useGetAllProductsQuery("");

  const cards = data.result?.data || [];

  return (
    <div>
      <div className={classes.title}>
        <h2>Новинки</h2>
      </div>
      <div>
        <CardsContainer>
          {cards.map((item: any, index: any) => (
            <div key={index} className={classes.card}>
              <ProductCard
                status={item.status}
                rate={item.rate}
                title={item.title}
                price={item.price}
                image={item.images}
                id={item.id}
              />
            </div>
          ))}
        </CardsContainer>
      </div>
      <BottomButton text={"Смотреть все новинки"} />
    </div>
  );
};

export default NewProductsBlock;
