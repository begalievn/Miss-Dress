import { Pagination } from "@mui/material";
import React, { useState } from "react";
import { cards } from "../../pages/mainPage/components/categories-block/CategoriesBlock";

import classes from "./Pagination.module.scss";
const Paginations = () => {
  // Массив для работы
  const countries = cards;
  // Текущая страница
  const [currentPage, setCurrentPage] = useState(1);

  // Кол-Во Страниц всего
  const [countriesPerPage, setPageQty] = useState(10);

  const lastCountryIndex = currentPage * countriesPerPage;

  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex);
  return (
    <div className={classes.block_pagination}>
      <Pagination count={countries.length} variant="outlined" color="primary" />
    </div>
  );
};

export default Paginations;
