import React, { FC } from "react";

import styles from "./newList.module.scss";

interface INewsList {
  page?: "main" | "currentNews" | "about";
  title?: string;
}

const NewsList: FC<INewsList> = ({ page = "main", title = "Новости" }) => {
  return (
    <section className={styles.container}>
      {page !== "about" && (
        <h1
          className={
            page === "main" ? styles.headerMain : styles.headerCurrentNews
          }
        >
          {title}
        </h1>
      )}
      {[1, 2, 3, 4].map((item) => (
        <div key={item} className={styles.imageBlock}>
          <div
            className={
              page === "about"
                ? `${styles.infoBlock} ${styles.lost}`
                : `${styles.infoBlock}`
            }
          >
            <h3 className={styles.title}>Более 20 новых коллекций</h3>
            <div className={styles.info}>
              <p className={styles.read}>Читать</p>
              <p className={styles.date}>05.05.2022</p>
            </div>
          </div>

          {/*<img src={newsListImage} alt="" className={styles.image} />*/}
        </div>
      ))}
    </section>
  );
};

export default NewsList;
