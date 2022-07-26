import React, { useState } from "react";

import { AddModalChoise } from "../../store/reducers/ModalSlice";
import { useAppDispatch, useAppSelector } from "../../utils/app/hooks";
import { checkValidation } from "../../utils/helpers/authorization";

import ConfirmationModal from "./ConfirmationModal";

import style from "./ModalRegistration.module.scss";

const NumberСhange = () => {
  const [valueNumber, setValueNumber] = useState("");


  const dispatch = useAppDispatch();
  const textError = useAppSelector(state=>state.ModalSlice.textError);

  const validationRegistr = useAppSelector((state) => state.ModalSlice.validationNumber);


  return (
    <>
      {validationRegistr ? <div className={style.text}>
        <h2>Смена номера</h2>
        <input type="text" placeholder="Указать новый номер" value={valueNumber} onChange={(e) => setValueNumber(e.target.value)} />
        <button onClick={() => dispatch(checkValidation(valueNumber))}>Подтвердить</button>
        <div className={style.text_error}>{textError}</div>
      </div> :
        <ConfirmationModal title="Смена номера" />
      }
    </>
  );
};

export default NumberСhange;