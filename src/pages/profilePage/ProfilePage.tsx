import React, { useState } from "react";

import Logo from "../../components/logo/Logo";

import hero from "../../assets/profile/hero.png";

import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

import style from "./ProfilePage.module.scss";
import { useAppDispatch } from "../../utils/app/hooks";
import { AddModalChoise, openModal } from "../../store/reducers/ModalSlice";




const ProfilePage = () => {


  const dispatch = useAppDispatch()

  const ProfileData = {
    name: "Нурс",
    surname: "Бегалиев",
    phoneNumber: "+996702702702"
  }

  const editNumber =()=>{
    dispatch(openModal(true))
    dispatch(AddModalChoise("numberСhange"))
  }



  return (
    <div className={style.container} >
      <Breadcrumbs />
      <div className={style.content} >
        <div className={style.left_block}>
          <div className={style.logo_block}><Logo /></div>
          <div className={style.heroImage} ><img src={hero} alt="" /></div>
        </div>
        <div className={style.right_block}>
          <h3>Профиль</h3>
          <input type="text" placeholder="Имя" name="name" disabled value={ProfileData.name} />
          <input type="text" placeholder="Фамилия" name="surname" disabled value={ProfileData.surname} />
          <input type="text" placeholder="Номер телефона" name="phoneNumber" disabled value={ProfileData.phoneNumber} />
          <button className={style.btnEdit} onClick={()=>editNumber()}>Изменить номер</button>
          <h3> Адрес доставки</h3>
          <input type="text" placeholder="Страна" />
          <input type="text" placeholder="Город" />
          <button className={style.btnSave}>Сохранить</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;