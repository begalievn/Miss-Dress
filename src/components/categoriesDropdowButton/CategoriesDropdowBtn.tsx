import React from "react";
import classes from "./categoriesDropdowButton.module.scss";

export const CategoriesDropdowBtn = () => {
  return (
    <>
      <select className={classes.select_container} name="" id="">
        <option value="">Сортировать по</option>
        <option value="">По обновлению</option>
        <option value="">По цене</option>
        <option value="">По алфавиту</option>
        <option value="">По умолчанию</option>
      </select>
    </>
  );
};

export default CategoriesDropdowBtn;
