import React, { useEffect, useMemo, useState } from "react";

import CategoriesDropdowBtn from "../../../components/categoriesDropdowButton/CategoriesDropdowBtn";
import classes from "../Collection.module.scss";
import { categoryApi } from "../../../store/services/categoryApi";

import { skirts } from "../../../assets/main-page/images";

import { CategoryTypes } from "../../../utils/types/types";
import Paginations from "../../../components/pagination/Paginations";
import LoaderCircular from "../../../components/loader-circular/LoaderCircular";
import LoaderError from "../../../components/loader-Error/LoaderError";

const ContentCollection = () => {
  let [load, setLoad] = useState<boolean>(false);
  const [categoryArray, setCategoryArray] = useState<CategoryTypes[]>([]);

  const {
    data: categories,
    isLoading,
    isError,
  } = categoryApi.useFetchAllCateggoriesQuery("");

  function getNestedCategories(categories: CategoryTypes[]) {
    setLoad(true);
    const result: CategoryTypes[] = [];
    function dig(categories: CategoryTypes[]) {
      categories.forEach((item) => {
        if (item.children.length > 0) {
          dig(item.children);
          if (item.children) {
          }
        } else {
          result.push(item);
        }
      });
    }
    dig(categories);
    setLoad(false);
    return result;
  }

  let pages: number;

  const category = useMemo(() => {
    return getNestedCategories(categories?.result || []);
  }, [categories]);

  const pageCount = Math.ceil(category.length / 6);

  useEffect(() => {
    setCategoryArray(category.slice(0, 6));
  }, [category]);

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
              <div>
                <CategoriesDropdowBtn />
              </div>
            </>
          </div>
        ) : null}
        <div className={classes.title_container}>
          {isLoading && <LoaderCircular />}
          {isError && <LoaderError />}
          {categoryArray.map((item) => (
            <ul className={classes.item_map_container} key={item.id}>
              <li className={classes.item_map}>
                <img className={classes.image} src={skirts} alt="" />
                <button className={classes.btn}>Смотреть</button>
                <span>{item.title}</span>
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

export default ContentCollection;
