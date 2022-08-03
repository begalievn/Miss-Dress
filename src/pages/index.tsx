import React from "react";
import { Route, Routes } from "react-router-dom";

import AboutUsPage from "./aboutUsPage/AboutUsPage";
import ContactsPage from "./contactsPage/ContactsPage";
import DeliveryPage from "./deliveryPage/DeliveryPage";
import MainPage from "./mainPage/MainPage";
import NewsPage from "./newsPage/NewsPage";
import CategoryPage from "./categoryPage/CategoryPage";
import ErrorPage from "./errorPage/ErrorPage";
import ShoppingCartPage from "./shoppingCartPage/ShoppingCartPage";
import ProductIdPage from "./productIdPage/ProductIdPage";
import CollectionPage from "./collection/CollectionPage";
import CollectionPagesContent from "./collectionPagesAll/CollectionPagesContent";
import Test from "./test/Test";
import ProfilePage from "./profilePage/ProfilePage";
import OrderPage from "./ordersPage/OrderPage";
import PublicOfferPage from "./publicOfferPage/PublicOfferPage";
import HowOrderPage from "./howOrderPage/HowOrderPage";
import SearchPage from "./searchPage/SearchPage";
import PaymentPage from "./paymentPage/PaymentPage";
import RequisitePage from "./requisitePage/RequisitePage";
import FaqPage from "./faqPage/FaqPage";
import ReturnProduct from "./returnProduct/ReturnProduct";

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
    {
      link: "order",
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
      link: `search/name=:name`,
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
      link: `Faq`,
      element: <FaqPage />,
      id: 20,
    },
    {
      link: `return-product`,
      element: <ReturnProduct />,
      id: 21,
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
