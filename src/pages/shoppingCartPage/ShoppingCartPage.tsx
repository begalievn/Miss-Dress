import React from "react";

import SubmitButton from "../../components/submitButton/SubmitButton";

import { shoppingCartApi } from "../../store/services/shoppingCartQuery";
import styles from "./shoppingCardPage.module.scss";
import Total from "./components/total/Total";
import ProductOrder from "./components/productOrder/ProductOrder";

const inputs = [
  {
    placeholder: "Ваше имя",
    name: "name",
  },
  {
    placeholder: "Ваша фамилия",
    name: "surname",
  },
  {
    placeholder: "Номер телефона",
    name: "number",
  },
  {
    placeholder: "Страна",
    name: "country",
  },
  {
    placeholder: "Город",
    name: "city",
  },
];

const ShoppingCartPage = () => {
  const { data: posts } = shoppingCartApi.useFetchAllPostsQuery("");
  console.log(posts);
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.flex}>
          <section className={styles.order}>
            <section className={styles.booking}>
              <h3 className={styles.header}>Оформление заказа</h3>
              <section className={styles.addressBlock}>
                <h3 className={styles.addressTitle}>Адресс доставки</h3>
                <p>Исанова, 79, +996712345678</p>
                <p>Кыргызстан, г. Бишкек</p>
                <div className={styles.buttonBlock}>
                  <SubmitButton />
                </div>
              </section>

              <form className={styles.form} action="">
                {inputs.map((item) => {
                  return (
                    <div className={styles.inputBlock}>
                      <input
                        placeholder={item.placeholder}
                        name={item.name}
                        className={styles.input}
                        type="text"
                      />
                      <p className={styles.warning}>Вышла ошибочка</p>
                    </div>
                  );
                })}
                <SubmitButton />
              </form>
            </section>

            <div className={styles.orderList}>
              <h1 className={styles.orderListTitle}>Состав заказа</h1>
              {[1, 2, 3].map((item) => {
                return <ProductOrder key={item} />;
              })}
            </div>
          </section>
          <Total />
        </div>
      </div>
    </section>
  );
};

export default ShoppingCartPage;
