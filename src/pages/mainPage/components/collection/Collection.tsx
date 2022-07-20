import React, { FC } from "react";

import styles from "./collection.module.scss";

interface ICollection {
  info: {
    image: string;
    title: string;
  }[];
}

const Collection: FC<ICollection> = ({ info }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Коллекция</h1>
      {info.map((item) => {
        return (
          <section key={item.title} className={styles.block}>
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
