import React from "react";

import AnnouncementOutlinedIcon from "@mui/icons-material/AnnouncementOutlined";

import { Link } from "react-router-dom";

import ContentAdminMain from "../../ContentAdminMain";

import {
  adIcon,
  commentsIcon,
  dashboardIcon,
  productsIcon,
  salesIcon,
  shoppingBagIcon,
  userIcon,
  authorIcon,
  bookIcon
} from "../../../../../assets/adminPage/adminPageIcons";

import Logo from "../../../../../components/logo/Logo";

import classes from "../../../adminPageMain.module.scss";

const AdminMenu = () => {
  const info = [
    // {
    //   title: "Dashboard",
    //   image: dashboardIcon,
    //   route: "/dashboard",
    // },
    {
      title: "Пользователи",
      image: userIcon,
      route: "/users",
    },
    {
      title: "Книги",
      image: bookIcon,
      route: "/books",
    },
    // {
    //   title: "Продажи",
    //   image: salesIcon,
    //   route: "/sales",
    // },
    // {
    //   title: "Корзина",
    //   image: shoppingBagIcon,
    //   route: "/shoppingBag",
    // },
    {
      title: "Авторы",
      image: authorIcon,
      route: "/authors",
    },
    // {
    //   title: "Чат",
    //   image: commentsIcon,
    //   route: "/chat",
    // },
    // {
    //   title: "Новости",
    //   image: "https://cdn-icons-png.flaticon.com/512/2258/2258840.png",
    //   route: "/news",
    // },
  ];

  return (
    <div className={classes.box}>
      <div className={classes.logo}>
        <Link to={"/"}>
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
        <button>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_362_878)">
              <path
                d="M7.58333 23.8333H5.41667C4.55471 23.8333 3.72806 23.4909 3.11857 22.8814C2.50908 22.2719 2.16667 21.4453 2.16667 20.5833V5.41667C2.16667 4.55471 2.50908 3.72806 3.11857 3.11857C3.72806 2.50908 4.55471 2.16667 5.41667 2.16667H7.58333C7.87065 2.16667 8.1462 2.05253 8.34937 1.84937C8.55253 1.6462 8.66667 1.37065 8.66667 1.08333C8.66667 0.796016 8.55253 0.520465 8.34937 0.317301C8.1462 0.114137 7.87065 0 7.58333 0L5.41667 0C3.98061 0.00172018 2.60385 0.572955 1.5884 1.5884C0.572955 2.60385 0.00172018 3.98061 0 5.41667L0 20.5833C0.00172018 22.0194 0.572955 23.3961 1.5884 24.4116C2.60385 25.427 3.98061 25.9983 5.41667 26H7.58333C7.87065 26 8.1462 25.8859 8.34937 25.6827C8.55253 25.4795 8.66667 25.204 8.66667 24.9167C8.66667 24.6293 8.55253 24.3538 8.34937 24.1506C8.1462 23.9475 7.87065 23.8333 7.58333 23.8333Z"
                fill="#372E24"
              />
              <path
                d="M24.9163 11.9166L7.82458 11.9513C7.91959 11.7748 8.03843 11.6122 8.17774 11.4681L12.38 7.26588C12.4835 7.16595 12.566 7.04641 12.6228 6.91424C12.6795 6.78207 12.7094 6.63991 12.7107 6.49607C12.7119 6.35222 12.6845 6.20957 12.63 6.07643C12.5756 5.94329 12.4951 5.82234 12.3934 5.72062C12.2917 5.6189 12.1707 5.53846 12.0376 5.48399C11.9045 5.42952 11.7618 5.40211 11.618 5.40336C11.4741 5.40461 11.332 5.4345 11.1998 5.49127C11.0676 5.54805 10.9481 5.63058 10.8482 5.73405L6.64374 9.9363C5.83137 10.7489 5.375 11.8509 5.375 13C5.375 14.149 5.83137 15.251 6.64374 16.0636L10.846 20.2659C10.9459 20.3694 11.0655 20.4519 11.1976 20.5087C11.3298 20.5654 11.472 20.5953 11.6158 20.5966C11.7597 20.5978 11.9023 20.5704 12.0354 20.5159C12.1686 20.4615 12.2895 20.381 12.3913 20.2793C12.493 20.1776 12.5734 20.0566 12.6279 19.9235C12.6824 19.7904 12.7098 19.6477 12.7085 19.5039C12.7073 19.36 12.6774 19.2179 12.6206 19.0857C12.5638 18.9535 12.4813 18.834 12.3778 18.734L8.17558 14.5318C8.05433 14.4069 7.94849 14.268 7.86033 14.118L24.9163 14.0833C25.2036 14.0833 25.4792 13.9692 25.6824 13.766C25.8855 13.5628 25.9997 13.2873 25.9997 13C25.9997 12.7126 25.8855 12.4371 25.6824 12.2339C25.4792 12.0308 25.2036 11.9166 24.9163 11.9166Z"
                fill="#372E24"
              />
            </g>
            <defs>
              <clipPath id="clip0_362_878">
                <rect width="26" height="26" fill="white" />
              </clipPath>
            </defs>
          </svg>
            Выйти
        </button>
      </div>
    </div>
  );
};

export default AdminMenu;
