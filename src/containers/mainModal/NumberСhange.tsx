import React, { useEffect, useState } from "react";
import { addPhoneNumber } from "../../store/reducers/AuthorizationUserSlice";

import {
  AddModalChoise,
  textErrorNumber,
  validationNumber,
} from "../../store/reducers/ModalSlice";
import { AuthorizationAPI } from "../../store/services/AuthorizationApi";
import { UserApi } from "../../store/services/UserApi";
import { useAppDispatch, useAppSelector } from "../../utils/app/hooks";
import { checkValidation } from "../../utils/helpers/authorization";

import ConfirmationModal from "./ConfirmationModal";

import style from "./ModalRegistration.module.scss";

const NumberСhange = () => {
  const [valueNumber, setValueNumber] = useState("");
  const [editNumber, { data, isSuccess }] = UserApi.useEditNumberMutation();
  const [getActivatedCode, {}] = AuthorizationAPI.useGetActivatedCodeMutation();

  const dispatch = useAppDispatch();
  const textError = useAppSelector((state) => state.ModalSlice.textError);

  const validationRegistr = useAppSelector(
    (state) => state.ModalSlice.validationNumber
  );
  const userId = useAppSelector(
    (state) => state.AuthorizationUserSlice.userIdForBack
  );
  const sendEditNumber = (valueNumber: string) => {
    let regExp = /^\+996\d{9}$/;
    if (regExp.test(valueNumber)) {
      editNumber(valueNumber);
      dispatch(validationNumber(false));
      dispatch(addPhoneNumber(valueNumber));
    } else {
      dispatch(textErrorNumber("Введите корректный номер телефона"));
    }
  };
  useEffect(() => {
    if (isSuccess) {
      getActivatedCode(userId).then((response: any) => {
        console.log(response.data.result.code);
      });
    }
  }, [isSuccess]);

  return (
    <>
      {validationRegistr ? (
        <div className={style.text}>
          <h2>Смена номера</h2>
          <input
            type="text"
            placeholder="Указать новый номер"
            value={valueNumber}
            onChange={(e) => setValueNumber(e.target.value)}
          />
          <button onClick={() => sendEditNumber(valueNumber)}>
            Подтвердить
          </button>
          <div className={style.text_error}>{textError}</div>
        </div>
      ) : (
        <ConfirmationModal title="Смена номера" />
      )}
    </>
  );
};

export default NumberСhange;
