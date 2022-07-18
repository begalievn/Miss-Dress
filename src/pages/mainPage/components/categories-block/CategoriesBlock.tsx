import React from "react";

import PhotoCardCategory from "../../../../components/main-page/photo-card-category/PhotoCardCategory";

import CardsContainer from "../../../../containers/cardsContainer/CardsContainer";

import classes from "./categoriesBlock.module.scss";

const cards = [{}, {}, {}, {}];

const CategoriesBlock = () => {
  return (
    <div className={classes.container}>
      <CardsContainer>
        {cards.map((item, index) => (
          <div className={classes.card}>
            <PhotoCardCategory />
          </div>
        ))}
      </CardsContainer>
    </div>
  );
};

export default CategoriesBlock;
