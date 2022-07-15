import React, {}from "react";
import { Link } from "react-router-dom";

import { openModal, validationNumber } from "../../store/reducers/ModalSlice";


import heart from "../../assets/header/heart.svg";
import search from "../../assets/header/search.svg";
import shopping from "../../assets/header/shopping-bag.svg";
import sign from "../../assets/header/sign-in.svg";
import user from "../../assets/header/user.svg";

import MainModal from "../mainModal/MainModal";

import Logo from "../../components/logo/Logo";

import { useAppDispatch, useAppSelector } from "../../utils/app/hooks";

import style from "./Header.module.scss";





const Header = () => {

  const dispatch = useAppDispatch();

  const modal = useAppSelector((state) => state.ModalSlice.modalState);


  const modalFunc = ()=>{
    dispatch(openModal(!modal));
    dispatch(validationNumber(true));
  };


  const pages = [
    { name: "Товары", link: "/products", id: 1 },
    { name: "О нас", link: "/about", id: 2 },
    { name: "Доставка", link: "/delivery", id: 3 },
    { name: "Контакты", link: "/contacts", id: 4 },
    { name: "Новости", link: "/news", id: 5 },
  ];





  return (
    <>
      <div className={style.mainBlock} >
        <div className={style.container}>
          <Link to="/">
            <Logo />
          </Link>
          <ul className={style.mainBlock_navbar}>
            {pages.map(page => (
              <Link to={page.link}>
                <li>{page.name}</li>
              </Link>
            ))}
          </ul>
          <div className={style.icons} >
            <img src={search} alt="" />
            <img src={heart} alt="" />
            <img src={shopping} alt="" />

            {true ? <img src={sign} alt="" onClick={() => modalFunc()} /> : <img src={user} alt="" />}

          </div>
        </div>
      </div>
      {modal ? <MainModal /> : null}
    </>
  );
};

export default Header;