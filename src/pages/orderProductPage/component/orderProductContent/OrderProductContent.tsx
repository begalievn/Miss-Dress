import { useParams } from "react-router-dom";

import { orderApi } from "../../../../store/services/OrderApi";

import OrderProductItem from "../orderProductItem/OrderProductItem";

import classes from "./orderProductContent.module.scss";

function OrderProductContent() {

  const {id} = useParams();
  // console.log(params);
  
  const {data=[], isLoading, isError} = orderApi.useFetchOrderByIdQuery(id);
  const cartOrderId = data?.result;
  // console.log(cartOrderId);

  return (
    <div>
      { !isLoading ? cartOrderId?.map((item:any)=>{
        return (
          <div>
            <section className={classes.header}>
              <div className={classes.title}>Заказ {item.id}</div>
              <div className={classes.status}>{item.status}</div>
            </section>
  
            <hr className={classes.line} />

            <OrderProductItem />
  
            <section className={classes.footer}>
              <div className={classes.footerContent}>
                <p className={classes.footerTitle}>Получатель:</p>
                <p className={classes.footerTitle}>Адрес доставки:</p>
                <p className={classes.footerTitle}>Итого к оплате:</p>       
              </div>
  
              <div className={classes.footerContent}>
                <p className={classes.footerText}>Манки Д. Луффи +996712345678</p>
                <p className={classes.footerText}>Кыргызстан, г. Бишкек</p>
                <p className={classes.footerText}>{item.cart.price} с.</p>
              </div>
            </section>
          </div>    
        );
      }) : null }
      {isError && <h1>Ошибка на сервере</h1>}
    </div>
  );
}

export default OrderProductContent;

