import React, { useState } from "react";

import Logo from "../../components/logo/Logo";

import hero from "../../assets/profile/hero.png";

import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

import style from "./ProfilePage.module.scss";

import { useAppDispatch } from "../../utils/app/hooks";
import { AddModalChoise, openModal } from "../../store/reducers/ModalSlice";
import { UserApi } from "../../store/services/UserApi";
import LoaderCircular from "../../components/loader-circular/LoaderCircular";

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  const ProfileData = {
    name: "Нурс",
    surname: "Бегалиев",
    phoneNumber: "+996702702702",
  };

  const editNumber = () => {
    dispatch(openModal(true));
    dispatch(AddModalChoise("numberСhange"));
  };

  let { data: dataMe, isLoading } = UserApi.useGetMeQuery(1);


  return (
    <div className={style.container}>
      <Breadcrumbs />
      {isLoading ? (
        <LoaderCircular />
      ) : (
        <div className={style.content}>
          <div className={style.left_block}>
            <div className={style.logo_block}>
              <Logo />
            </div>
            <div className={style.heroImage}>
              <img src={hero} alt="" />
            </div>
          </div>
          <div className={style.right_block}>
            <h3>Профиль</h3>
            <input
              type="text"
              placeholder="Имя"
              name="name"
              disabled
              value={dataMe.result.firstName}
            />
            <input
              type="text"
              placeholder="Фамилия"
              name="surname"
              disabled
              value={dataMe.result.lastName}
            />
            <input
              type="text"
              placeholder="Номер телефона"
              name="phoneNumber"
              disabled
              value={dataMe.result.phoneNumber}
            />
            <button className={style.btnEdit} onClick={() => editNumber()}>
              Изменить номер
            </button>
            <h3> Адрес доставки</h3>
            <input type="text" placeholder="Страна" />
            <input type="text" placeholder="Город" />
            <button className={style.btnSave}>Сохранить</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
