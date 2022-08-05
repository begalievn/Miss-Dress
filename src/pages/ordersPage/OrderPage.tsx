import React from "react";

import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

import styles from "./orderPage.module.scss";

import OrdersContent from "./components/ordersContent/OrderContent";


function OrderPage() {

    
  return (
    <section className={styles.container}>
      <div className={styles.content}>
      <Breadcrumbs />
        <h3 className={styles.header}>Мои заказы</h3>
        <hr />
        <OrdersContent />
      </div>
    </section>
  );
}

export default OrderPage;
