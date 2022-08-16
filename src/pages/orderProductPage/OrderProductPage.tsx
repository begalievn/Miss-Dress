
import { useEffect } from "react";

import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

import OrderProductContent from "./component/orderProductContent/OrderProductContent";

import classes from "./orderProductPage.module.scss";

function OrderProductPage() {

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior:"smooth"});
  }, []);

  return (
    <div className={classes.container}>
      <Breadcrumbs />
      <h1 className={classes.title}>Мои заказы</h1>
      <OrderProductContent/>
    </div>
  );
}

export default OrderProductPage;