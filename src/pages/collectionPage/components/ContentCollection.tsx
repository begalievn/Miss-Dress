import React from "react";
import CategoriesDropdowBtn from "../../../components/categoriesDropdowButton/CategoriesDropdowBtn";
import Paginations from "../../../components/pagination/Paginations";
import CategoriesBlock from "../../mainPage/components/categories-block/CategoriesBlock";

import classes from "../Collection.module.scss";

const ContentCollection = () => {
  return (
    <div className={classes.container}>
      <div className={classes.item_container}>
        <div>
          <h2>Коллекция</h2>
        </div>
        <div>
          <CategoriesDropdowBtn />
        </div>
      </div>
      <CategoriesBlock />
      <Paginations />
    </div>
  );
};

export default ContentCollection;
