import React, { FC, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { IList } from "../../../newsPage/NewsArray";

import styles from "./newList.module.scss";

interface INewsList {
  title: "Другие новости" | "Новости";
  info: IList[] | null | undefined;
}

const NewsList: FC<INewsList> = ({ title = "Новости", info }) => {
  const navigate = useNavigate();

  const zero = (int: number) => {
    if (int < 10) {
      return `0${int}`;
    }
    return int;
  };

  console.log(
    `${zero(new Date().getDay())}.${zero(
      new Date().getMonth()
    )}.${new Date().getFullYear()}`
  );

  return (
    <section className={styles.container}>
      {title === undefined && (
        <h1
          className={
            title === "Новости" ? styles.headerMain : styles.headerCurrentNews
          }
        >
          {title}
        </h1>
      )}

      {info &&
        info.map((item: IList) => (
          <div
            onClick={() => navigate(`/news/${item.id}`)}
            key={item.id}
            className={styles.imageBlock}
          >
            <div
              style={{
                backgroundImage: `url(${item.image})`,
              }}
              className={
                title === undefined
                  ? `${styles.infoBlock} ${styles.lost}`
                  : `${styles.infoBlock}`
              }
            >
              <h3 className={styles.title}>{item.title}</h3>
              <div className={styles.info}>
                <p className={styles.read}>Читать</p>
                <p className={styles.date}>{item.date}</p>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default NewsList;
