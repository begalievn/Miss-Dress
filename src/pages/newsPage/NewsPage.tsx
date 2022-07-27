import React from "react";

import NewsList from "../mainPage/components/newsList/NewsList";

import styles from "./newsPage.module.scss";

import image from "./newsImage.jpg";

const NewsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.titleMobile}>Она создала свой бренд в 20</h3>
        <section className={styles.newsContainer}>
          <img src={image} alt="" className={styles.image} />
          <div className={styles.block}>
            <section className={styles.textBlock}>
              <h3 className={styles.title}>Она создала свой бренд в 20</h3>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                eos excepturi illo nam quidem tempora totam vel. Accusamus,
                atque blanditiis dolore facere id nam neque nobis odit omnis
                pariatur perferendis possimus quia reiciendis rerum sunt totam
                voluptate, voluptates voluptatibus? Ab, blanditiis consequatur
                dolorum earum fuga itaque minus molestiae nisi saepe tenetur ut
              </p>
            </section>
            <p className={styles.date}>20.01.2022</p>
          </div>
        </section>
        <NewsList page="currentNews" title="Другие новости" />
      </div>
    </div>
  );
};

export default NewsPage;
