import { useParams } from "react-router-dom";

import { orderApi } from "../../../../store/services/OrderApi";
import ErrorPage from "../../../errorPage/ErrorPage";

import ProductOrder from "../../../shoppingCartPage/components/productOrder/ProductOrder";

import classes from "./orderProductContent.module.scss";

function OrderProductContent() {
  const { id } = useParams();
  const { data, isLoading, isError } = orderApi.useFetchOrderByIdQuery(id!);
  const cartOrderId = data?.result;

  return (
    <div>
      {!isLoading
        ? cartOrderId?.map((item) => {
            return (
              <div key={item.id}>
                <div className={classes.header}>
                  <div className={classes.title}>Заказ №{item.id}</div>
                  <div className={classes.status}>{item.status}</div>
                </div>
                <div className={classes.titleLine}></div>

                {item.cart.products.map((elem) => {
                  return (
                    <ProductOrder key={elem.id} page={"viewing"} info={elem} />
                  );
                })}

                <section className={classes.footer}>
                  <div className={classes.footerContent}>
                    <p className={classes.footerTitle} id={classes.footerTitle}>
                      Получатель:
                    </p>
                    <p className={classes.footerTitle}>
                      <br />
                      Адрес доставки:
                    </p>
                    <p className={classes.footerTitle}>Итого к оплате:</p>
                  </div>

                  <div className={classes.footerContent}>
                    <p className={classes.footerText}>
                      {item.contactInfo.firstName}&nbsp;&nbsp;&nbsp;
                      {item.contactInfo.lastName}
                      <br /> {item.contactInfo.phoneNumber}
                    </p>
                    <p className={classes.footerText}>
                      {item.contactInfo.address.country.title}
                      ,&nbsp;&nbsp;&nbsp;
                      {item.contactInfo.address.city.title}
                    </p>
                    <p className={classes.footerText}>{item.cart.price} с.</p>
                  </div>
                </section>
              </div>
            );
          })
        : null}

      {isError && <ErrorPage />}
    </div>
  );
}

export default OrderProductContent;
