import React, { FC, useEffect, useMemo, useState } from "react";

import classes from "../collectionPagesAll/CollectionPagesAll.module.scss";

import { Link, useParams } from "react-router-dom";

import CategoriesDropdowBtn from "../../components/categoriesDropdowButton/CategoriesDropdowBtn";

import { skirts } from "../../assets/main-page/images";

import { CategoryTypes } from "../../utils/types/types";

import Paginations from "../../components/pagination/Paginations";

import LoaderCircular from "../../components/loader-circular/LoaderCircular";

import LoaderError from "../../components/loader-Error/LoaderError";
import { categoriesApi } from "../../store/services/categoriesApi";

const CollectionPagesContent: FC = () => {
  const { collection } = useParams();

  let [load, setLoad] = useState<boolean>(false);
  const [categoryArray, setCategoryArray] = useState<CategoryTypes[]>([]);

  const {
    data: categories,
    isLoading,
    isError,
  } = categoriesApi.useFetchCateggoriesQuery<CategoryTypes[] | any>(collection);

  console.log(categories);

  const category = useMemo(() => {
    return categories || [];
  }, [categories]);

  useEffect(() => {
    setCategoryArray(category.slice(0, 6));
  }, [category]);

  let pages: number;
  const pageCount: number = Math.ceil(category.length / 6);

  function handleClick(): void {
    let pageNum: React.ChangeEvent<unknown> | number = pages || 1;
    let start: number = (+pageNum - 1) * 6;
    let end: number = start + 6;
    setCategoryArray(category.slice(start, end));
  }

  function setPage(event: React.ChangeEvent<unknown>, page: number): void {
    pages = page;
    handleClick();
  }

  return (
    <div>
      <div className={classes.container}>
        {!isError ? (
          <div className={classes.item_container}>
            <>
              <div>
                <h2>Коллекция</h2>
              </div>
            </>
          </div>
        ) : null}
        <div className={classes.title_container}>
          {isLoading && <LoaderCircular />}
          {isError && <LoaderError />}
          {categoryArray.map((item) => (
            <ul className={classes.item_map_container} key={item.category_id}>
              <li className={classes.item_map}>
                <img className={classes.image} src={skirts} alt="" />
                <Link to={`/collection/${collection}/${item.category_id}`}>
                  <button className={classes.btn}>Смотреть</button>
                </Link>
                <span>{item.category_title}</span>
              </li>
            </ul>
          ))}
        </div>
        {!isError ? (
          <Paginations
            count={pageCount}
            onChange={(event: React.ChangeEvent<unknown>, page: number) =>
              setPage(event, page)
            }
          />
        ) : null}
      </div>
    </div>
  );
};

export default CollectionPagesContent;
