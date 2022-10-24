import React from "react";

import { Link } from "react-router-dom";

import { orderApi } from "../../../../store/secondary/OrderApi";

import styles from "./orderContent.module.scss";

function OrderContent() {
  const { data, isError, isLoading } = orderApi.useFetchAllOrderQuery();
  const cart = data?.result;
  console.log(cart);


  // const userStatus = (item: number) => {
  //   switch (item) {
  //   case 0:
  //     // eslint-disable-next-line no-labels
  //     text: "В ожидании";
  //     break;
  //   case 1:
  //     text: "Проверен";
  //     break;
  //   case 2:
  //     text: "Не проверен";
  //     break;
  //   case 3:
  //     text: "Забанен";
  //     break;
  //   default:
  //     text: "В ожидании";
  //   }
  // };

  return (
    <div>
      {!isLoading
        ? cart?.map((item) => {
          return (
            <div key={item.id} className={styles.block}>
              <div className={styles.infoBlock}>
                <div className={styles.infoBlockLeft}>
                  <h4 className={styles.infoOrder}>Заказ №{item.id}</h4>
                  {item.status === 0
                    ? <p className={styles.infoStatus}>Не доставлено</p>
                    : <p className={styles.infoStatus}>Доставлено</p>
                  }
                </div>
                <p className={styles.infoDate}>
                  {item.createDate.slice(0, 10)}
                </p>
              </div>

              <div className={styles.contentBlock}>
                <ul className={styles.contentBlockList}>
                  <li>
                    {item.cart.products
                      .filter((_elem: any, index: number) => index < 3)
                      .map((elem: any) => {
                        return (
                          <span
                            key={elem.id}
                            className={styles.contentBlockImg}
                          >
                            <img
                              src={elem.product.images[1]?.url}
                              alt=""
                            ></img>
                          </span>
                        );
                      })}
                  </li>

                  <li>
                    <Link to={`/order/${item.id}`}>
                      <div className={styles.contentBlockImgPlus}>
                          +{item.cart.amount - 3}
                      </div>
                    </Link>
                  </li>
                </ul>

                <p className={styles.contentBlockPrice}>
                  {item.cart.price} с.
                </p>
              </div>
            </div>
          );
        })
        : null}

      {isError && <h1>Ошибка на сервере</h1>}
    </div>
  );
}

export default OrderContent;
