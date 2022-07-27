import React from "react";

import classes from "./similarProductsBlock.module.scss";
import SimilarProductsSlider from "../similar-products-slider/SimilarProductsSlider";
import {
  bestSellers1,
  bestSellers2,
  bestSellers3,
  bestSellers4,
  bestSellers5,
  bestSellers6,
} from "../../assets/main-page/images";
import ProductCard from "../productCard/ProductCard";
import CardsContainer from "../../containers/cardsContainer/CardsContainer";
import BrownButton from "../brown-button/BrownButton";

const cards = [
  {
    image: bestSellers1,
    id: 1,
  },
  {
    image: bestSellers2,
    id: 2,
  },
  {
    image: bestSellers3,
    id: 3,
  },
  {
    image: bestSellers4,
    id: 4,
  },
  {
    image: bestSellers5,
    id: 5,
  },
  {
    image: bestSellers6,
    id: 6,
  },
];

const SimilarProductsBlock = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h3>Похожие товары</h3>
      </div>
      <div className={classes.content}>
        <div className={classes.slider}>
          <SimilarProductsSlider>
            {cards.map((item, index) => (
              <ProductCard image={item.image} id={item.id} />
            ))}
          </SimilarProductsSlider>
        </div>
        <div className={classes.cards}>
          <CardsContainer>
            {cards.slice(0, 2).map((item, index) => (
              <ProductCard image={item.image} id={item.id} />
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
