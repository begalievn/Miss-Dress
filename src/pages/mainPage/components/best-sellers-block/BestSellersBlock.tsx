import React from "react";

import classes from "./bestSellersBlock.module.scss";

import { bestSellers } from "../../../../utils/consts/main-page/mainPageConsts";
import PhotoCardContent from "../../../../components/main-page/photo-card-content/PhotoCardContent";
import CardsContainer from "../../../../containers/cardsContainer/CardsContainer";

const cards = [{}, {}, {}, {}, {}, {}];

const BestSellersBlock = () => {
  return (
    <div>
      <div className={classes.title}>
        <h2>{bestSellers}</h2>
      </div>
      <div>
        <CardsContainer>
          {cards.map((item, index) => (
            <div className={classes.card}>
              <PhotoCardContent />
            </div>
          ))}
        </CardsContainer>
      </div>
    </div>
  );
};

export default BestSellersBlock;
