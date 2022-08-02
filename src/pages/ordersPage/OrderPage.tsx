import React from "react";

import styles from "./orderPage.module.scss";

import OrdersContent from "./components/ordersContent/OrderContent";

function OrderPage() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h3 className={styles.header}>Мои заказы</h3>
                <hr />
                <OrdersContent />
            </div>
        </section>
    );
}

export default OrderPage;
