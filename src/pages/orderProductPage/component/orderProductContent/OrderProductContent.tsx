import { useParams } from "react-router-dom";

import { orderApi } from "../../../../store/services/OrderApi";

// import { UserApi } from "../../../../store/services/UserApi";

import ProductOrder from "../../../shoppingCartPage/components/productOrder/ProductOrder";


import classes from "./orderProductContent.module.scss";

function OrderProductContent() {

  const {id} = useParams();
  // console.log(params);
  // console.log(typeof id);

  const {data, isLoading, isError} = orderApi.useFetchOrderByIdQuery(id!);
  
  const cartOrderId = data?.result;
  // console.log(cartOrderId);

  // let { data: dataMe } = UserApi.useGetMeQuery(1);
  // console.log(dataMe.result);
  
  return (
    <div>
      {  cartOrderId?.map((item)=>{
        return (
          <div key={item.id}>
            <section className={classes.header}>
              <div className={classes.title}>Заказ №{item.id}</div>
              <div className={classes.status}>{item.status}</div>
            </section>

            {
              item.cart.products.map((elem) => {
                // console.log(elem);
                return (
                  <ProductOrder key={elem.id} page={"viewing"} info={elem}  />
                );
              })
            }

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
      }) }
      {isError && <h1>Ошибка на сервере</h1>}
    </div>
  );
}

export default OrderProductContent;

