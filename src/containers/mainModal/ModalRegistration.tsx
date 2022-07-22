import React, { useState } from "react";

import check from "../../assets/header/check.svg";
import { textErrorNumber } from "../../store/reducers/ModalSlice";
import { useAppDispatch, useAppSelector } from "../../utils/app/hooks";

import ConfirmationModal from "./ConfirmationModal";

import style from "./ModalRegistration.module.scss";


interface IInpVal {
  name: string,
  surname: string,
  tel:  string,
}


const ModalRegistration = () => {


  const [validationRegistr, setValidationRegistr] = useState(true);
  const [checkState, setCheckState] = useState(false);
  const [inputValue, setInputValue] = useState({
    name: "",
    surname: "",
    tel: "",
  });

  const textError = useAppSelector((state) => state.ModalSlice.textError);

  const dispatch = useAppDispatch();
  const handleInp = (e: any) => {
    let obj = {
      ...inputValue,
      [e.target.name]: e.target.value
    };
    setInputValue(obj);
  };

  const sendRequest = (inputValue: IInpVal) => {

    let regExp = /^0\d{9}$/;
   console.log( regExp.test(inputValue.tel));
   
    if (!inputValue.name) {
      dispatch(textErrorNumber("Заполните поле имя"));
    } else if (!inputValue.surname) {
      dispatch(textErrorNumber("Заполните поле Фамилия"));
    }else if(!regExp.test(inputValue.tel)){
      dispatch(textErrorNumber("Введите корректный номер телефона"));
    }else if(!checkState){
      dispatch(textErrorNumber("Вы не согласились с условиями оферты"));
    }else{
      setValidationRegistr(false);
      dispatch(textErrorNumber(""));
    }
  };


  return (

    <>
      {
        validationRegistr ? (
          <>
            <div className={style.text}>
              <h2>Регистрация</h2>
              <input type="text" onChange={(e) =>  handleInp(e)} name="name" placeholder="Имя" />
              <input type="text" onChange={(e) =>  handleInp(e)} name="surname" placeholder="Фамилия" />
              <input type="text" onChange={(e) =>  handleInp(e)} name="tel" placeholder="Номер телефона" />
            </div>

            <div className={style.validation_text} >
              <div className={style.validation_check} onClick={() => setCheckState(!checkState)}>
                {checkState ? <img src={check} alt="" /> : null}
              </div>
              <p>Я согласен с условиями публичной оферты</p>
            </div>
            <div className={style.text}>
              <button onClick={() => sendRequest(inputValue)}>Продолжить</button>
            </div>
            <div className={style.text_error_auth}>{textError}</div>
          </>
        ) : (
          <ConfirmationModal title="Регистрация" />)}
    </>
  );
};

export default ModalRegistration;