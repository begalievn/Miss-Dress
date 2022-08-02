import React from 'react';

import HowOrderContent from "./component/howOrderContent/HowOrderContent";

import classes from "./howOrderPage.module.scss";

function HowOrderPage() {
  return (
    <section className={classes.container}>     
      <h3 className={classes.header}>Как оформить заказ?</h3>
      <hr className={classes.headerLine} />
      <HowOrderContent />
    </section>
  );
}

export default HowOrderPage