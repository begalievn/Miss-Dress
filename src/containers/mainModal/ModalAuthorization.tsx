import React, { FC, useState } from "react";

import ConfirmationModal from "./ConfirmationModal";

import style from "./ModalRegistration.module.scss";

interface IModalAuthorization {
  setmodalOption: (modalOption: boolean) => void;
}

const ModalAuthorization: FC<IModalAuthorization> = ({ setmodalOption }) => {
  const [valueNumber, setValueNumber] = useState("");

  const [validationRegistr, setValidationRegistr] = useState(true);


  const [textError, setTextError] = useState("");


  const checkValidation = (valueNumber: string) => {
    let regExp = /^0\d{9}$/;
    if (regExp.test(valueNumber)) {
      setValidationRegistr(!validationRegistr);

      
    }else{
      setTextError("Введите корректный номер телефона");
      setTimeout(() => {
        setTextError("");
        setValueNumber("");
      }, 2000);
    }
  };


  return (
    <>
      {validationRegistr ? <div className={style.text}>
        <h2>Вход</h2>
        <input type="text" placeholder="Введите номер телефона" value={valueNumber} onChange={(e) => setValueNumber(e.target.value)} />
        <button onClick={() => checkValidation(valueNumber)}>Войти</button>
        <div className={style.registration_text} onClick={() => setmodalOption(false)} >Зарегистрироваться</div>
        <div className={style.text_error}>{textError}</div>
      </div> :
        <ConfirmationModal title="Вход" />
      }

    </>
  );
};

export default ModalAuthorization;