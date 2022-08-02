import React from 'react';

import { ICollectType } from "../../../../utils/types/typesHowOrder";

import HowOrderImage from "../howOrderImage/HowOrderImage";

import classes from "./howOrderContent.module.scss";


const paymentMethod:ICollectType[] = [
  {
    text: "Оформить на сайте",
  },
  {
    text: "По телефону",
  },
  {
    text: "По Whatsapp",
  },
  {
    text: "По Telegram",
  }
];

const instructions:ICollectType[] = [
  {
    text: "1. Добавить желаемое количество товаров в корзину. Для проверки количества и наименований товаров перейти в корзину",
  },
  {
    text: "2. Нажать оформить заказ",
  },
  {
    text: "3. Ввести ваш контактный номер телефона (на этот номер придет смс уведомление о номере вашего заказа и суммой к оплате)",
  },
  {
    text: "4. Ввести ФИО получателя",
  },
  {
    text: "5. Указать город и адрес",
  },
  {
    text: "6. Выбрать удобный способ доставки",
  },
  {
    text: "7. Выбрать удобный способ оплаты",
  },
  {
    text: "8. Дать согласие на условия политики возврата, доставки, оплаты.",
  },
  {
    text: "9. Нажать оформить заказ.",
  }
];

function howOrderContent() {

  return (
    <div className={classes.content}>
      <div className={classes.mainContent}>
        <p className={classes.instructionItem}>Оформить заказ вы можете:</p>
        <ul className={classes.mainList}>
          {paymentMethod.map((item:ICollectType, index:number)=> {
            return (
              <li key={index} className={classes.instructionItem}>{item.text}</li>
            );
          })}    
        </ul>
      </div>

      <div className={classes.instruction}>
        <p className={classes.instructionItem}>Для оформления заказа на сайте вам необходимо:</p>
        <ol className={classes.instructionList}>
          {instructions.map((item:ICollectType, index:number) => {
            return( 
              <div key={index}>
                {
                  index === 0 
                    ? <li className={classes.instructionItem}>
                      {item.text}
                      <HowOrderImage /> 
                    </li>
                    : <li className={classes.instructionItem}>{item.text}</li>
                }
              </div>
            );
          })}
        </ol>
      </div>
    </div>  
  );
}

export default howOrderContent;