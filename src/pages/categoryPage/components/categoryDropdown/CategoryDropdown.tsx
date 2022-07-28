import React, { useState } from "react";

import CategoriesAside from "../categoriesAside/CategoriesAside";

import classes from "./categoryDropdown.module.scss";
import { CategoryTypes } from "../../../../utils/types/types";

interface ICategoryDropdown {
  categories: CategoryTypes[];
}

const CategoryDropdown = ({ categories }: ICategoryDropdown) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={classes.container}>
      <div onClick={handleClick} className={classes.category}>
        <span>Категория</span>
        <span
          className={classes.arrow}
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        ></span>
      </div>
      {isOpen && (
        <div className={classes.dropdown}>
          <CategoriesAside categories={categories} />
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
