import React from "react";

import { Link } from "react-router-dom";

import { orderApi } from "../../../../store/services/OrderApi";

// import { productsApi } from "../../../../store/services/productsApi";

import styles from "./orderContent.module.scss";


// export enum EntityStatus {
//   PENDING = 0,
//   ACTIVE = 1,
//   DELETED = 2,
//   BANNED = 3,
// }


function OrderContent() {

  const {data=[], isError, isLoading} = orderApi.useFetchAllOrderQuery("");
  const cart=data?.result;
  // console.log(cart);

  console.log(data);
  
  return (
    <div>
      {!isLoading ? cart?.map((item:any) => {
        return (
          <div key={item.id} className={styles.block}>
            <div className={styles.infoBlock}>
              <div className={styles.infoBlockLeft}>
                <h4 className={styles.infoOrder}>Заказ   {item.id}</h4>
                <p className={styles.infoStatus}>{item.status}</p>
              </div>
              <p className={styles.infoDate}>{item.createDate.slice(0, 10)}</p>
            </div>

            <div className={styles.contentBlock}>
              <ul className={styles.contentBlockList}>  
                <li>
                  {item.cart.products.filter((elem:any, index:number)=>index<3).map((elem:any) => {
                    return (   
                      <span key={elem.id} className={styles.contentBlockImg}>
                        <img src={elem.product.images[1]?.url} alt=""></img> 
                      </span>
                    );
                  })}
                </li>
                           
                <li>
                  <Link to={`/order-product/${item.id}`}>
                    <div className={styles.contentBlockImgPlus}>+{item.cart.amount-3}</div>
                  </Link>
                </li>
              </ul>
              
              <p className={styles.contentBlockPrice}>{item.cart.price} с.</p>
            </div>
          </div>
        );
      }) : null}
      {isError && <h1>Ошибка на сервере</h1>}
    </div>
  );
}

export default OrderContent;
