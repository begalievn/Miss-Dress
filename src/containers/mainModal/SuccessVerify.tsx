import React, { FC, useEffect } from "react";

import { openModal } from "../../store/reducers/ModalSlice";
import { UserApi } from "../../store/services/UserApi";

import { useAppDispatch } from "../../utils/app/hooks";

import style from "./ModalRegistration.module.scss";

export interface ISucces {
  children: React.ReactNode;
}

const SuccessVerify: FC<ISucces> = ({ children }) => {
  const [getMe] = UserApi.useLazyGetMeQuery();
  useEffect(() => {
    getMe(1);
  }, []);

  return <div className={style.text}>{children}</div>;
};

export default SuccessVerify;
