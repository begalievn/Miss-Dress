import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  closeAll,
  openBurgerMenu,
  openModal,
  openProfile,
} from "../../store/reducers/ModalSlice";

import burgerMenu from "../../assets/header/burgerMenu.svg";

import MainModal from "../mainModal/MainModal";

import Logo from "../../components/logo/Logo";

import { useAppDispatch, useAppSelector } from "../../utils/app/hooks";
import SearchMain from "../../components/searchMain/SearchMain";
import { openSearch } from "../../store/reducers/ModalSlice";
import user from "../../assets/header/user.svg";
import sign from "../../assets/header/sign-in.svg";

import style from "./Header.module.scss";
import HeaderBurgerMenu from "./HeaderBurgerMenu";
import { icons, pages } from "./constants";
import ProfileModal from "./ProfileModal/ProfileModal";

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const modal = useAppSelector((state) => state.ModalSlice.modalState);
  const modalSearch = useAppSelector((state) => state.ModalSlice.searchState);
  const burgerMenuModal = useAppSelector(
    (state) => state.ModalSlice.burgerMenu
  );
  const menuProfile = useAppSelector((state) => state.ModalSlice.menuProfile);
  const userState = useAppSelector(
    (state) => state.AuthorizationUserSlice.userState
  );

  const [animation, setAnimation] = useState("menuModalOpen");

  const location = useLocation();

  const [iconsArr, setIconsArr] = useState([...icons]);

  const modalFunc = (name: string) => {
    if (burgerMenuModal) {
      animationfunc(burgerMenuModal);
    }
    console.log("ooppeenn");
    let arr = iconsArr.map((icon) => {
      if (icon.class === "activeIcon") {
        return { ...icon, class: "" };
      } else if (icon.name === name) {
        return { ...icon, class: "activeIcon" };
      } else {
        return { ...icon, class: "" };
      }
    });
    setIconsArr(arr);

    switch (name) {
      case "search":
        dispatch(openSearch(!modalSearch));
        break;
      case "heart":
        navigate("/favorites");
        dispatch(closeAll());
        break;
      case "shopping":
        navigate("/shopping");
        dispatch(closeAll());
        break;
      case "sign":
        dispatch(openModal(!modal));
        break;
      case "user":
        dispatch(openProfile(!menuProfile));
        break;
      default:
        break;
    }
  };

  const animationfunc = (burgerMenuModal: boolean) => {
    if (!burgerMenuModal) {
      dispatch(openBurgerMenu(true));
      modalFunc("close");
    } else {
      setAnimation("menuModalClose");
      setTimeout(() => {
        dispatch(openBurgerMenu(false));
      }, 400);
    }
  };

  useEffect(() => {
    if (burgerMenuModal) {
      animationfunc(burgerMenuModal);
    }
    dispatch(closeAll());
  }, [location.pathname]);

  useEffect(() => {
    if (userState) {
      let obj = [...iconsArr];
      obj[3].url = user;
      obj[3].name = "user";
      obj[3].class = "";
      setIconsArr(obj);
    } else {
      let obj = [...iconsArr];
      obj[3].url = sign;
      obj[3].name = "sign";
      obj[3].class = "";
      setIconsArr(obj);
    }
  }, [userState]);

  useEffect(() => {
    if (userState) {
      let obj = [...iconsArr];
      obj[3].url = user;
      obj[3].name = "user";
      setIconsArr(obj);
    } else {
      let obj = [...iconsArr];
      obj[3].url = sign;
      obj[3].name = "sign";
      obj[3].class = "";
      setIconsArr(obj);
    }
  }, []);

  return (
    <>
      <div className={style.mainBlock}>
        <div className={style.container}>
          <div className={style.burgerMenu_logo}>
            <img
              src={burgerMenu}
              onClick={() => animationfunc(burgerMenuModal)}
              className={style.burgerMenu}
              alt=""
            />
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <ul className={style.mainBlock_navbar}>
            {pages.map((page) => (
              <Link to={page.link} key={page.id}>
                <li
                  className={
                    location.pathname === page.link ? style.activeNavbar : ""
                  }
                  onClick={() => modalFunc("close")}
                >
                  {page.name}
                </li>
              </Link>
            ))}
          </ul>
          <div className={style.icons}>
            {iconsArr.map((icon, index) => (
              <div className={style.shopping_img_count}>
                <img
                  src={icon.url}
                  onClick={() => modalFunc(icon.name)}
                  alt=""
                  className={style[icon.class]}
                />
                {icon.id === 2 ? <span>4</span> : null} {/* Favorites Count  */}
                {icon.id === 3 ? <span>7</span> : null} {/* Shopping Count */}
              </div>
            ))}
          </div>
        </div>
      </div>
      {modal ? <MainModal /> : null}
      {burgerMenuModal ? (
        <HeaderBurgerMenu animation={animation} setAnimation={setAnimation} />
      ) : null}
      {modalSearch ? <SearchMain /> : null}
      {menuProfile ? <ProfileModal /> : null}
    </>
  );
};

export default Header;
