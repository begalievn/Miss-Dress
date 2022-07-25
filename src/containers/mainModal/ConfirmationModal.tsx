import React, { FC, useState } from "react";
import { userStateToogle } from "../../store/reducers/AuthorizationUserSlice";

import { AddModalChoise, openModal, textErrorNumber } from "../../store/reducers/ModalSlice";
import { useAppDispatch, useAppSelector } from "../../utils/app/hooks";


import style from "./ModalRegistration.module.scss";
import SuccessVerify from "./SuccessVerify";
import TimerBtn from "./timerBtn/TimerBtn";

interface iConfirmModal {
  title: string
}

const ConfirmationModal: FC<iConfirmModal> = ({ title }) => {

  const textError = useAppSelector((state) => state.ModalSlice.textError);
  const [success, setSuccess] = useState(true);
  const dispatch = useAppDispatch();

  const [value, setValue] = useState("");

  const successFunc = () => {
    if(!value){
      dispatch(textErrorNumber("Вы не ввели код подтверждения"));
    }else if (title === "Вход") {
      dispatch(openModal(false));
      dispatch(textErrorNumber(""));
      dispatch(userStateToogle(true));
    } else {
      dispatch(AddModalChoise("successVerify"));
      dispatch(userStateToogle(true));
      dispatch(textErrorNumber(""));
    }
  };

  return (
    <>
      <div className={style.text} >
        <h2>{title}</h2>
        <input type="text" onChange={(e)=>setValue(e.target.value)} placeholder="Введите код подтверждения" />
        <button onClick={() => successFunc()} >Подтвердить</button>
        <div className={style.text_sms} >Не пришло SMS?</div>
        <TimerBtn />
        <div className={style.text_error_auth}>{textError}</div>
      </div> 

    </>
  );


};

export default ConfirmationModal;