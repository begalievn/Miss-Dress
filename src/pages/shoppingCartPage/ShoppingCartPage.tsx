import React from "react";

import styles from "./shoppingCardPage.module.scss";

const ShoppingCartPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.flex}>
          <section className={styles.order}>
            <section className={styles.booking}>
              <div className={styles.header}></div>
            </section>
          </section>
          <section className={styles.total}>
            <h3 className={styles.totalTitle}>Итого</h3>
            <div className={styles.totalBlock}>
              <div className={styles.totalBlockRow}>
                <p className={styles.totalLeft}>Общая сумма</p>
                <p className={styles.totalRight}>224555</p>
              </div>
              <div className={styles.totalBlockRow}>
                <p className={styles.totalLeft}>Скидка</p>
                <p className={styles.totalRight}>1233</p>
              </div>
              <div className={styles.totalBlockRow}>
                <p className={styles.totalLeft}>Итог</p>
                <p className={styles.totalRight}>1231233</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCartPage;
