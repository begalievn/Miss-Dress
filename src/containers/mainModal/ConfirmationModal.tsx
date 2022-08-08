import React, { FC, useEffect, useState } from "react";

import { userStateToogle } from "../../store/reducers/AuthorizationUserSlice";

import { AddModalChoise, openModal, textErrorNumber } from "../../store/reducers/ModalSlice";
import { AuthorizationAPI } from "../../store/services/AuthorizationApi";
import { UserApi } from "../../store/services/UserApi";
import { useAppDispatch, useAppSelector } from "../../utils/app/hooks";


import style from "./ModalRegistration.module.scss";
import SuccessVerify from "./SuccessVerify";
import TimerBtn from "./timerBtn/TimerBtn";

interface iConfirmModal {
  title: string
}

const ConfirmationModal: FC<iConfirmModal> = ({ title }) => {

  const textError = useAppSelector((state) => state.ModalSlice.textError);

  const [sendActivatedCode, { }] = AuthorizationAPI.useSendActivatedCodeMutation();
  const userId = useAppSelector((state) => state.AuthorizationUserSlice.userIdForBack);
  const phoneNumber = useAppSelector((state) => state.AuthorizationUserSlice.phoneNumber);
  const [updateNumber,{ data, isLoading }] = UserApi.useUpdateNumberMutation();
  const dispatch = useAppDispatch();

  const [value, setValue] = useState("");

  const successFunc = () => {

    let data = {
      code: value,
      userId
    };

    let dataEditNumber={
      phoneNumber: phoneNumber,
      code:value
    };


    if (!value) {
      dispatch(textErrorNumber("Вы не ввели код подтверждения"));
    }else if (title === "Смена номера"){

      updateNumber(dataEditNumber).then((response)=>{
        dispatch(AddModalChoise("successProfile"));
      }).catch(e=>{
        dispatch(textErrorNumber("Неверный код подтверждения"));
      })
      dispatch(AddModalChoise("successProfile"));
    } else  {
      sendActivatedCode(data).then((response: any) => {
        
        localStorage.setItem("accessToken", JSON.stringify(response.data.result.token.accessToken));
        localStorage.setItem("refreshToken", JSON.stringify(response.data.result.token.refreshToken));
        switch (title) {
        case "Вход":
          dispatch(openModal(false));
          dispatch(userStateToogle(true));
          break;
        case "Регистрация":
          dispatch(AddModalChoise("successVerify"));
          dispatch(userStateToogle(true));
          break;
        default:
          break;
        }
      }).catch((e) => {
        dispatch(textErrorNumber("Неверный код подтверждения"));
      });
    } 

  };

  useEffect(() => {
    return () => {
      dispatch(textErrorNumber(""));
    };
  }, []);


  return (
    <>
      <div className={style.text} >
        <h2>{title}</h2>
        <input type="text" onChange={(e) => setValue(e.target.value)} placeholder="Введите код подтверждения" />
        <button onClick={() => successFunc()} >Подтвердить</button>
        <div className={style.text_sms} >Не пришло SMS?</div>
        <TimerBtn />
        <div className={style.text_error_auth}>{textError}</div>
      </div>

    </>
  );


};

export default ConfirmationModal;