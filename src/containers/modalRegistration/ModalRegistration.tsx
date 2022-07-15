import React, { useState } from "react";

import Logo from "../../components/logo/Logo";

import check from "../../assets/header/check.svg";

import style from "./ModalRegistration.module.scss";


const ModalRegistration = () => {
  const [validation, setValidation] = useState(true);
  const [checkState, setCheckState] = useState(false);
  return (
    <div className={style.back}>
      <div className={style.container}>
        <div className={style.hero}>
          <Logo />
        </div>

        {validation ? (
          <>
            <div className={style.text}>
              <h2>Регистрация</h2>
              <input type="text" placeholder="Имя" />
              <input type="text" placeholder="Фамилия" />
              <input type="text" placeholder="Номер телефона" />
            </div>

            <div className={style.validation_text} >
              <div className={style.validation_check} onClick={() => setCheckState(!checkState)}>
                {checkState ? <img src={check} alt="" /> : null}
              </div>
              <p>Я согласен с условиями публичной оферты</p>
            </div>
            <div className={style.text}>
              <button onClick={() => setValidation(!validation)}>Продолжить</button>
            </div>
          </>
        ) : (
          <div className={style.text} >
            <h2>Регистрация</h2>
            <input type="text" placeholder="Введите код подтверждения" />
            <button >Подтвердить</button>
            <div className={style.text_sms} >Не пришло SMS?</div>
            <button>Отправить снова</button>
          </div>)}
      </div>
    </div>
  );
};

export default ModalRegistration;