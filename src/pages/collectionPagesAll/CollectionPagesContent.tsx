import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./CollectionPagesAll.module.scss";

import {
  colorsPalletIcon,
  blackStarIcon,
  whiteStarIcon,
  favoriteIcon,
} from "../../assets/icons/icons";
import CategoriesDropdowBtn from "../../components/categoriesDropdowButton/CategoriesDropdowBtn";
import BestSellersBlock from "../mainPage/components/best-sellers-block/BestSellersBlock";

interface Data {
  img: string;
  categories?: string;
}

const CollectionPagesContent: FC<Data> = () => {
  //   const { category } = useParams();

  //   console.log(category);

  //   const [data, setData] = useState<Data[]>([
  //     {
  //       img: blackStarIcon,
  //       categories: "Джинсы",
  //     },
  //     {
  //       img: whiteStarIcon,
  //       categories: "Джинсы",
  //     },
  //     {
  //       img: favoriteIcon,
  //       categories: "Платья",
  //     },
  //     {
  //       img: colorsPalletIcon,
  //       categories: "Платья",
  //     },
  //   ]);

  //   const result = data.filter((item) => item.categories === category);

  //   console.log(result);

  return (
    <div>
      {/* {result.map((item) => (
        <span>{item.categories}</span>
      ))} */}
      <div className={classes.dropDow_container}>
        <CategoriesDropdowBtn />
      </div>
      <BestSellersBlock />
    </div>
  );
};

export default CollectionPagesContent;
