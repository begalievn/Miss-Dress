import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./CollectionPagesAll.module.scss";
import CategoriesDropdowBtn from "../../components/categoriesDropdowButton/CategoriesDropdowBtn";

import {
  colorsPalletIcon,
  blackStarIcon,
  whiteStarIcon,
  favoriteIcon,
} from "../../assets/icons/icons";

import {
  photoCardImage,
  trousers,
  skirts,
  dresses,
  bestSellers1,
  bestSellers2,
  bestSellers3,
  bestSellers4,
  bestSellers5,
  bestSellers6,
} from "../../assets/main-page/images";
import {
  // IChild,
  useFetchAllCategoryQuery,
} from "../../store/services/CategoryApi";

const CollectionPagesContent: FC = () => {
  const { id } = useParams();

  const {
    data: product,
    isLoading,
    isError,
    refetch,
  } = useFetchAllCategoryQuery("");

  return (
    <div>
      <div className={classes.dropDow_container}>
        <CategoriesDropdowBtn />
      </div>
      <h2>{id}</h2>
      <div>
        {/* {product.map((item: IChild) => (
          <div>
            <div>{item.images}</div>
            <div>{item.title}</div>
            <div>{item.price}</div>
            <div>{item.color}</div>
            <div>{item.size}</div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default CollectionPagesContent;
function result(result: any) {
  throw new Error("Function not implemented.");
}
