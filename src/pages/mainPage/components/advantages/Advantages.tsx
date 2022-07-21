import React from "react";

import styles from "./advantages.module.scss";

const Advantages = () => {
  return (
    <div className={styles.back}>
      <div className={styles.container}>
        <h1 className={styles.header}>Наши преимущества</h1>
        <section className={styles.hero}>
          {[1, 2, 3, 4].map((item) => {
            return (
              <section key={item} className={styles.block}>
                <h3 className={styles.title}>
                  Гарантия обмена и возврата товара
                </h3>
                <p className={styles.text}>100% гарантия возврата товара</p>
              </section>
            );
          })}
        </section>
      </div>
    </div>
    // <section className={styles.back}>
    // </section>
  );
};

export default Advantages;
