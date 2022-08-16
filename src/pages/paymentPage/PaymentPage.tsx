
import { useEffect } from "react";

import PaymentContent from "./component/PaymentContent";

import classes from "./paymentPage.module.scss";

function PaymentPage() {

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior:"smooth"});
  }, []);

  return (
    <section className={classes.container}>     
      <h1 className={classes.header}>Способы и условия оплаты</h1>
      <p className={classes.headerText}>Мы позаботились о том, чтобы оплата покупки была доступна в той форме, 
        которую предпочитаете лично вы.
        Независимо от выбранной формы оплаты, расчет производится только в сомах.
      </p>
      <PaymentContent />
    </section>
  );
}

export default PaymentPage;