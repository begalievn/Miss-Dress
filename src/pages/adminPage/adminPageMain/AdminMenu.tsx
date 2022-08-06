import React from "react";

import ContentAdminMain from "./components/ContentAdminMain";

import {
  adIcon,
  commentsIcon,
  dashboardIcon,
  productsIcon,
  salesIcon,
  shoppingBagIcon,
  userIcon,
} from "../../../assets/adminPage/adminPageIcons";

import Logo from "../../../components/logo/Logo";

import { Link } from "react-router-dom";

import classes from "./adminPageMain.module.scss";

const AdminMenu = () => {
  const info = [
    {
      title: "Dashboard",
      image: dashboardIcon,
      route: "/dashboard",
    },
    {
      title: "Пользователи",
      image: userIcon,
      route: "/users",
    },
    {
      title: "Товары",
      image: productsIcon,
      route: "/goods",
    },
    {
      title: "Продажи",
      image: salesIcon,
      route: "/sales",
    },
    {
      title: "Корзина",
      image: shoppingBagIcon,
      route: "/shoppingBag",
    },
    {
      title: "Реклама",
      image: adIcon,
      route: "/ad",
    },
    {
      title: "Чат",
      image: commentsIcon,
      route: "/chat",
    },
  ];

  return (
    <div>
      <div className={classes.container_parent}>
        <div className={classes.logo}>
          <Link to={"/admin"}>
            <Logo />
          </Link>
          <div className={classes.logo_routes}>
            {info.map((item, index) => (
              <ContentAdminMain
                key={index}
                title={item.title}
                image={item.image}
                route={item.route}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;
