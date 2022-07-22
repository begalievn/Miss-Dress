import React from "react";

import styles from "./shoppingCardPage.module.scss";
import Total from "./components/total/Total";
import ProductOrder from "./components/productOrder/ProductOrder";

const ShoppingCartPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.flex}>
          <section className={styles.order}>
            <section className={styles.booking}>
              <div className={styles.header}>Оформление заказа</div>
              <form className={styles.form} action="">
                <div className={styles.inputBlock}>
                  <input
                    placeholder="Номер телефона"
                    className={styles.input}
                    type="text"
                  />
                  <p className={styles.warning}>Вышла ошибочка</p>
                </div>
              </form>
            </section>
            <ProductOrder />
          </section>
          <Total />
        </div>
      </div>
    </section>
  );
};

export default ShoppingCartPage;
