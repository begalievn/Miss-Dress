import React from "react";

import { openModal } from "../../store/reducers/ModalSlice";

import { useAppDispatch } from "../../utils/app/hooks";

import style from "./ModalRegistration.module.scss";

const SuccessVerify = () => {

  const dispatch = useAppDispatch();

  const modalFunc = ()=>{

    dispatch(openModal(false));
    
  };

  return (
    <div className={style.text}>
      <p  className={style.success_text}>
        Поздравляем!
      </p>
      <p className={style.success_text}>Регистрация прошла успешно!</p>
      <button onClick={()=>modalFunc()} >Продолжить покупки</button>
    </div>
  );
};

export default SuccessVerify;