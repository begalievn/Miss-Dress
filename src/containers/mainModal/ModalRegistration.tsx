import React, { useState } from "react";

import check from "../../assets/header/check.svg";

import ConfirmationModal from "./ConfirmationModal";

import style from "./ModalRegistration.module.scss";


const ModalRegistration = () => {


  const [validationRegistr, setValidationRegistr] = useState(true);
  const [checkState, setCheckState] = useState(false);

  return (

    <>
      {
        validationRegistr ? (
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
              <button onClick={() => setValidationRegistr(!validationRegistr)}>Продолжить</button>
            </div>
          </>
        ) : (
          <ConfirmationModal title = "Регистрация"/>)}
    </>
  );
};

export default ModalRegistration;