import React, { useMemo, useState } from "react";

import { DataArray } from "@mui/icons-material";

import SimilarProductsSlider from "../similar-products-slider/SimilarProductsSlider";

import ProductCard from "../productCard/ProductCard";

import CardsContainer from "../../containers/cardsContainer/CardsContainer";

import BrownButton from "../brown-button/BrownButton";

import { productsApi } from "../../store/secondary/productsApi";

import classes from "./similarProductsBlock.module.scss";

const SimilarProductsBlock = () => {
  const { data = [] } = productsApi.useGetAllProductsQuery("");
  const [cards, setCards] = useState([]);
  // console.log(data.result);
  console.log(data);


  // const dataCards: any = useMemo(() => {
  //   setCards(data?.result?.data || []);
  //   return dataCards;
  // }, [data]);

  // console.log(dataCards);

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h3>Похожие товары</h3>
      </div>
      <div className={classes.content}>
        <div className={classes.slider}>
          <SimilarProductsSlider>
            {data?.result?.data?.map((item: any, index: any) => {
              return (
                <ProductCard
                  status={item.status}
                  rate={item.rate}
                  title={item.title}
                  price={item.price}
                  image={item.images}
                  id={item.id}
                />
              );
            }

            )}
          </SimilarProductsSlider>
        </div>
        <div className={classes.cards}>
          <CardsContainer>
            {cards.slice(0, 2).map((item: any, index: any) => (
              <ProductCard
                status={item.status}
                rate={item.rate}
                title={item.title}
                price={item.price}
                image={item.image}
                id={item.id}
              />
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
