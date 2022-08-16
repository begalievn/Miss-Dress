/* eslint-disable jsx-a11y/anchor-has-content */
import { useEffect } from "react";

import classes from "./requisitePage.module.scss";

function RequisitePage() {

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior:"smooth"});
  }, []);

  return (
    <section>
      <div className={classes.container}>
        <div className={classes.requisiteContent}>
          <h3>Реквизиты:</h3>
          <p>ИП "Miss Dress"</p>
          <p>Адрес: Кыргызская Республика, г. Бишкек, улица Исанова 79</p>
          <p>ИНН: 10503199400070</p>
          <p>Контактный телефон Агента: 
            <a className={classes.requisiteLink} href="tel:+996712345678">+996712345678</a>
          </p>
          <p>Электронный адрес службы поддержки пользователей: 
            <a className={classes.requisiteLink} target={"_blank"} href="https://missdress@gmail.com" rel="noreferrer">missdress@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default RequisitePage;