import React from "react";
import { Route, Routes } from "react-router-dom";

import AboutUsPage from "./aboutUsPage/AboutUsPage";
import ContactsPage from "./contactsPage/ContactsPage";
import DeliveryPage from "./deliveryPage/DeliveryPage";
import MainPage from "./mainPage/MainPage";
import NewsPage from "./newsPage/NewsPage";
import ProductPage from "./productsPage/ProductPage";
import ErrorPage from "./errorPage/ErrorPage";
import ShoppingCartPage from "./shoppingCartPage/ShoppingCartPage";
import ProductIdPage from "./productIdPage/ProductIdPage";
import CollectionPage from "./collection/CollectionPage";
import CollectionPagesContent from "./collectionPagesAll/CollectionPagesContent";
import Test from "./test/Test";
import ProfilePage from "./profilePage/ProfilePage";

const MainRoutes = () => {
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
      link: "/products",
      element: <ProductPage />,
      id: 4,
    },
    {
      link: "/news",
      element: <NewsPage />,
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
      link: "/products/:productId",
      element: <ProductIdPage />,
      id: 8,
    },
    {
      link: "/collection",
      element: <CollectionPage />,
      id: 9,
    },
    {
      link: "/collection/:id",
      element: <CollectionPagesContent />,
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
      link: "test",
      element: <Test />,
      id: 13,
    },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map(({ link, id, element }) => (
        <Route path={link} element={element} key={id} />
      ))}
    </Routes>
  );
};

export { MainRoutes };
