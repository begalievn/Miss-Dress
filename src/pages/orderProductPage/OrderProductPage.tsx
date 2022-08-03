

import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

import OrderProductContent from "./component/OrderProductContent";

import classes from "./orderProductPage.module.scss";

function OrderProductPage() {
  return (
    <div className={classes.container}>
      <Breadcrumbs />
      <OrderProductContent/>
    </div>
  );
}

export default OrderProductPage;