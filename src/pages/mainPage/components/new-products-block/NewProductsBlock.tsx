import React from "react";

import PhotoCardContent from "../../../../components/main-page/photo-card-content/PhotoCardContent";
import CardsContainer from "../../../../containers/cardsContainer/CardsContainer";

import classes from "./newProductsBlock.module.scss";
import BottomButton from "../bottom-button/BottomButton";

const cards = [{}, {}, {}, {}, {}, {}];

const NewProductsBlock = () => {
  return (
    <div>
      <div className={classes.title}>
        <h2>Новинки</h2>
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
      <BottomButton text={"Смотреть все новинки"} />
    </div>
  );
};

export default NewProductsBlock;
