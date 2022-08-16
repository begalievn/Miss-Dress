import React, { useEffect } from "react";

import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

import styles from "./orderPage.module.scss";

import OrdersContent from "./components/ordersContent/OrderContent";


function OrderPage() {

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior:"smooth"});
  }, []);
    
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Breadcrumbs />
        <h3 className={styles.header}>Мои заказы</h3>
        <hr className={styles.horizontLine} />
        <OrdersContent />
      </div>
    </section>
  );
}

export default OrderPage;
