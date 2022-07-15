import React, { FC, useState } from "react";

import { openModal } from "../../store/reducers/ModalSlice";
import { useAppDispatch } from "../../utils/app/hooks";


import style from "./ModalRegistration.module.scss";
import SuccessVerify from "./SuccessVerify";
import TimerBtn from "./timerBtn/TimerBtn";

interface iConfirmModal {
  title: string
}

const ConfirmationModal: FC<iConfirmModal> = ({ title }) => {


  const [success, setSuccess] = useState(true);
  const dispatch = useAppDispatch();

  const successFunc = () => {
    if (title === "Регистрация") {
      setSuccess(false);
    } else {
      dispatch(openModal(false));
    }
  };

  return (
    <>
      {success ? <div className={style.text} >
        <h2>{title}</h2>
        <input type="text" placeholder="Введите код подтверждения" />
        <button onClick={() => successFunc()} >Подтвердить</button>
        <div className={style.text_sms} >Не пришло SMS?</div>
        <TimerBtn />
      </div> : <>
        {(title === "Регистрация") ? <SuccessVerify /> : null}
      </>

      }

    </>
  );


};

export default ConfirmationModal;