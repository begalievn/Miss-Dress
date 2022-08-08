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

import ProductCard from "../../../../components/productCard/ProductCard";
import ProductsGridContainer from "../../../../containers/productsGridContainer/ProductsGridContainer";

import classes from "./bestSellersBlock.module.scss";
import { productsApi } from "../../../../store/services/productsApi";

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

const BestSellersBlock: FC = () => {
  const { data = [] } = productsApi.useGetAllProductsQuery("");

  const cards = data.result?.data || [];
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h2>{bestSellers}</h2>
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
      <BottomButton text={"Смотреть все хиты"} />
    </div>
  );
};

export default BestSellersBlock;
