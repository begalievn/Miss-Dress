import React, { FC } from "react";

import PhotoCardCategory from "../../../../components/photo-card-category/PhotoCardCategory";

import CardsContainer from "../../../../containers/cardsContainer/CardsContainer";

import { adminGetCartApi } from "../../../../store/services/adminGetCartApi";

import {
  dresses,
  skirts,
  trousers,
  jeans,
} from "../../../../assets/main-page/images";

import LoaderCircular from "../../../../components/loader-circular/LoaderCircular";

import classes from "./categoriesBlock.module.scss";

interface ICategoriesBlock extends Array<ICardData> {
  id?: number;
}

interface ICardData {
  image: string;
  category: string;
  id: number;
}


export const cards: ICategoriesBlock = [
  {
    image: jeans,
    category: "Джинсы",
    id: 1,
  },
  {
    image: skirts,
    category: "Юбки",
    id: 2,
  },
  {
    image: dresses,
    category: "Платья",
    id: 3,
  },
  {
    image: trousers,
    category: "Брюки",
    id: 4,
  },
  // {
  //   image: jeans,
  //   category: "Джинсы",
  //   id: 5,
  // },
  // {
  //   image: skirts,
  //   category: "Юбки",
  //   id: 6,
  // },
  // {
  //   image: dresses,
  //   category: "Платья",
  //   id: 7,
  // },
  // {
  //   image: trousers,
  //   category: "Брюки",
  //   id: 8,
  // },
];

const CategoriesBlock: FC = () => {

  const { data, isLoading, isError } = adminGetCartApi.useGetAllBooksQuery(1);
  console.log("data form Categories", data);

  return (
    <div className={classes.container}>
      <CardsContainer>
        {
          isLoading ? <LoaderCircular /> :(
            data?.data?.results.map((item: any, index: number) => (
              <div key={index} className={classes.card}>
                <PhotoCardCategory {...item} />
              </div>
            ))
          )
        }
      </CardsContainer>
    </div>
  );
};

export default CategoriesBlock;
