import React, { FC } from "react";

import PhotoCardCategory from "../../../../components/main-page/photo-card-category/PhotoCardCategory";

import CardsContainer from "../../../../containers/cardsContainer/CardsContainer";

import {
  dresses,
  skirts,
  trousers,
  jeans,
} from "../../../../assets/main-page/images";

import classes from "./categoriesBlock.module.scss";

interface ICategoriesBlock extends Array<ICardData> {}

interface ICardData {
  image: string;
  category: string;
  id: number;
}

const cards: ICategoriesBlock = [
  {
    image: jeans,
    category: "Джинсы",
    id: 1,
  },
  {
    image: skirts,
    category: "Юбки",
    id: 2,
  },
  {
    image: dresses,
    category: "Платья",
    id: 3,
  },
  {
    image: trousers,
    category: "Брюки",
    id: 4,
  },
];

const CategoriesBlock: FC = () => {
  return (
    <div className={classes.container}>
      <CardsContainer>
        {cards.map((item, index) => (
          <div key={index} className={classes.card}>
            <PhotoCardCategory {...item} />
          </div>
        ))}
      </CardsContainer>
    </div>
  );
};

export default CategoriesBlock;
