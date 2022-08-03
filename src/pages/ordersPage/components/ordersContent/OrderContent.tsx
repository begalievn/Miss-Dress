import React from "react";

import { Link, useParams } from "react-router-dom";

import { productImgOne, productImgTwo, productImgThree } from "../../../../assets/orderCart/orderCart";

// import { orderApi } from "../../../../store/services/OrderApi";

import { ICartType } from "../../../../utils/types/typesOrder";

import styles from "./orderContent.module.scss";

const cart:ICartType[] = [
  {
    id: 1,
    images: [
      {image:productImgOne},
      {image:productImgTwo},
      {image:productImgThree}],
    status: "Доставлен",
    date: "23.01.2022",
    price: 5990
        
  },
  {
    id: 2,
    images: [
      {image:productImgOne},
      {image:productImgTwo},
      {image:productImgThree},
      {image:productImgTwo}],
    status: "Отменен",
    date: "23.01.2022",
    price: 5990
  },
  {
    id: 3,
    images: [
      {image:productImgOne},
      {image:productImgTwo},
      {image:productImgThree}],
    status: "Оплачен",
    date: "23.01.2022",
    price: 5990
  },
];

function OrderContent() {

  console.log(useParams());

  const {id} = useParams();
  

  // const {data: cart, isLoading, isError} = orderApi.useFetchAllOrderQuery("");
  // console.log(cart);

  return (
    <div>
      {/* {isError && <h1>Ошибка на сервере</h1>} */}
      {cart.map((item:ICartType) => {
        return (
          <div className={styles.block}>
            <div className={styles.infoBlock}>
              <div className={styles.infoBlockLeft}>
                <h4 className={styles.infoOrder}>Заказ №2032a231d</h4>
                <p className={styles.infoStatus}>{item.status}</p>
              </div>
              <p className={styles.infoDate}>{item.date}</p>
            </div>

            <div className={styles.contentBlock}>
              <ul className={styles.contentBlockList}>

                <li>
                  {item?.images.map((img:any)=>(
                    <img
                      className={styles.contentBlockImg}
                      src={img.image}
                      alt=""
                    />
                  ))}   
                </li>
                                
                <li>
                  <Link to={"/order-product"}>
                    <div className={styles.contentBlockImgPlus}>+{item.images.length-3}</div>
                  </Link>
                </li>
              </ul>
              <p className={styles.contentBlockPrice}>{item.price} с.</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default OrderContent;
