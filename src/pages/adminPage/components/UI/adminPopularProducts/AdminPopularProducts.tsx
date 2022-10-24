import React from "react";
import { useNavigate } from "react-router-dom";

import { adminPopularProductPriceApi } from "../../../../../store/secondary/adminPopularProductPriceApi";
import ViewMoreButton from "../viewMoreButton/ViewMoreButton";

import classes from "./adminPopularProducts.module.scss";



function AdminPopularProducts() {

  const navigate = useNavigate();

  const {data:prod = []} = adminPopularProductPriceApi.useFetchGetPopularProductPriceQuery("");
  console.log(prod?.result);

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Популярные товары</h2>
      {prod?.result?.filter((_elem:any, index:number)=>index<3).map((item:any) => (
        <div className={classes.products}>
          <h5 className={classes.productTitle}>{item.product_title}</h5>
          <p>{item.amount} продаж</p>
          <p>{item.totalCount} доход</p>
        </div>
      ))}
      <div className={classes.viewMoreBtn} onClick={()=> navigate("/popular-products")}>
        <ViewMoreButton />
      </div>
    </div>
  );
}

export default AdminPopularProducts;
