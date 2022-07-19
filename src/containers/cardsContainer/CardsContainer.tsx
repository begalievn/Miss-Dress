import React, { FC } from "react";

import classes from "./cardsContainer.module.scss";

interface CardsContainerProps {
  children: React.ReactNode;
}

const CardsContainer: FC<CardsContainerProps> = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default CardsContainer;
