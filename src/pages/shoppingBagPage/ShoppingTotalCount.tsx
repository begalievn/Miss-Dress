import React from 'react';
import style from "./shoppingBag.module.scss";


const ShoppingTotalCount = () => {
  return (
    <div className={style.totalCount}> 
    <h4>Итого</h4>
    <div className={style.line}></div>
    <div className={style.total_count_item}> <span>Общая сумма</span> <span>22500 с.</span></div> 
    <div className={style.total_count_item}> <span>Скидка</span> <span>4530 с.</span></div> 
    <div className={style.total_count_item}> <span>Итог</span> <span>17970 с.</span></div> 
    <div className={style.line}></div>
    <button>Оформить заказ</button>
  </div>
  );
};

export default ShoppingTotalCount;