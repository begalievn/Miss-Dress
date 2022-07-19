import React, { FC } from "react";

import { bestSellers } from "../../../../utils/consts/main-page/mainPageConsts";

import PhotoCardContent from "../../../../components/main-page/photo-card-content/PhotoCardContent";
import CardsContainer from "../../../../containers/cardsContainer/CardsContainer";
import BottomButton from "../bottom-button/BottomButton";

import {
  bestSellers1,
  bestSellers2,
  bestSellers3,
  bestSellers4,
  bestSellers5,
  bestSellers6,
} from "../../../../assets/main-page/images";

import classes from "./bestSellersBlock.module.scss";

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

const BestSellersBlock: FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h2>{bestSellers}</h2>
      </div>
      <div>
        <CardsContainer>
          {cards.map((item, index) => (
            <div key={index} className={classes.card}>
              <PhotoCardContent image={item.image} id={item.id} />
            </div>
          ))}
        </CardsContainer>
      </div>
      <BottomButton text={"Смотреть все хиты"} />
    </div>
  );
};

export default BestSellersBlock;
