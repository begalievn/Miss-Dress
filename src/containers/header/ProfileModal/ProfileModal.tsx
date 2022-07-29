import React from "react";
import { useNavigate } from "react-router-dom";
import { userStateToogle } from "../../../store/reducers/AuthorizationUserSlice";
import { openProfile } from "../../../store/reducers/ModalSlice";
import { useAppDispatch } from "../../../utils/app/hooks";

import { profileMenu } from "../constants";

import style from "./ProfileModal.module.scss";
const ProfileModal = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const profileEnter = (name: string) => {
    switch (name) {
    case "Профиль":
      navigate("/profile");
      break;
    case "Заказы":
      navigate("/orders");
      break;
    case "Выйти":
      dispatch(userStateToogle(false));
      dispatch(openProfile(false));
      localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      break;

    default:
      break;
    }
  };
  return (
    <div className={style.container}>
      <div className={style.mainProfile}> {profileMenu.map((item) => (
        <li key={item.id} onClick={() => profileEnter(item.name)}>{item.name}</li>
      ))}</div>
    </div>
  );
};

export default ProfileModal;