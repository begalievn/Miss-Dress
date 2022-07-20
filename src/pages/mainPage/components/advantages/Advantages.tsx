import React from "react";

import styles from "./advantages.module.scss";

const Advantages = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Наши преимущества</h1>
      <section className={styles.hero}>
        {[1, 2, 3, 4].map((item) => {
          return (
            <section className={styles.block}>
              <h3 className={styles.title}>
                Гарантия обмена и возврата товара
              </h3>
              {/*<div className={styles.test}>*/}
              {/*  Гарантия обмена и возврата товара*/}
              {/*</div>*/}
              <p className={styles.text}>100% гарантия возврата товара</p>
            </section>
          );
        })}
      </section>
    </div>
    // <section className={styles.back}>
    // </section>
  );
};

export default Advantages;
