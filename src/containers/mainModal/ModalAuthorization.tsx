import React, { FC, useState } from "react";
import { addUserId } from "../../store/reducers/AuthorizationUserSlice";

import {
  AddModalChoise,
  textErrorNumber,
  validationNumber,
} from "../../store/reducers/ModalSlice";
import { AuthorizationAPI } from "../../store/services/AuthorizationApi";

import { useAppDispatch, useAppSelector } from "../../utils/app/hooks";
import { checkValidation } from "../../utils/helpers/authorization";

import ConfirmationModal from "./ConfirmationModal";

import style from "./ModalRegistration.module.scss";

const ModalAuthorization: FC = () => {
  const [valueNumber, setValueNumber] = useState("");

  const dispatch = useAppDispatch();
  const textError = useAppSelector((state) => state.ModalSlice.textError);

  const [authorizationUser, {}] =
    AuthorizationAPI.useAuthorizationUserMutation();

    const [getActivatedCode, {}] = AuthorizationAPI.useGetActivatedCodeMutation();

  const validationRegistr = useAppSelector(
    (state) => state.ModalSlice.validationNumber
  );

  const sendNumberPhone = (valueNumber: string) => {
    let regExp = /^\+996\d{9}$/;
console.log(regExp.test(valueNumber));

    if (regExp.test(valueNumber)) {
      authorizationUser(valueNumber).then((response:any) => {
        console.log(response);
        let id = response.data.result.id;
        dispatch(addUserId(id));

        getActivatedCode(id).then((response: any) => {
          console.log(response.data.result.code);
        });
        dispatch(validationNumber(false));
      }).catch(e=>{
        console.log("ошибка",e);
        
      })
    } else {
      dispatch(textErrorNumber("Введите корректный номер телефона"));
    }
  };


 
  

  return (
    <>
      {validationRegistr ? (
        <div className={style.text}>
          <h2>Вход</h2>
          <input
            type="text"
            placeholder="Введите номер телефона"
            value={valueNumber}
            onChange={(e) => setValueNumber(e.target.value)}
          />
          <button onClick={() => sendNumberPhone(valueNumber)}>Войти</button>
          <div
            className={style.registration_text}
            onClick={() => dispatch(AddModalChoise("auth"))}
          >
            Зарегистрироваться
          </div>
          <div className={style.text_error}>{textError}</div>
        </div>
      ) : (
        <ConfirmationModal title="Вход" />
      )}
    </>
  );
};

export default ModalAuthorization;
