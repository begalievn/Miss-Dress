import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import { collectionCategoryApi } from "../../../store/services/collectionCategoryApi";

import LoaderCircular from "../../../components/loader-circular/LoaderCircular";
import ErrorPage from "../../errorPage/ErrorPage";

import {
  blackStarIcon,
  favoriteIcon,
  filledLike,
} from "../../../assets/icons/icons";

import { Datum, IParams } from "../../../utils/types/collectionsCategory";

import FilterSelect from "../../categoryPage/components/filterSelect/FilterSelect";

import { getDataFromSort } from "../../../utils/helpers/getDataFromSort";
import Paginations from "../../../components/pagination/Paginations";

import classes from "./CollectionCategory.module.scss";
import { jeans } from "../../../assets/main-page/images";
import { RatingComponent } from "../../../components/RatingComponent/RatingComponent";
import { productFavoritesApi } from "../../../store/services/productFavoritesApi";

const CollectionCategory = () => {
  const [name, setName] = useState<string>("");
  const { collection, id } = useParams();
  const Data: IParams = { collection, id, name };

  //! Запрос initialState
  const [datas, setDatas] = useState<Datum[]>([]);

  const {
    data: collectionApi,
    isLoading,
    isError,
  } = collectionCategoryApi.useFetchCollectionCategoryQuery(Data);

  const filter = useMemo(() => {
    return collectionApi || [];
  }, [collectionApi]);

  useEffect(() => {
    setDatas(filter.slice(0, 6));
    console.log("collectionApi", collectionApi);
  }, [filter]);

  //! Запрос FilterSelect DropDown
  const filtered = getDataFromSort(Data);
  console.log(filtered);

  const filtere = useMemo(() => {
    return filtered || [];
  }, [filtered]);

  useEffect(() => {
    setDatas(filtere.slice(0, 6));
    // console.log("filtere", filtere);
  }, [filtered]);
  //! Пагинация

  let pages: number;
  const pageCount: number = Math.ceil(datas.length / 6);

  function handleClick(): void {
    let pageNum: React.ChangeEvent<unknown> | number = pages || 1;
    let start: number = (+pageNum - 1) * 6; /* ?. */
    let end: number = start + 6;
    if (!name) {
      setDatas(collectionApi.slice(start, end));
      return;
    }
    setDatas(filtere.slice(start, end));
    // console.log("collectionApi Запрос initialState");
  }

  function setPage(event: React.ChangeEvent<unknown>, page: number): void {
    pages = page;
    handleClick();
  }

  const [addFav] = productFavoritesApi.useAddFavoritesMutation();

  const handleAddFav = (item: any) => {
    addFav(item);
    setFavorite(!favorite);
  };

  const [favorite, setFavorite] = useState(false);

  const [counte, setCounte] = useState(1);
  const limit = 10;

  const query = {
    limit: limit,
    counte: counte,
    // name: "privet",
  };

  const { data = [] } = productFavoritesApi.useGetFavoritesQuery(query);

  const cards = data?.result?.data || [];

  useEffect(() => {
    if (cards.length !== 0)
      setFavorite(cards.some((card: any) => card.id === id));
  }, [cards]);

  return (
    <>
      <div className={classes.dropdown}>
        <div>
          <h2 className={classes.title}>{datas[0]?.category?.title}</h2>
        </div>
        <div>
          <FilterSelect setName={setName} name={name} />
        </div>
      </div>
      <div className={classes.container}>
        {isLoading ? <LoaderCircular /> : null}
        {isError ? <ErrorPage /> : null}
        {datas &&
          datas.map((item) => {
            return (
              <div className={classes.content_container}>
                <div className={classes.container_img}>
                  {item?.images[0]?.url ? (
                    <img
                      className={classes.content_img}
                      src={item?.images[0]?.url}
                      alt=""
                    />
                  ) : (
                    <img
                      className={classes.content_img}
                      src="https://via.placeholder.com/400x560"
                      alt=""
                    />
                  )}
                </div>
                <div className={classes.content}>
                  <div className={classes.first}>
                    <div className={classes.price}>
                      <span className={classes.old_price}>{item.discount}</span>
                      <span className={classes.new_price}>{item.price}</span>
                    </div>
                    <div className={classes.second}>
                      <h4>{item.title}</h4>
                    </div>
                    <div className={classes.fourth}>
                      <div>
                        <RatingComponent rate={item.rate} />
                      </div>

                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() => handleAddFav(item)}
                        className={classes.favorite_icon}
                      >
                        <img
                          src={favorite ? filledLike : favoriteIcon}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className={classes.pagination}>
        <Paginations
          count={pageCount}
          onChange={(event: React.ChangeEvent<unknown>, page: number) =>
            setPage(event, page)
          }
        />
      </div>
      ;
    </>
  );
};

export default CollectionCategory;
