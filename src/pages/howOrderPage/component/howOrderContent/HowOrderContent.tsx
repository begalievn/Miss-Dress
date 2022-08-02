import React from 'react'
import HowOrderImage from '../howOrderImage/HowOrderImage'
import classes from './howOrderContent.module.scss'


function howOrderContent() {
  return (
    <div className={classes.content}>
      <div className={classes.mainContent}>
        <p>Оформить заказ вы можете 2 способами:</p>
        <ul className={classes.mainList}>
          <li>Оформить на сайте</li>
          <li>По телефону</li>
        </ul>
      </div>

      <div className={classes.instruction}>
        <p>Для оформления заказа на сайте вам необходимо:</p>
        <ol className={classes.instructionList}>
          <li> 
            <p>добавить желаемое количество товаров в корзину. 
            для проверки количества и наименований товаров перейти в корзину
            </p>
            <HowOrderImage />
          </li>
          <li>
            <p>Нажать оформить заказ</p>
          </li>
          <li>
            <p>Ввести ваш контактный номер телефона
              (на этот номер придет смс уведомление о номере вашего заказа и суммой к оплате)
            </p> 
          </li>
          <li>
            <p>Ввести ФИО получателя</p>
          </li>
          <li>
            <p>Указать город и адрес</p>
          </li>
          <li>
            <p>Выбрать удобный способ доставки</p>
          </li>
          <li>
            <p>Выбрать удобный способ оплаты</p>
          </li>
          <li>
            <p>Дать согласие на условия политики возврата, доставки, оплаты.</p>
          </li>
          <li>
            <p>Нажать оформить заказ.</p>
          </li>
        </ol>
      </div>






      
    </div>
    
  )
}

export default howOrderContent