import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import NewsList from "../mainPage/components/newsList/NewsList";

import styles from "./newsPage.module.scss";

import { IList, newsArray } from "./NewsArray";

interface INewsPage {
  currentNews: IList;
  otherNews: IList[];
}

const NewsPage = () => {
  const [refreshInfo, setRefreshInfo] = useState<INewsPage | null>(null);

  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);

    const other = newsArray.filter((item) => {
      return item.id.toString() !== params.id;
    });
    const one = newsArray.filter((item) => {
      return item.id.toString() === params.id;
    })[0];

    setRefreshInfo({ currentNews: one, otherNews: other });
  }, [params]);

  const showMoreHandler = (e: React.SyntheticEvent) => {
    console.log(e);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.titleMobile}>{refreshInfo?.currentNews.title}</h3>
        <section className={styles.newsContainer}>
          <img
            src={refreshInfo?.currentNews.image}
            alt=""
            className={styles.image}
          />
          <div className={styles.block}>
            <section className={styles.textBlock}>
              <h3 className={styles.title}>{refreshInfo?.currentNews.title}</h3>
              <p className={styles.text}>{refreshInfo?.currentNews.text}</p>
            </section>
            <p className={styles.date}>{refreshInfo?.currentNews.date}</p>
          </div>
        </section>
        <NewsList
          title="Другие новости"
          showMore={(e) => showMoreHandler(e)}
          info={refreshInfo?.otherNews}
        />
      </div>
    </div>
  );
};

export default NewsPage;
