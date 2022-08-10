
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

import OrderProductContent from "./component/orderProductContent/OrderProductContent";

import classes from "./orderProductPage.module.scss";

function OrderProductPage() {

  return (
    <div className={classes.container}>
      <Breadcrumbs />
      <h1 className={classes.title}>Мои заказы</h1>
      <OrderProductContent/>
    </div>
  );
}

export default OrderProductPage;