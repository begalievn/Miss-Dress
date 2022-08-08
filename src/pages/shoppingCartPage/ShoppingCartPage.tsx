import React, { useEffect, useState } from "react";

import SubmitButton from "../../components/submitButton/SubmitButton";

import { shoppingCartApi } from "../../store/services/shoppingCartQuery";

import useInput from "../../hooks/validation/useInput";

import { IResult } from "../../utils/types/typesShoppingCart";

import styles from "./shoppingCardPage.module.scss";
import Total from "./components/total/Total";
import ProductOrder from "./components/productOrder/ProductOrder";
import Select from "./components/select/Select";

const ShoppingCartPage = () => {
  const inputs = [
    {
      placeholder: "Ваше имя",
      name: "firsName",
      hook: useInput("", {
        minLength: 1,
        maxLength: 30,
        isEmpty: true,
        cyrillic: true,
      }),
    },
    {
      placeholder: "Ваша фамилия",
      name: "lastName",
      hook: useInput("", {
        minLength: 2,
        maxLength: 30,
        isEmpty: true,
        cyrillic: true,
      }),
    },
    {
      placeholder: "Номер телефона",
      name: "phoneNumber",
      hook: useInput("", {
        isEmpty: true,
        minLength: 5,
        maxLength: 13,
        phoneNumber: true,
      }),
    },
    {
      placeholder: "Страна",
      name: "countryId",
      hook: useInput("", {
        minLength: 2,
        maxLength: 30,
        isEmpty: true,
        cyrillic: true,
      }),
    },
    {
      placeholder: "Город",
      name: "cityId",
      hook: useInput("", {
        cyrillic: true,
        minLength: 2,
        maxLength: 30,
        isEmpty: true,
      }),
    },
  ];
  const [resultState, setResultState] = useState<IResult | null>();

  const {
    data: getProducts,
    isLoading,
    error,
    refetch,
  } = shoppingCartApi.useFetchAllPostsQuery();

  const [addProduct, {}] = shoppingCartApi.useAddProductMutation();
  const [removeProduct, {}] = shoppingCartApi.useRemoveProductMutation();
  const [deleteProduct, {}] = shoppingCartApi.useDeleteProductMutation();
  const [saveUserData, {}] = shoppingCartApi.useSaveUserDataMutation();
  const token = localStorage.getItem("accessToken");
  const products = getProducts?.result.products;
  const result = getProducts?.result;
  const cartId = getProducts?.result.id;

  useEffect(() => {
    setResultState(result);
  }, [getProducts]);
  console.log(error);

  const saveHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data: string[] = [];
    console.log(inputs[0].hook.value);
    let sendData: { [name: string]: string } = {};

    inputs.forEach((item) => {
      sendData[item.name] = item.hook.value;
    });

    console.log(sendData, "ASdASd");
    const valid = inputs.every(({ hook }) => {
      // console.log(i.hook.inputValid, i.name);
      data.push(hook.value);
      return hook.inputValid;
    });
    console.log(data);
    if (valid) {
      inputs.forEach((i) => i.hook.clearFields());
      // await saveUserData();
    }
  };

  async function changeHandler(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: number,
    action: "+" | "-" | "x"
  ) {
    const body = {
      productId: id,
      cartId: cartId!,
    };

    const { result } =
      action === "+"
        ? await addProduct({ productId: id }).unwrap()
        : action === "-"
        ? await removeProduct(body).unwrap()
        : await deleteProduct(body).unwrap();
    const { products } = result;
    if (action === "x" && products.length < resultState?.products.length!) {
      const shortedArray = resultState?.products.filter((item) => {
        return item.product.id !== id;
      });
      setResultState({ ...result, products: shortedArray! });
      return;
    }
    const changed = products?.filter((item) => {
      return item.product.id === id;
    })[0];
    const newProductState = resultState?.products.map((item) => {
      return item.product.id === changed.product.id ? changed : item;
    });
    setResultState({ ...result, products: newProductState! });
  }

  function placeOrderHandler() {}

  function editHandler() {}

  // if (!token) {
  //   return (
  //     <h1 style={{ height: "40vh", textAlign: "center", marginTop: "10vw" }}>
  //       Вам необходимо зарегистрироваться
  //     </h1>
  //   );
  // }

  if (products && !products.length) {
    return (
      <h1 style={{ height: "40vh", textAlign: "center", marginTop: "10vw" }}>
        В вашей корзине нет заказов
      </h1>
    );
  }
  // if (error) {
  //   return (
  //     <h1 style={{ height: "40vh", textAlign: "center", marginTop: "10vw" }}>
  //       Ошибка сервера
  //     </h1>
  //   );
  // }
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
                  <SubmitButton
                    text="Редактировать"
                    onClick={() => editHandler()}
                  />
                </div>
              </section>

              <form className={styles.form} action="">
                {inputs.map((item, index) => {
                  console.log(index);
                  return (
                    <div className={styles.inputBlock}>
                      {index >= 3 ? (
                        <Select />
                      ) : (
                        <input
                          placeholder={item.placeholder}
                          name={item.name}
                          onChange={(e) => item.hook.onChange(e)}
                          onBlur={() => item.hook.onBlur()}
                          value={item.hook.value}
                          className={styles.input}
                          type="text"
                        />
                      )}
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
              {resultState &&
                resultState.products.map((item) => {
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
          <Total
            placeOrder={placeOrderHandler}
            fullPrice={resultState?.price!}
            discount={123}
            total={122}
          />
        </div>
      </div>
    </section>
  );
};

export default ShoppingCartPage;
