import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { parseJwt } from "../utils/helpers/authorization";

import AboutUsPage from "./aboutUsPage/AboutUsPage";
import ContactsPage from "./contactsPage/ContactsPage";
import DeliveryPage from "./deliveryPage/DeliveryPage";
import MainPage from "./mainPage/MainPage";
import NewsPage from "./newsPage/NewsPage";
import CategoryPage from "./categoryPage/CategoryPage";
import ErrorPage from "./errorPage/ErrorPage";
import ShoppingCartPage from "./shoppingCartPage/ShoppingCartPage";
import ProductIdPage from "./productIdPage/ProductIdPage";
import CollectionPagesContent from "./collectionPagesAll/CollectionPagesContent";
import ProfilePage from "./profilePage/ProfilePage";

import CollectionCategory from "./collectionPagesAll/components/CollectionCategory";

import OrderPage from "./ordersPage/OrderPage";
import PublicOfferPage from "./publicOfferPage/PublicOfferPage";
import HowOrderPage from "./howOrderPage/HowOrderPage";
import SearchPage from "./searchPage/SearchPage";
import PaymentPage from "./paymentPage/PaymentPage";
import RequisitePage from "./requisitePage/RequisitePage";
import FaqPage from "./faqPage/FaqPage";
import ReturnProduct from "./returnProduct/ReturnProduct";

import OrderProductPage from "./orderProductPage/OrderProductPage";
import FavoritePage from "./favoritePage/FavoritePage";

import AdminPageDashboard from "./adminPage/components/adminPageDashboard/AdminPageDashboard";

import AdminPageUsers from "./adminPage/components/adminPageUsers/AdminPageUsers";
import AdminPageGoods from "./adminPage/components/adminPageGoods/AdminPageGoods";
import AdminPageSales from "./adminPage/components/adminPageSales/AdminPageSales";
import AdminPageShopping from "./adminPage/components/adminPageShopping/AdminPageShopping";
import AdminPageAd from "./adminPage/components/adminPageAd/AdminPageAd";

import AdminPageChat from "./adminPage/components/adminPageChat/AdminPageChat";

// import AdminMenu from "./adminPage/AdminMenu";

import AdminPageMain from "./adminPage/AdminPageMain";

import AdminPageUser from "./adminPage/components/adminPageUser/AdminPageUser";

// import AuthorizationUserSlice from "../store/reducers/AuthorizationUserSlice";

const MainRoutes = () => {
  const validAdmin = parseJwt();
  let [isAdmin, setIsAdmin] = useState<boolean>(false);

  if (validAdmin?.role === "SUPER_ADMIN" || validAdmin?.role === "ADMIN") {
    isAdmin = true;
  } else {
    isAdmin = false;
  }

  console.log(validAdmin);

  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <MainPage />,
      id: 1,
    },
    {
      link: "/about",
      element: <AboutUsPage />,
      id: 2,
    },
    {
      link: "/delivery",
      element: <DeliveryPage />,
      id: 3,
    },
    {
      link: "/category",
      element: <CategoryPage />,
      id: 4,
    },
    {
      link: "category/:productID",
      element: <ProductIdPage />,
      id: 5,
    },
    {
      link: "/news/:id",
      element: <NewsPage edit={false} />,
      id: 6,
    },
    {
      link: "/contacts",
      element: <ContactsPage />,
      id: 7,
    },
    {
      link: "*",
      element: <ErrorPage />,
      id: 8,
    },

    {
      link: "/collection/:collection",
      element: <CollectionPagesContent />,
      id: 9,
    },
    {
      link: "/collection/:id/:collection",
      element: <CollectionCategory />,
      id: 10,
    },
    {
      link: "shopping",
      element: <ShoppingCartPage />,
      id: 11,
    },
    {
      link: "profile",
      element: <ProfilePage />,
      id: 12,
    },
    {
      link: "order/",
      element: <OrderPage />,
      id: 13,
    },
    {
      link: "public-offer",
      element: <PublicOfferPage />,
      id: 14,
    },
    {
      link: "how-order",
      element: <HowOrderPage />,
      id: 15,
    },
    {
      link: "search/name=:name",
      element: <SearchPage />,
      id: 16,
    },
    {
      link: "payment",
      element: <PaymentPage />,
      id: 17,
    },
    {
      link: "requisite",
      element: <RequisitePage />,
      id: 18,
    },
    {
      link: "Faq",
      element: <FaqPage />,
      id: 19,
    },
    {
      link: "return-product",
      element: <ReturnProduct />,
      id: 20,
    },
    {
      link: "order-product/:id",
      element: <OrderProductPage />,
      id: 21,
    },
    {
      link: "favorites",
      element: <FavoritePage />,
      id: 22,
    },
  ];

  const PRIVATE_ROUTES = [
    {
      link: "admin",
      element: <AdminPageMain />,
      id: 1,
    },
    {
      link: "dashboard",
      element: <AdminPageDashboard />,
      id: 2,
    },
    {
      link: "users",
      element: <AdminPageUsers />,
      id: 3,
    },
    {
      link: "goods",
      element: <AdminPageGoods />,
      id: 4,
    },
    {
      link: "sales",
      element: <AdminPageSales />,
      id: 5,
    },
    {
      link: "shoppingBag",
      element: <AdminPageShopping />,
      id: 29,
    },
    {
      link: "ad",
      element: <AdminPageAd />,
      id: 30,
    },
    {
      link: "chat",
      element: <AdminPageChat />,
      id: 31,
    },
    {
      link: "user",
      element: <AdminPageUser />,
      id: 32,
    },
  ];

  return (
    <Routes>
      {isAdmin ? (
        PRIVATE_ROUTES.map(({ link, id, element }) => (
          <Route path={link} element={element} key={id} />
        ))
      ) : (
        <Route path="*" element={<ErrorPage />} />
      )}

      {PUBLIC_ROUTES.map(({ link, id, element }) => (
        <Route path={link} element={element} key={id} />
      ))}
    </Routes>
  );
};

export { MainRoutes };
