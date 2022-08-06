import React, { useState } from "react";

import check from "../../assets/header/check.svg";
import { addUserId } from "../../store/reducers/AuthorizationUserSlice";
import { textErrorNumber, validationNumber } from "../../store/reducers/ModalSlice";
import { AuthorizationAPI } from "../../store/services/AuthorizationApi";
import { useAppDispatch, useAppSelector } from "../../utils/app/hooks";

import ConfirmationModal from "./ConfirmationModal";

import style from "./ModalRegistration.module.scss";

interface IInpVal {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

const ModalRegistration = () => {
  // const [validationRegistr, setValidationRegistr] = useState(true);
  const [checkState, setCheckState] = useState(false);
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const validationRegistr = useAppSelector(
    (state) => state.ModalSlice.validationNumber
  );
  const textError = useAppSelector((state) => state.ModalSlice.textError);

  const dispatch = useAppDispatch();

  const [registrationNewUser] =
    AuthorizationAPI.useRegistrationNewUserMutation();



  const [getActivatedCode, {}] = AuthorizationAPI.useGetActivatedCodeMutation();

  const handleInp = (e: any) => {
    let obj = {
      ...inputValue,
      [e.target.name]: e.target.value,
    };
    setInputValue(obj);
  };

  const sendRequest = async (inputValue: IInpVal) => {
    let regExp = /^\+996\d{9}$/;

    if (!inputValue.firstName) {
      dispatch(textErrorNumber("Заполните поле имя"));
    } else if (!inputValue.lastName) {
      dispatch(textErrorNumber("Заполните поле Фамилия"));
    } else if (!regExp.test(inputValue.phoneNumber)) {
      dispatch(textErrorNumber("Введите корректный номер телефона"));
    } else if (!checkState) {
      dispatch(textErrorNumber("Вы не согласились с условиями оферты"));
    } else {
      await registrationNewUser(inputValue)
        .then((response: any) => {
          let id = response.data.result.user.id;
          dispatch(addUserId(id));

          getActivatedCode(id).then((response: any) => {
            console.log(response.data.result.code);
          });

          dispatch(validationNumber(false));   
          dispatch(textErrorNumber(""));
        })
        .catch((e) => {
          console.log("ошибка", e);
        });
    }
  };

  return (
    <>
      {validationRegistr ? (
        <>
          <div className={style.text}>
            <h2>Регистрация</h2>
            <input
              type="text"
              onChange={(e) => handleInp(e)}
              name="firstName"
              placeholder="Имя"
            />
            <input
              type="text"
              onChange={(e) => handleInp(e)}
              name="lastName"
              placeholder="Фамилия"
            />
            <input
              type="text"
              onChange={(e) => handleInp(e)}
              name="phoneNumber"
              placeholder="Номер телефона"
            />
          </div>

          <div className={style.validation_text}>
            <div
              className={style.validation_check}
              onClick={() => setCheckState(!checkState)}
            >
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
        <ConfirmationModal title="Регистрация" />
      )}
    </>
  );
};

export default ModalRegistration;
