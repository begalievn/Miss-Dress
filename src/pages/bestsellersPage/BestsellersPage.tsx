import React, { useEffect, useState } from "react";

import Paginations from "../../components/pagination/Paginations";

import ProductCard from "../../components/productCard/ProductCard";

import CardsContainer from "../../containers/cardsContainer/CardsContainer";
import { productBestsellersApi } from "../../store/services/productBestsellersApi";
import { bestSellers } from "../../utils/consts/main-page/mainPageConsts";

import classes from "./bestsellersPage.module.scss";

function BestsellersPage() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  }, []);

  const [counte, setCounte] = useState(1);

  const limit = 6;

  const Data = {
    limit: limit,
    counte: counte,
  };

  const { data = [] } = productBestsellersApi.useGetBestsellersProductsQuery(Data);

  const cards = data.result?.data || [];

  const allPages = Math.ceil(data?.result?.count / 6);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
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
        </div>
        <Paginations
          onChange={(event: any, page: number) => setCounte(page)}
          count={allPages}
        />
      </div>     
    </>  
  );
}

export default BestsellersPage;