
import React, { useEffect } from "react";

// import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

import HowOrderContent from "./component/howOrderContent/HowOrderContent";

import classes from "./howOrderPage.module.scss";

function HowOrderPage() {

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior:"smooth"});
  }, []);

  return (
    <section className={classes.container}>     
      {/* <Breadcrumbs /> */}
      <h3 className={classes.header}>Как оформить заказ?</h3>
      <hr className={classes.headerLine} />
      <HowOrderContent />
    </section>
  );
}

export default HowOrderPage;