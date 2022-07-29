import React from "react";

import { useAppDispatch, useAppSelector } from "../../utils/app/hooks";

import ModalAuthorization from "./ModalAuthorization";
import ModalRegistration from "./ModalRegistration";
import NumberСhange from "./NumberСhange";
import SuccessVerify from "./SuccessVerify";

import { openModal, validationNumber } from "../../store/reducers/ModalSlice";

import style from "./ModalRegistration.module.scss";


const ModalChoice = () => {

  const ModalChoiseState = useAppSelector((state) => state.ModalSlice.ModalChoise);

  const dispatch = useAppDispatch();

  switch (ModalChoiseState) {
  case "sign":
    return (
      <ModalAuthorization />
    );
  case "auth":
    return (
      <ModalRegistration />
    );
  case "numberСhange": 
    return (
      <NumberСhange />
    );
  case "successVerify":
    dispatch(validationNumber(true));
    return (
      <SuccessVerify>      
        <p  className={`${style.success_text} ${style.first_text}`}>
      Поздравляем!
        </p>
        <p className={style.success_text}>Регистрация прошла успешно!</p>
        <button onClick={()=>dispatch(openModal(false))} >Продолжить покупки</button></SuccessVerify >
    );
  case "successOrder":
    dispatch(openModal(true));
    return (
      <SuccessVerify>      
        <p  className={`${style.success_text} ${style.first_text}`}>
        Поздравляем!
        </p>
        <p className={style.success_text}>Ваш заказ успешно оформлен.</p>
        <p className={style.success_text}>В ближайшее время мы обязательно свяжемся с Вами!</p>
        <button onClick={()=>dispatch(openModal(false))} >Продолжить покупки</button></SuccessVerify >
    );
  case "successProfile":
    dispatch(validationNumber(true));
    return (
      <SuccessVerify>      
        <p  className={`${style.success_text} ${style.first_text}`}>
          Ваш профиль успешно сохранен!
        </p>
        <button onClick={()=>dispatch(openModal(false))} >Продолжить</button></SuccessVerify >
    );

  default:
    return(
      <div></div>
    );
  }

};

export default ModalChoice;