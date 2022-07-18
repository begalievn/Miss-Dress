import React, { FC } from "react";

import classes from "./bestSellersBlock.module.scss";

import { bestSellers } from "../../../../utils/consts/main-page/mainPageConsts";
import PhotoCardContent from "../../../../components/main-page/photo-card-content/PhotoCardContent";
import CardsContainer from "../../../../containers/cardsContainer/CardsContainer";
import BottomButton from "../bottom-button/BottomButton";

const cards = [{}, {}, {}, {}, {}, {}];

const BestSellersBlock: FC = () => {
  return (
    <div className={classes.container}>
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
      <BottomButton text={"Смотреть все хиты"} />
    </div>
  );
};

export default BestSellersBlock;
