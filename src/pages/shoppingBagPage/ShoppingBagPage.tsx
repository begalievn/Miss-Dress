import React from "react";

import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

import style from "./shoppingBag.module.scss";
import ShoppingBagItem from "./shoppingBagItem/ShoppingBagItem";
import ShoppingTotalCount from "./ShoppingTotalCount";
const ShoppingBagPage = () => {
  return (
    <div className={style.container}>
      <Breadcrumbs />
      <div className={style.main_flex} >

        <div className={style.ordering}>
          <h2>Оформление заказа</h2>
          <div className={style.line}></div>
          <div className={style.ordering_input}>
            <input type="text" placeholder="Ваше имя" />
            <input type="text" placeholder="Ваша фамилия" />
            <input type="text" placeholder="Номер телефона" />
            <input type="text" placeholder="Страна" />
            <input type="text" placeholder="Город" />
            <button>Сохранить</button>
          </div>
        </div>
         <div className={style.shoppingPC}><ShoppingTotalCount/></div>
      </div>
      <h2>Состав Заказа</h2>
      <div>
        <ShoppingBagItem/>
      </div>
      <div className={style.shoppingMobile}><ShoppingTotalCount/></div>
    </div>
  );
};

export default ShoppingBagPage;