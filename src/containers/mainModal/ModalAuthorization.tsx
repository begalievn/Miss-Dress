import React, { FC, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../utils/app/hooks";
import { checkValidation } from "../../utils/helpers/authorization";

import ConfirmationModal from "./ConfirmationModal";

import style from "./ModalRegistration.module.scss";

interface IModalAuthorization {
  setmodalOption: (modalOption: boolean) => void;
}

const ModalAuthorization: FC<IModalAuthorization> = ({ setmodalOption }) => {
  const [valueNumber, setValueNumber] = useState("");


  const dispatch = useAppDispatch();
  const textError = useAppSelector(state=>state.ModalSlice.textError);

  const validationRegistr = useAppSelector((state) => state.ModalSlice.validationNumber);


  return (
    <>
      {validationRegistr ? <div className={style.text}>
        <h2>Вход</h2>
        <input type="text" placeholder="Введите номер телефона" value={valueNumber} onChange={(e) => setValueNumber(e.target.value)} />
        <button onClick={() => dispatch(checkValidation(valueNumber))}>Войти</button>
        <div className={style.registration_text} onClick={() => setmodalOption(false)} >Зарегистрироваться</div>
        <div className={style.text_error}>{textError}</div>
      </div> :
        <ConfirmationModal title="Вход" />
      }

    </>
  );
};

export default ModalAuthorization;