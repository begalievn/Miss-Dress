import React, { FC } from "react";

import { productImg } from "../../../../assets/shoppingCart/shoppingCart";

import styles from "./productOrder.module.scss";

interface IProductOrder {
  page: "sending" | "viewing";
  info?: {
    name: string;
    article: string;
    size: string;
    color: string;
    count: string;
    price: number;
    discount?: number;
  };
}

const ProductOrder: FC<IProductOrder> = ({ info, page }) => {
  const pageContainer =
    page === "sending" ? styles.container : styles.myOrdersContainer;
  return (
    <div className={pageContainer}>
      <img className={styles.img} src={productImg} alt="" />

      <section className={styles.block}>
        <div className={styles.infoBlock}>
          <div className={styles.infoBlockText}>
            <h3 className={styles.title}>Benito Kate Wrap Dress</h3>
            <p className={`${styles.text} ${styles.itemNone}`}>
              Артикул: <span>Платья AD-875</span>
            </p>
            <p className={styles.text}>
              Размер: <span>29-49</span>
            </p>
            <p className={styles.text}>
              Цвет: <span>Бежевый</span>
            </p>
            <p className={`${styles.text} ${styles.itemNone}`}>
              Количество товара в линейке: <span>6</span>
            </p>
          </div>
          {page === "sending" && (
            <section className={styles.control}>
              <div className={styles.minus}>-</div>
              <div className={styles.count}>2</div>
              <div className={styles.plus}>+</div>
            </section>
          )}
        </div>
        <div className={styles.rightSection}>
          {page === "sending" && <div className={styles.cross}>+</div>}
          <div className={styles.priceBlock}>
            <p className={styles.realPrice}>5990</p>
            <p className={styles.wrongPrice}>7500</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductOrder;
