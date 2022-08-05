import React, { FC } from "react";

import styles from "./collection.module.scss";

import { useNavigate } from "react-router-dom";

interface ICollection {
  info: {
    image: string;
    title: string;
    path: string;
  }[];
}

const Collection: FC<ICollection> = ({ info }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Коллекция</h1>
      {info.map((item) => {
        return (
          <section
            onClick={() => navigate(`/collection/${item.path}`)}
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
