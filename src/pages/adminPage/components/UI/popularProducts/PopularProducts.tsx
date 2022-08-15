import React from "react";

import classes from "./popularProducts.module.scss";

const popularProducts = [
  {
    name: "Benito Kate Wrap Dress",
    amount: 254,
    income: "1.2m+",
  },
  {
    name: "JUSTONE Shy Embo Can Skirt",
    amount: 210,
    income: "1m+",
  },
  {
    name: "Envy Look Button Eco Dress",
    amount: 159,
    income: "790k+",
  },
];

function PopularProducts() {
  return (
    <div className={classes.container}>
      <h3>Популярные товары</h3>
      {popularProducts.map((item, index) => (
        <div key={index} className={classes.products}>
          <h4>{item.name}</h4>
          <h5>{item.amount} продаж</h5>
          <h5>{item.income} доход</h5>
        </div>
      ))}
    </div>
  );
}

export default PopularProducts;
