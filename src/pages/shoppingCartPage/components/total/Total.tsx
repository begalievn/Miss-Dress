import React, { FC } from "react";

import styles from "../../components/total/total.module.scss";

import SubmitButton from "../../../../components/submitButton/SubmitButton";

interface ITotal {
  fullPrice: number;
  discount: number;
  total: number;
  placeOrder: () => void;
}
const Total: FC<ITotal> = ({ fullPrice, discount, total, placeOrder }) => {
  return (
    <section className={styles.total}>
      <h3 className={styles.totalTitle}>Итого</h3>
      <div className={styles.totalBlock}>
        <div className={styles.totalBlockRow}>
          <p className={styles.totalLeft}>Общая сумма</p>
          <p className={styles.totalRight}>{fullPrice}</p>
        </div>
        <div className={styles.totalBlockRow}>
          <p className={styles.totalLeft}>Скидка</p>
          <p className={styles.totalRight}>{discount}</p>
        </div>
        <div className={styles.totalBlockRow}>
          <p className={styles.totalLeft}>Итог</p>
          <p className={styles.totalRight}>{total}</p>
        </div>
      </div>
      <SubmitButton text={"Оформить заказ"} onClick={() => placeOrder()} />
    </section>
  );
};

export default Total;
