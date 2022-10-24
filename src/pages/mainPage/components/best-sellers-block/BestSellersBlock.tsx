import React, { FC } from "react";

import { Link, useNavigate } from "react-router-dom";

import { bestSellers } from "../../../../utils/consts/main-page/mainPageConsts";

// import PhotoCardContent from "../../../../components/main-page/photo-card-content/PhotoCardContent";
import CardsContainer from "../../../../containers/cardsContainer/CardsContainer";

import BottomButton from "../bottom-button/BottomButton";

// import {
//   bestSellers1,
//   bestSellers2,
//   bestSellers3,
//   bestSellers4,
//   bestSellers5,
//   bestSellers6,
// } from "../../../../assets/main-page/images";

import ProductCard from "../../../../components/productCard/ProductCard";
// import ProductsGridContainer from "../../../../containers/productsGridContainer/ProductsGridContainer";

import { productsApi } from "../../../../store/secondary/productsApi";
import { adminGetCartApi } from "../../../../store/services/adminGetCartApi";

import classes from "./bestSellersBlock.module.scss";




const BestSellersBlock: FC = () => {
  const { data = [] } = productsApi.useGetAllProductsQuery("");
  const { data: books, isLoading, isError } = adminGetCartApi.useGetAllBooksQuery(1);


  const cards = data.result?.data || [];
  // console.log(cards);

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
      <Link to={"/bestsellers"}>
        <BottomButton text={"Смотреть все хиты"} />
      </Link>
    </div>
  );
};

export default BestSellersBlock;
