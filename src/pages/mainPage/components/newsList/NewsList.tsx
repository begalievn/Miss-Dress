import React, { FC, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { IList } from "../../../newsPage/NewsArray";

import SubmitButton from "../../../../components/submitButton/SubmitButton";

import styles from "./newList.module.scss";

interface INewsList {
  title: "Другие новости" | "Новости";
  info: IList[] | null | undefined;
  showMore?: (e: React.SyntheticEvent) => void;
}

const NewsList: FC<INewsList> = ({ title = "Новости", info, showMore }) => {
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

  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
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
      {title === "Другие новости" && showMore && (
        <div className={styles.buttonBlock}>
          <div>
            <SubmitButton onClick={showMore} text={"Еще новости"} />
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsList;
