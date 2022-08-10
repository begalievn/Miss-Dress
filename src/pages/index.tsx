

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
import AdminCollectionById from "./adminPage/components/adminPageGoods/components/adminCollectionById/AdminCollectionById";
import AdminProductById from "./adminPage/components/adminPageGoods/components/adminProductById/AdminProductById";

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
      link: "/news/:id",
      element: <NewsPage edit={false} />,
      id: 5,
    },
    {
      link: "/contacts",
      element: <ContactsPage />,
      id: 6,
    },
    {
      link: "*",
      element: <ErrorPage />,
      id: 7,
    },
    {
      link: "/category/:productId",
      element: <ProductIdPage />,
      id: 8,
    },
    {
      link: "/collection/:collection",
      element: <CollectionPagesContent />,
      id: 10,
    },
    {
      link: "/collection/:id/:collection",
      element: <CollectionCategory />,
      id: 11,
    },
    {
      link: "shopping",
      element: <ShoppingCartPage />,
      id: 12,
    },
    {
      link: "profile",
      element: <ProfilePage />,
      id: 13,
    },
    {
      link: "order/",
      element: <OrderPage />,
      id: 14,
    },
    {
      link: "public-offer",
      element: <PublicOfferPage />,
      id: 15,
    },
    {
      link: "how-order",
      element: <HowOrderPage />,
      id: 16,
    },
    {
      link: "search/name=:name",
      element: <SearchPage />,
      id: 17,
    },
    {
      link: "payment",
      element: <PaymentPage />,
      id: 18,
    },
    {
      link: "requisite",
      element: <RequisitePage />,
      id: 19,
    },
    {
      link: "Faq",
      element: <FaqPage />,
      id: 20,
    },
    {
      link: "return-product",
      element: <ReturnProduct />,
      id: 21,
    },
    {
      link: "order/:id",
      element: <OrderProductPage />,
      id: 22,
    },
    {
      link: "favorites",
      element: <FavoritePage />,
      id: 23,
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
    {
      link: "/collection/:collection",
      element: <AdminCollectionById  />,
      id: 33,
    },
    {
      link: "product/:id",
      element: <AdminProductById  />,
      id: 34,
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
