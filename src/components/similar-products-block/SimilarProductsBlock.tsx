import React, { useMemo, useState } from "react";

import SimilarProductsSlider from "../similar-products-slider/SimilarProductsSlider";

import ProductCard from "../productCard/ProductCard";

import CardsContainer from "../../containers/cardsContainer/CardsContainer";

import BrownButton from "../brown-button/BrownButton";

import { productsApi } from "../../store/services/productsApi";

import classes from "./similarProductsBlock.module.scss";

// const cards = [
//   {
//     image: bestSellers1,
//     id: 1,
//   },
//   {
//     image: bestSellers2,
//     id: 2,
//   },
//   {
//     image: bestSellers3,
//     id: 3,
//   },
//   {
//     image: bestSellers4,
//     id: 4,
//   },
//   {
//     image: bestSellers5,
//     id: 5,
//   },
//   {
//     image: bestSellers6,
//     id: 6,
//   },
// ];

const SimilarProductsBlock = () => {
  const { data = [] } = productsApi.useGetAllProductsQuery("");
  const [cards, setCards] = useState([]);
  const dataCards = useMemo(() => {
    setCards(data.result?.data || []);
  }, [data]);
  console.log(cards);
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h3>Похожие товары</h3>
      </div>
      <div className={classes.content}>
        <div className={classes.slider}>
          <SimilarProductsSlider>
            {cards.map((item: any, index: any) => (
              <ProductCard
                status={item.status}
                rate={item.rate}
                title={item.title}
                price={item.price}
                image={item.images}
                id={item.id}
              />
            ))}
          </SimilarProductsSlider>
        </div>
        <div className={classes.cards}>
          <CardsContainer>
            {cards.slice(0, 2).map((item: any, index: any) => (
              <ProductCard
                status={item.status}
                rate={item.rate}
                title={item.title}
                price={item.price}
                image={item.image}
                id={item.id}
              />
            ))}
          </CardsContainer>
          <div className={classes.button_container}>
            <BrownButton text={"Смотреть все товары"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProductsBlock;
