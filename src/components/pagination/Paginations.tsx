import { Pagination } from "@mui/material";
import { cards } from "../../pages/mainPage/components/categories-block/CategoriesBlock";

import classes from "./Pagination.module.scss";
const Paginations = () => {
  // Массив для работы
  const countries = cards;

  return (
    <div className={classes.block_pagination}>
      <Pagination count={countries.length} variant="outlined" color="primary" />
    </div>
  );
};

export default Paginations;
