"use strict";
exports.__esModule = true;
exports.MainRoutes = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var hooks_1 = require("../utils/app/hooks");
var AboutUsPage_1 = require("./aboutUsPage/AboutUsPage");
var ContactsPage_1 = require("./contactsPage/ContactsPage");
var DeliveryPage_1 = require("./deliveryPage/DeliveryPage");
var MainPage_1 = require("./mainPage/MainPage");
var NewsPage_1 = require("./newsPage/NewsPage");
var CategoryPage_1 = require("./categoryPage/CategoryPage");
var ShoppingCartPage_1 = require("./shoppingCartPage/ShoppingCartPage");
var ProductIdPage_1 = require("./productIdPage/ProductIdPage");
var CollectionPagesContent_1 = require("./collectionPagesAll/CollectionPagesContent");
var ProfilePage_1 = require("./profilePage/ProfilePage");
var CollectionCategory_1 = require("./collectionPagesAll/components/CollectionCategory");
var OrderPage_1 = require("./ordersPage/OrderPage");
var PublicOfferPage_1 = require("./publicOfferPage/PublicOfferPage");
var HowOrderPage_1 = require("./howOrderPage/HowOrderPage");
var SearchPage_1 = require("./searchPage/SearchPage");
var PaymentPage_1 = require("./paymentPage/PaymentPage");
var RequisitePage_1 = require("./requisitePage/RequisitePage");
var FaqPage_1 = require("./faqPage/FaqPage");
var ReturnProduct_1 = require("./returnProduct/ReturnProduct");
var FavoritePage_1 = require("./favoritePage/FavoritePage");
var AdminPageDashboard_1 = require("./adminPage/adminPageDashboard/AdminPageDashboard");
var AdminPageUsers_1 = require("./adminPage/adminPageUsers/AdminPageUsers");
var AdminPageGoods_1 = require("./adminPage/adminPageGoods/AdminPageGoods");
var AdminPageSales_1 = require("./adminPage/adminPageSales/AdminPageSales");
var AdminPageShopping_1 = require("./adminPage/adminPageShopping/AdminPageShopping");
var AdminPageAd_1 = require("./adminPage/adminPageAd/AdminPageAd");
var AdminPageChat_1 = require("./adminPage/adminPageChat/AdminPageChat");
var AdminPageMain_1 = require("./adminPage/adminPageMain/AdminPageMain");
var MainRoutes = function () {
  var isAdmin = hooks_1.useAppSelector(function (state) { return state.AuthorizationUserSlice.role; });
  console.log(isAdmin);
  var PUBLIC_ROUTES = [
    {
      link: "/",
      element: react_1["default"].createElement(MainPage_1["default"], null),
      id: 1
    },
    {
      link: "/about",
      element: react_1["default"].createElement(AboutUsPage_1["default"], null),
      id: 2
    },
    {
      link: "/delivery",
      element: react_1["default"].createElement(DeliveryPage_1["default"], null),
      id: 3
    },
    {
      link: "/category",
      element: react_1["default"].createElement(CategoryPage_1["default"], null),
      id: 4
    },
    {
      link: "/news/:id",
      element: react_1["default"].createElement(NewsPage_1["default"], { edit: false }),
      id: 5
    },
    {
      link: "/contacts",
      element: react_1["default"].createElement(ContactsPage_1["default"], null),
      id: 6
    },
    // {
    //   link: "*",
    //   element: <ErrorPage />,
    //   id: 7,
    // },
    {
      link: "/category/:productId",
      element: react_1["default"].createElement(ProductIdPage_1["default"], null),
      id: 8
    },
    {
      link: "/collection/:collection",
      element: react_1["default"].createElement(CollectionPagesContent_1["default"], null),
      id: 10
    },
    {
      link: "/collection/:id/:collection",
      element: react_1["default"].createElement(CollectionCategory_1["default"], null),
      id: 11
    },
    {
      link: "shopping",
      element: react_1["default"].createElement(ShoppingCartPage_1["default"], null),
      id: 12
    },
    {
      link: "profile",
      element: react_1["default"].createElement(ProfilePage_1["default"], null),
      id: 13
    },
    {
      link: "order",
      element: react_1["default"].createElement(OrderPage_1["default"], null),
      id: 14
    },
    {
      link: "public-offer",
      element: react_1["default"].createElement(PublicOfferPage_1["default"], null),
      id: 15
    },
    {
      link: "how-order",
      element: react_1["default"].createElement(HowOrderPage_1["default"], null),
      id: 16
    },
    {
      link: "search/name=:name",
      element: react_1["default"].createElement(SearchPage_1["default"], null),
      id: 17
    },
    {
      link: "payment",
      element: react_1["default"].createElement(PaymentPage_1["default"], null),
      id: 18
    },
    {
      link: "requisite",
      element: react_1["default"].createElement(RequisitePage_1["default"], null),
      id: 19
    },
    {
      link: "Faq",
      element: react_1["default"].createElement(FaqPage_1["default"], null),
      id: 20
    },
    {
      link: "return-product",
      element: react_1["default"].createElement(ReturnProduct_1["default"], null),
      id: 21
    },
    {
      link: "favorites",
      element: react_1["default"].createElement(FavoritePage_1["default"], null),
      id: 22
    },
  ];
  var PRIVATE_ROUTES = [
    {
      link: "admin",
      element: react_1["default"].createElement(AdminPageMain_1["default"], null),
      id: 1
    },
    {
      link: "dashboard",
      element: react_1["default"].createElement(AdminPageDashboard_1["default"], null),
      id: 2
    },
    {
      link: "users",
      element: react_1["default"].createElement(AdminPageUsers_1["default"], null),
      id: 3
    },
    {
      link: "goods",
      element: react_1["default"].createElement(AdminPageGoods_1["default"], null),
      id: 4
    },
    {
      link: "sales",
      element: react_1["default"].createElement(AdminPageSales_1["default"], null),
      id: 5
    },
    {
      link: "shoppingBag",
      element: react_1["default"].createElement(AdminPageShopping_1["default"], null),
      id: 28
    },
    {
      link: "ad",
      element: react_1["default"].createElement(AdminPageAd_1["default"], null),
      id: 29
    },
    {
      link: "chat",
      element: react_1["default"].createElement(AdminPageChat_1["default"], null),
      id: 30
    },
  ];
  return (react_1["default"].createElement(react_router_dom_1.Routes, null,
    isAdmin &&
            PRIVATE_ROUTES.map(function (_a) {
              var link = _a.link, id = _a.id, element = _a.element;
              return (react_1["default"].createElement(react_router_dom_1.Route, { path: link, element: element, key: id }));
            }),
    PUBLIC_ROUTES.map(function (_a) {
      var link = _a.link, id = _a.id, element = _a.element;
      return (react_1["default"].createElement(react_router_dom_1.Route, { path: link, element: element, key: id }));
    })));
};
exports.MainRoutes = MainRoutes;
