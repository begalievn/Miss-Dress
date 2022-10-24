import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";


import MainPage from "./mainPage/MainPage";
import ErrorPage from "./errorPage/ErrorPage";




import AdminPageDashboard from "./adminPage/components/adminPageDashboard/AdminPageDashboard";

import AdminPageUsers from "./adminPage/components/adminPageUsers/AdminPageUsers";
import AdminPageGoods from "./adminPage/components/adminPageGoods/AdminPageGoods";
import AdminPageSales from "./adminPage/components/adminPageSales/AdminPageSales";
import AdminPageShopping from "./adminPage/components/adminPageShopping/AdminPageShopping";
import AdminPageAd from "./adminPage/components/adminPageAuthors/AdminPageAuthors";



import AdminPageMain from "./adminPage/AdminPageMain";

import AdminPageUser from "./adminPage/components/adminPageUser/AdminPageUser";
import AdminCollectionById from "./adminPage/components/adminPageGoods/components/adminCollectionById/AdminCollectionById";
import AdminProductById from "./adminPage/components/adminPageGoods/components/adminProductById/AdminProductById";
import AdminPopularProducts from "./adminPage/components/adminPageGoods/components/adminPopularProducts/AdminPopularProducts";
import AdminPageProduct from "./adminPage/components/adminPageShopping/components/AdminPageProduct";


// import AuthorizationUserSlice from "../store/reducers/AuthorizationUserSlice";

const AdminPageChat = React.lazy(
  () => import("../pages/adminPage/components/adminPageChat/AdminPageChat")
);

const MainRoutes = () => {
  // const validAdmin = parseJwt();
  const validAdmin: any = {role: "ADMIN"};
  let [isAdmin, setIsAdmin] = useState<boolean>(true);

  // if (validAdmin?.role === "SUPER_ADMIN" || validAdmin?.role === "ADMIN") {
  //   isAdmin = true;
  // } else {
  //   isAdmin = false;
  // }


  const SuspendedAdminPageChat = AdminPageChat;

  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <MainPage />,
      id: 1,
    },
    // {
    //   link: "/about",
    //   element: <AboutUsPage />,
    //   id: 2,
    // },
    // {
    //   link: "/delivery",
    //   element: <DeliveryPage />,
    //   id: 3,
    // },
    // {
    //   link: "/category",
    //   element: <CategoryPage />,
    //   id: 4,
    // },
    // {
    //   link: "category/:productID",
    //   element: <ProductIdPage />,
    //   id: 5,
    // },
    // {
    //   link: "/news/:id",
    //   element: <NewsPage edit={false} />,
    //   id: 6,
    // },
    // {
    //   link: "/contacts",
    //   element: <ContactsPage />,
    //   id: 7,
    // },
    // {
    //   link: "*",
    //   element: <ErrorPage />,
    //   id: 8,
    // },
    //
    // {
    //   link: "/collection/:collection",
    //   element: <CollectionPagesContent />,
    //   id: 9,
    // },
    // {
    //   link: "/collection/:id/:collection",
    //   element: <CollectionCategory />,
    //   id: 10,
    // },
    // {
    //   link: "shopping",
    //   element: <ShoppingCartPage />,
    //   id: 11,
    // },
    // {
    //   link: "profile",
    //   element: <ProfilePage />,
    //   id: 12,
    // },
    // {
    //   link: "order",
    //   element: <OrderPage />,
    //   id: 13,
    // },
    // {
    //   link: "public-offer",
    //   element: <PublicOfferPage />,
    //   id: 14,
    // },
    // {
    //   link: "how-order",
    //   element: <HowOrderPage />,
    //   id: 15,
    // },
    // {
    //   link: "search/name=:name",
    //   element: <SearchPage />,
    //   id: 16,
    // },
    // {
    //   link: "payment",
    //   element: <PaymentPage />,
    //   id: 17,
    // },
    // {
    //   link: "requisite",
    //   element: <RequisitePage />,
    //   id: 18,
    // },
    // {
    //   link: "Faq",
    //   element: <FaqPage />,
    //   id: 19,
    // },
    // {
    //   link: "return-product",
    //   element: <ReturnProduct />,
    //   id: 20,
    // },
    // {
    //   link: "order/:id",
    //   element: <OrderProductPage />,
    //   id: 21,
    // },
    // {
    //   link: "favorites",
    //   element: <FavoritePage />,
    //   id: 22,
    // },
    // {
    //   link: "bestsellers",
    //   element: <BestsellersPage />,
    //   id: 23,
    // },
    // {
    //   link: "bestsellers/:productID",
    //   element: <ProductIdPage />,
    //   id: 24,
    // },
    // {
    //   link: "new-products",
    //   element: <NewProductsPage />,
    //   id: 25,
    // },
    // {
    //   link: "new-products/:productID",
    //   element: <ProductIdPage />,
    //   id: 26,
    // },
    // {
    //   link: "/:productID",
    //   element: <ProductIdPage />,
    //   id: 27,
    // },
    // {
    //   link: "/category/:productID",
    //   element: <ProductIdPage />,
    //   id: 28,
    // },
  ];

  const PRIVATE_ROUTES = [
    {
      link: "admin",
      element: <AdminPageMain />,
      id: 1,
    },
    {
      link: "users/:userId",
      element: <AdminPageUser />,
      id: 2,
    },
    {
      link: "shopping/:productId",
      element: <AdminPageUser />,
      id: 3,
    },
    {
      link: "dashboard",
      element: <AdminPageDashboard />,
      id: 4,
    },
    {
      link: "users",
      element: <AdminPageUsers />,
      id: 5,
    },
    {
      link: "books",
      element: <AdminPageGoods />,
      id: 6,
    },
    {
      link: "books/:id",
      element: <AdminPageSales />,
      id: 7,
    },
    {
      link: "shoppingBag",
      element: <AdminPageShopping />,
      id: 8,
    },
    {
      link: "authors",
      element: <AdminPageAd />,
      id: 9,
    },
    {
      link: "product",
      element: <AdminPageProduct />,
      id: 12,
    },
    {
      link: "season-products/:id",
      element: <AdminCollectionById />,
      id: 11,
    },
    {
      link: "product/:id",
      element: <AdminProductById />,
      id: 12,
    },
    {
      link: "popular-products",
      element: <AdminPopularProducts />,
      id: 13,
    },
    {
      link: "chat",
      element: <AdminPageChat />,
      id: 14,
    },
    // {
    //   link: "news",
    //   element: <AdminPageNews />,
    //   id: 15,
    // },
  ];

  return (
    <React.Suspense fallback={<span>Loading...</span>}>
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
    </React.Suspense>
  );
};

export { MainRoutes };
