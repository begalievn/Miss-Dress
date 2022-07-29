import React from "react";

import styles from "../../components/total/total.module.scss";

import SubmitButton from "../../../../components/submitButton/SubmitButton";

const Total = () => {
  const submitHandler = (e: React.SyntheticEvent) => {
    console.log(e);
  };

  return (
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
      <SubmitButton text={"Оформить заказ"} onClick={(e) => submitHandler(e)} />
    </section>
  );
};

export default Total;
