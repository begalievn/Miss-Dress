import React, { useEffect, useRef, useState } from "react";

import { useNavigate } from "react-router-dom";

import SubmitButton from "../../components/submitButton/SubmitButton";

import { shoppingCartApi } from "../../store/secondary/shoppingCartQuery";

import useInput from "../../hooks/validation/useInput";

import { IResult } from "../../utils/types/typesShoppingCart";

import { IContactInfo, IUserData } from "../../utils/types/typesUserData";

import styles from "./shoppingCardPage.module.scss";
import Total from "./components/total/Total";
import ProductOrder from "./components/productOrder/ProductOrder";
import Select from "./components/select/Select";

const ShoppingCartPage = () => {

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior:"smooth"});
  }, []);

  const inputs = [
    {
      placeholder: "Ваше имя",
      name: "firstName",
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
      hook: useInput("", {}),
    },
    {
      placeholder: "Город",
      name: "cityId",
      hook: useInput("", {}),
    },
  ];
  const [resultState, setResultState] = useState<IResult | null>();
  const [countryId, setCountryId] = useState<number | null>(null);
  const [city, setCityId] = useState<number | null>(null);
  const [edit, setEdit] = useState<boolean>(false);
  const [contactInfo, setContactInfo] = useState<IContactInfo | null>(null);
  const navigate = useNavigate();

  const {
    data: getProducts,
    isLoading,
    error,
    refetch,
  } = shoppingCartApi.useFetchAllPostsQuery();
  // const { data: getContactInfo } = shoppingCartApi.useGetAllContactInfoQuery();
  // const firstContactInfo = getContactInfo?.result[0];
  // console.log(getContactInfo);

  console.log(getProducts);

  const [addProduct, {}] = shoppingCartApi.useAddProductMutation();
  const [removeProduct, {}] = shoppingCartApi.useRemoveProductMutation();
  const [deleteProduct, {}] = shoppingCartApi.useDeleteProductMutation();
  const [saveUserData, {}] = shoppingCartApi.useSaveUserDataMutation();
  const [placeOrder, {}] = shoppingCartApi.usePlaceOrderMutation();
  const [editContactInfo, {}] = shoppingCartApi.useEditContactInfoMutation();
  const userInputData = useRef<null | IUserData>(null);

  const token = localStorage.getItem("accessToken");
  const products = getProducts?.result.products;
  const result = getProducts?.result;
  const cartId = getProducts?.result.id;

  useEffect(() => {
    setResultState(result);
  }, [getProducts]);

  const saveHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setEdit(false);

    let sendData: IUserData = {
      countryId: 0,
      cityId: 0,
      firstName: "",
      lastName: "",
      phoneNumber: "",
    };

    inputs.forEach((item) => {
      // @ts-ignore
      sendData[item.name] = item.hook.value;
    });

    sendData.countryId = countryId ? countryId : 0;
    sendData.cityId = city ? city : 0;
    const valid = inputs.every(({ hook, name }) => {
      console.log(hook.inputValid, name);
      return hook.inputValid;
    });
    console.log(valid);
    if (valid) {
      if (edit) {
        const editedContactInfo = await editContactInfo({
          id: contactInfo?.id!,
          body: userInputData.current!,
        }).unwrap();
        console.log(editedContactInfo);
        setContactInfo(editedContactInfo.result);
        setEdit(false);
        userInputData.current = sendData;
      } else {
        const userData = await saveUserData(sendData).unwrap();
        setContactInfo(userData.result);
        userInputData.current = sendData;
      }
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

  function placeOrderHandler() {
    if (contactInfo && resultState && !edit) {
      placeOrder({
        cartId: resultState.id,
        contactInfoId: contactInfo.id,
      });
    } else alert("Веведите ваши данные");
  }

  async function editHandler(e: React.SyntheticEvent) {
    e.preventDefault();
    const editedContactInfo = await editContactInfo({
      id: contactInfo?.id!,
      body: userInputData.current!,
    }).unwrap();
    console.log(editedContactInfo);
    setContactInfo(editedContactInfo.result);
    setEdit(false);
  }

  if (!token) {
    return (
      <h1 style={{ height: "40vh", textAlign: "center", marginTop: "10vw" }}>
        Вам необходимо зарегистрироваться
      </h1>
    );
  }

  if (products && !products.length) {
    return (
      <h1 style={{ height: "40vh", textAlign: "center", marginTop: "10vw" }}>
        В вашей корзине нет заказов
      </h1>
    );
  }
  if (error) {
    return (
      <h1 style={{ height: "40vh", textAlign: "center", marginTop: "10vw" }}>
        Ошибка сервера
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
              {!edit && contactInfo && (
                <section className={styles.addressBlock}>
                  <h3 className={styles.addressTitle}>Адрес доставки</h3>
                  <p>Исанова, 79, {contactInfo?.phoneNumber}</p>
                  <p>
                    {contactInfo?.address.country.title}, г.{" "}
                    {contactInfo?.address.city.title}
                  </p>
                  <div className={styles.buttonBlock}>
                    <SubmitButton
                      text="Редактировать"
                      onClick={(e) => setEdit(true)}
                    />
                  </div>
                </section>
              )}
              {(!contactInfo || edit) && (
                <form className={styles.form} action="">
                  {inputs.map((item, index) => {
                    return (
                      <div className={styles.inputBlock}>
                        {index >= 3 ? (
                          (index === 3 && (
                            <Select
                              onChange={(id) => {
                                setCountryId(id);
                                setCityId(null);
                              }}
                              placeholder={"Страна"}
                            />
                          )) ||
                          (index === 4 && (
                            <Select
                              onChange={setCityId}
                              key={countryId}
                              id={countryId!}
                              placeholder={
                                countryId ? "Город" : "Сначала выберите страну"
                              }
                            />
                          ))
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
                    text={"Сохранить"}
                  />
                </form>
              )}
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
          <section className={styles.rightBlock}>
            <Total
              placeOrder={placeOrderHandler}
              fullPrice={resultState?.price!}
              discount={123}
              total={122}
            />
            <SubmitButton
              onClick={(e) => navigate("/order")}
              text={"История заказов"}
            />
          </section>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCartPage;
