import ProductOrder from "../../shoppingCartPage/components/productOrder/ProductOrder";

import classes from "./orderProductContent.module.scss";

function OrderProductContent() {
  return (
    <>
      <section className={classes.header}>
        <div className={classes.title}>Заказ №2032a231d</div>
        <div className={classes.status}>Доставлено</div>
      </section>
      <hr className={classes.line} />

      <ProductOrder />

      <section className={classes.footer}>
        <div className={classes.footerContent}>
          <p className={classes.footerTitle}>Получатель:</p>
          <p className={classes.footerTitle}>Адрес доставки:</p>
          <p className={classes.footerTitle}>Итого к оплате:</p>       
        </div>

        <div className={classes.footerContent}>
          <p className={classes.footerText}>Манки Д. Луффи +996712345678</p>
          <p className={classes.footerText}>Кыргызстан, г. Бишкек</p>
          <p className={classes.footerText}>23960 с.</p>
        </div>
      </section>
    </>
  );
}

export default OrderProductContent;