import React from "react";

import ProductCard from "../../components/productCard/ProductCard";
import CardsContainer from "../../containers/cardsContainer/CardsContainer";
import { productsApi } from "../../store/services/productsApi";
import { newProducts } from "../../utils/consts/main-page/mainPageConsts";

import classes from "./newProductsPage.module.scss";

function NewProductsPage() {
    
  const { data = [] } = productsApi.useGetAllProductsQuery("");
  const cards = data.result?.data || [];

  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.title}>
            <h2>{newProducts}</h2>
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
      </div>
    </>
  );
}

export default NewProductsPage;