import React, { useState } from "react";

import Logo from "../../components/logo/Logo";

import { useAppDispatch } from "../../utils/app/hooks";
import { openModal, validationNumber } from "../../store/reducers/ModalSlice";

import style from "./ModalRegistration.module.scss";
import ModalRegistration from "./ModalRegistration";
import ModalAuthorization from "./ModalAuthorization";


const MainModal = () => {

  const [modalOption, setmodalOption] = useState(true);
  const dispatch = useAppDispatch();

  const modalRegistrClose = (e:any) => {
    if(e.target.id==="closeModalMain"){

      dispatch(openModal(false));
      dispatch(validationNumber(true));
    }

    
  };
  return (
    <div id="closeModalMain" onClick={(e) => modalRegistrClose(e)} className={style.back}>
      <div className={style.container}>
        <div className={style.hero}>
          <Logo />
        </div>
        {modalOption ? (<ModalAuthorization setmodalOption={setmodalOption} />) : (<ModalRegistration />)}
      </div>
    </div>
  );
};

export default MainModal;