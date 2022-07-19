import React, { useState } from "react";

import Logo from "../../components/logo/Logo";

import style from "./ModalRegistration.module.scss";
import ModalRegistration from "./ModalRegistration";
import ModalAuthorization from "./ModalAuthorization";


const MainModal = () => {

  const [modalOption, setmodalOption] = useState(true);


  return (
    <div className={style.back}>
      <div className={style.container}>
        <div className={style.hero}>
          <Logo />
        </div>
        { modalOption ? (<ModalAuthorization setmodalOption={setmodalOption} />) : (<ModalRegistration/>)}
      </div>
    </div>
  );
};

export default MainModal;