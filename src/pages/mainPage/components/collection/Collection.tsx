import React, { FC } from "react";

import styles from "./collection.module.scss";
import { useNavigate } from "react-router-dom";
import { CollectionApi } from "../../../../store/services/CollectionApi";

interface ICollection {
  info: {
    image: string;
    title: string;
  }[];
}

const Collection: FC<ICollection> = ({ info }) => {
  const {
    data: Collections,
    isLoading,
    isError,
    refetch,
  } = CollectionApi.useFetchAllCollectionsQuery("");

  console.log(JSON.parse(localStorage.getItem("accessToken") || "{}"));
  console.log(Collections);

  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Коллекция</h1>
      {info.map((item) => {
        return (
          <section
            onClick={() => navigate("./collection")}
            key={item.title}
            className={styles.block}
          >
            <div className={styles.left}>
              <img className={styles.image} src={item.image} alt="" />
            </div>

            <div className={styles.right}>
              <h1>{item.title}</h1>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Collection;
