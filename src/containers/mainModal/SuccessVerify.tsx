import React, { FC } from "react";

import { openModal } from "../../store/reducers/ModalSlice";

import { useAppDispatch } from "../../utils/app/hooks";

import style from "./ModalRegistration.module.scss";

export interface ISucces {
  children: React.ReactNode
}

const SuccessVerify:FC<ISucces> = ({children}) => {




  return (
    <div className={style.text}>
      {children}
    </div>
  );
};

export default SuccessVerify;