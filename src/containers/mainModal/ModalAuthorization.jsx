import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import jwt_decode from "jwt-decode";

import {useNavigate} from "react-router-dom";

import {addUserId, userStateToogle} from "../../store/reducers/AuthorizationUserSlice";

import {
  AddModalChoise, closeAll,
  textErrorNumber,
  validationNumber,
} from "../../store/reducers/ModalSlice";
import { AuthorizationAPI } from "../../store/services/AuthorizationApi";

import { useAppDispatch, useAppSelector } from "../../utils/app/hooks";
import { checkValidation } from "../../utils/helpers/authorization";

import ConfirmationModal from "./ConfirmationModal";

import style from "./ModalRegistration.module.scss";

const ModalAuthorization= () => {
  const [valueNumber, setValueNumber] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const textError = useAppSelector((state) => state.ModalSlice.textError);

  const [authorizationUser, { isLoading: loginLoading, isError}] =
    AuthorizationAPI.useAuthorizationUserMutation();

  const [getActivatedCode, {}] = AuthorizationAPI.useGetActivatedCodeMutation();

  const validationRegistr = useAppSelector(
    (state) => state.ModalSlice.validationNumber
  );
  
  console.log("error", isError);
  
  const sendNumberPhone = (valueNumber) => {
    let regExp = /^\+996\d{9}$/;

    if (regExp.test(valueNumber)) {
      authorizationUser(valueNumber).then((response) => {
        let id = response.data.result.id;
        dispatch(addUserId(id));

        getActivatedCode(id).then((response) => {
          console.log(response.data.result.code);
        });
        dispatch(validationNumber(false));
      }).catch(e=>{
        console.log("ошибка",e);
      });
    } else {
      dispatch(textErrorNumber("Неверно заполнен логин или пароль"));
    }
  };
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = async (data) => {
    console.log(data);
    const response = await authorizationUser(data);
    console.log("response", response?.data?.data);
    
    if(response?.data) {
      localStorage.setItem("accessToken", response?.data?.data);
      dispatch(userStateToogle(true));
      dispatch(closeAll());
      navigate('/books');
    }
    if(isError) {
      console.log("Error occured");
    }
  };

  

  return (
    <>
      {validationRegistr ? (
        <div className={style.text}>
          <h2 >Вход</h2>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Логин"
                {...register("username")}
              />
              <input
                type="password"
                placeholder="Пароль"
                {...register("password")}
              />
              <div className={style.text_error}>{isError && "Неверно заполнен логин или пароль"}</div>
              <button type="submit">Войти</button>
            </form>
          </div>
        </div>
      ) : (
        <ConfirmationModal title="Вход" />
      )}
    </>
  );
};

export default ModalAuthorization;
