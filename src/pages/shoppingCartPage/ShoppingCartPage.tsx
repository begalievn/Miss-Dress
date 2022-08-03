import React from "react";

import SubmitButton from "../../components/submitButton/SubmitButton";

import { shoppingCartApi } from "../../store/services/shoppingCartQuery";

import useInput from "../../hooks/validation/useInput";

import styles from "./shoppingCardPage.module.scss";
import Total from "./components/total/Total";
import ProductOrder from "./components/productOrder/ProductOrder";

const ShoppingCartPage = () => {
  const inputs = [
    {
      placeholder: "Ваше имя",
      name: "name",
      hook: useInput("", {
        minLength: 1,
        maxLength: 30,
        isEmpty: true,
        cyrillic: true,
      }),
    },
    {
      placeholder: "Ваша фамилия",
      name: "surname",
      hook: useInput("", {
        minLength: 2,
        maxLength: 30,
        isEmpty: true,
        cyrillic: true,
      }),
    },
    {
      placeholder: "Номер телефона",
      name: "number",
      hook: useInput("", {
        isEmpty: true,
        minLength: 5,
        maxLength: 13,
        phoneNumber: true,
      }),
    },
    {
      placeholder: "Страна",
      name: "country",
      hook: useInput("", {
        minLength: 2,
        maxLength: 30,
        isEmpty: true,
        cyrillic: true,
      }),
    },
    {
      placeholder: "Город",
      name: "city",
      hook: useInput("", {
        cyrillic: true,
        minLength: 2,
        maxLength: 30,
        isEmpty: true,
      }),
    },
  ];

  const {
    data: getProducts,
    isLoading,
    error,
    refetch,
  } = shoppingCartApi.useFetchAllPostsQuery();

  const [addProduct, {}] = shoppingCartApi.useAddProductMutation();
  const [removeProduct, {}] = shoppingCartApi.useRemoveProductMutation();

  const products = getProducts?.result.products;
  const cartId = getProducts?.result.id;
  console.log(cartId);
  console.log(getProducts);

  const saveHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    inputs[0].hook.setError("");
    inputs.every((i) => {
      console.log(i.hook.inputValid, i.name);
      return i.hook.inputValid;
    }) && inputs.forEach((i) => i.hook.clearFields());
  };

  async function changeHandler(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: number,
    action: "+" | "-"
  ) {
    refetch();
    console.log(action);
    if (action === "+") await addProduct({ productId: id });
    if (action === "-") await removeProduct({ productId: id, cartId: cartId });
  }

  if (products && !products.length) {
    return (
      <h1 style={{ height: "40vh", textAlign: "center", marginTop: "10vw" }}>
        В вашей корзине нет заказов
      </h1>
    );
  }
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.flex}>
          <section className={styles.order}>
            <section className={styles.booking}>
              <h3 className={styles.header}>Оформление заказа</h3>
              <section className={styles.addressBlock}>
                <h3 className={styles.addressTitle}>Адрес доставки</h3>
                <p>Исанова, 79, +996712345678</p>
                <p>Кыргызстан, г. Бишкек</p>
                <div className={styles.buttonBlock}>
                  {/*<SubmitButton*/}
                  {/*  onClick={(e: React.SyntheticEvent) => submitHandler(e)}*/}
                  {/*/>*/}
                </div>
              </section>

              <form className={styles.form} action="">
                {inputs.map((item) => {
                  return (
                    <div className={styles.inputBlock}>
                      <input
                        placeholder={item.placeholder}
                        name={item.name}
                        onChange={(e) => item.hook.onChange(e)}
                        onBlur={() => item.hook.onBlur()}
                        value={item.hook.value}
                        className={styles.input}
                        type="text"
                      />
                      <p className={styles.warning}>
                        {item.hook.isDirty && item.hook.error}
                      </p>
                    </div>
                  );
                })}
                <SubmitButton
                  onClick={(e: React.SyntheticEvent) => saveHandler(e)}
                  text={"Редактировать"}
                />
              </form>
            </section>

            <div className={styles.orderList}>
              <h1 className={styles.orderListTitle}>Состав заказа</h1>
              {products &&
                products.map((item) => {
                  return (
                    <ProductOrder
                      change={changeHandler}
                      page={"sending"}
                      info={item}
                      key={item.id}
                    />
                  );
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
