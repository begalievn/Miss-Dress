import React, { useEffect, useState } from "react";

import Logo from "../../components/logo/Logo";

import { useAppDispatch } from "../../utils/app/hooks";
import { openModal, validationNumber } from "../../store/reducers/ModalSlice";

import style from "./ModalRegistration.module.scss";
import ModalRegistration from "./ModalRegistration";
import ModalAuthorization from "./ModalAuthorization";
import ModalChoice from "./ModalChoice";


const MainModal = () => {

  const dispatch = useAppDispatch();

  const modalRegistrClose = (e: any) => {
    if (e.target.id === "closeModalMain") {

      dispatch(openModal(false));
      dispatch(validationNumber(true));
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo({ top: 0, left: 0 });
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);


  return (
    <div id="closeModalMain" onClick={(e) => modalRegistrClose(e)} className={style.back}>
      <div className={style.container}>
        <div className={style.hero}>
          <Logo />
        </div>
        <ModalChoice />

      </div>
    </div>
  );
};

export default MainModal;