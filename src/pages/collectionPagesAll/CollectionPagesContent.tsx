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

interface ProductCart {
  title: string;
  price: number;
  color: number;
  size: string;
  rate: number;
  images: string;
  category: string;
}

const CollectionPagesContent: FC = () => {
  const [result, setResult] = useState<ProductCart[]>([]);

  const { categories } = useParams();

  console.log(categories);

  const [product, setProduct] = useState<ProductCart[]>([
    {
      title: "Envy Look All Season Skirt",
      price: 5990,
      color: 4,
      size: "Размер 29",
      rate: 5.1,
      images: photoCardImage,
      category: "Jeans",
    },
    {
      title: "Envy Look All Season Skirt",
      price: 7990,
      color: 1,
      size: "Размер 9",
      rate: 2.1,
      images: trousers,
      category: "Jeans",
    },
    {
      title: "Envy Look All Season Skirt",
      price: 3990,
      color: 1,
      size: "Размер 9",
      rate: 2.1,
      images: dresses,
      category: "Dresses",
    },
    {
      title: "Envy Look All Season Skirt",
      price: 4990,
      color: 2,
      size: "Размер 20",
      rate: 5.1,
      images: skirts,
      category: "Skirts",
    },
    {
      title: "Envy Look All Season Skirt",
      price: 5990,
      color: 6,
      size: "Размер 24",
      rate: 3.5,
      images: photoCardImage,
      category: "Jeans",
    },
    {
      title: "Envy Look All Season Skirt",
      price: 2990,
      color: 2,
      size: "Размер 14",
      rate: 2.1,
      images: dresses,
      category: "Dresses",
    },
    {
      title: "Envy Look All Season Skirt",
      price: 3990,
      color: 4,
      size: "Размер 19",
      rate: 1.1,
      images: bestSellers2,
      category: "Dresses",
    },
    {
      title: "Envy Look All Season Skirt",
      price: 6990,
      color: 7,
      size: "Размер 24",
      rate: 7.1,
      images: bestSellers1,
      category: "Dresses",
    },
    {
      title: "Envy Look All Season Skirt",
      price: 2990,
      color: 2,
      size: "Размер 21",
      rate: 5.1,
      images: bestSellers3,
      category: "Dresses",
    },
    {
      title: "Envy Look All Season Skirt",
      price: 7990,
      color: 5,
      size: "Размер 27",
      rate: 2.1,
      images: bestSellers4,
      category: "Dresses",
    },
    {
      title: "Envy Look All Season Skirt",
      price: 4990,
      color: 6,
      size: "Размер 20",
      rate: 8.1,
      images: bestSellers5,
      category: "Dresses",
    },
    {
      title: "Envy Look All Season Skirt",
      price: 1990,
      color: 1,
      size: "Размер 30",
      rate: 1.1,
      images: bestSellers6,
      category: "Dresses",
    },
  ]);

  const filterProducts = product.filter((item) => item.category === categories);
  console.log(filterProducts);

  return (
    <div>
      <div className={classes.dropDow_container}>
        <CategoriesDropdowBtn />
      </div>
      <h2>{categories}</h2>
      <div>
        {result.map((item: ProductCart) => (
          <div>
            <div>{item.images}</div>
            <div>{item.title}</div>
            <div>{item.price}</div>
            <div>{item.color}</div>
            <div>{item.size}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPagesContent;
function result(result: any) {
  throw new Error("Function not implemented.");
}
