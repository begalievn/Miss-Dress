import { Dispatch } from "@reduxjs/toolkit";

import {
  textErrorNumber,
  validationNumber,
} from "../../store/reducers/ModalSlice";

export interface IDispatch {
  payload: any;
  type: string;
}

export const checkValidation = (valueNumber: string) => {
  return (dispatch: Dispatch<IDispatch>) => {
    let regExp = /^\+996\d{9}$/;
    if (regExp.test(valueNumber)) {
      dispatch(validationNumber(false));
    } else {
      dispatch(textErrorNumber("Введите корректный номер телефона"));

      setTimeout(() => {
        dispatch(textErrorNumber(""));
      }, 3000);
    }
  };
};

export const parseJwt = () => {
  let token: any = localStorage.getItem("accessToken") || "{}";
  if(token) {
    token = JSON.parse(token);
  }
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};
