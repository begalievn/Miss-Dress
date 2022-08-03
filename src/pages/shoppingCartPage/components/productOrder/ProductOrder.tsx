import React, { FC } from "react";

import { productImg } from "../../../../assets/shoppingCart/shoppingCart";

import { IProduct } from "../../../../utils/types/typesShoppingCart";

import styles from "./productOrder.module.scss";

interface IProductOrder {
  page: "sending" | "viewing";
  info: IProduct;

  // name: string;
  // article: string;
  // size: string;
  // color: string;
  // count: string;
  // price: number;
  // discount?: number;
}

const ProductOrder: FC<IProductOrder> = ({ info, page }) => {
  const { title, price, amount, article, discount } = info.product;

  const pageContainer =
    page === "sending" ? styles.container : styles.myOrdersContainer;
  return (
    <div className={pageContainer}>
      <img className={styles.img} src={productImg} alt="" />

      <section className={styles.block}>
        <div className={styles.infoBlock}>
          <div className={styles.infoBlockText}>
            <h3 className={styles.title}>{title}</h3>
            <p className={`${styles.text} ${styles.itemNone}`}>
              Артикул: <span>{article}</span>
            </p>
            <p className={styles.text}>
              Размер: <span>29-49</span>
            </p>
            <p className={styles.text}>
              Цвет: <span>Бежевый</span>
            </p>
            <p className={`${styles.text} ${styles.itemNone}`}>
              Количество товара в линейке: <span>{amount}</span>
            </p>
          </div>
          {page === "sending" && (
            <section className={styles.control}>
              <div className={styles.minus}>-</div>
              <div className={styles.count}>{info.amount}</div>
              <div className={styles.plus}>+</div>
            </section>
          )}
        </div>
        <div className={styles.rightSection}>
          {page === "sending" && <div className={styles.cross}>+</div>}
          <div className={styles.priceBlock}>
            {discount ? (
              <>
                <p className={styles.realPrice}>{price * (discount / 100)}</p>
                <p className={styles.wrongPrice}>{price}</p>
              </>
            ) : (
              <p className={styles.realPrice}>{price}</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductOrder;
