import React from "react";

import { adminPopularProductPriceApi } from "../../../../../store/services/adminPopularProductPrice";

import classes from "./popularProducts.module.scss";



function PopularProducts() {

  const {data:prod = []} = adminPopularProductPriceApi.useFetchGetPopularProductPriceQuery("");
  console.log(prod?.result);



  return (
    <div className={classes.container}>
      <h3>Популярные товары</h3>
      {prod?.result?.map((item:any) => (
        <div className={classes.products}>
          <h4>{item.product_title}</h4>
          <h5>{item.amount} продаж</h5>
          <h5>{item.totalCount} доход</h5>
        </div>
      ))}
    </div>
  );
}

export default PopularProducts;
