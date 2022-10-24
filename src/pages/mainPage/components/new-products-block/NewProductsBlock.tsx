import React from "react";

import { Link } from "react-router-dom";

import CardsContainer from "../../../../containers/cardsContainer/CardsContainer";

import BottomButton from "../bottom-button/BottomButton";

import ProductCard from "../../../../components/productCard/ProductCard";

import { productsApi } from "../../../../store/secondary/productsApi";

import classes from "./newProductsBlock.module.scss";


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
      <Link to={"/new-products"}>
        <BottomButton text={"Смотреть все новинки"} />
      </Link>
    </div>
  );
};

export default NewProductsBlock;
