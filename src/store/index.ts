import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { newProductsApi } from './secondary/productNewProductsApi';
import { productBestsellersApi } from './secondary/productBestsellersApi';
import { adminRegularUsersApi } from "./secondary/adminRegularUsersApi";

import { adminCollectionApi } from "./services/adminCollectionApi";

import { AuthorizationAPI } from "./services/AuthorizationApi";

import AuthorizationUserSlice from "./reducers/AuthorizationUserSlice";
import Breadcrumbs from "./reducers/BreadcrumbsSlice";
import ModalSlice from "./reducers/ModalSlice";

import { shoppingCartApi } from "./secondary/shoppingCartQuery";
import { LikeApi } from "./secondary/LikeApi";
import { categoryApi } from "./services/categoryApi";
import { UserApi } from "./services/UserApi";
import { productsApi } from "./secondary/productsApi";

import { categoriesApi } from "./secondary/categoriesApi";
import { collectionCategoryApi } from "./secondary/collectionCategoryApi";
import { dropDownApi } from "./secondary/dropDownApi";

import { orderApi } from "./secondary/OrderApi";
import { searchApi } from "./secondary/SearchApi";

import { categoryOneProductApi } from "./secondary/categoryOneProductApi";

import { adminUserOneApi } from "./secondary/adminUserOneApi";
import { adminDeleteUserApi } from "./secondary/adminDeleteUserApi";
import { adminPopularProductsApi } from "./services/adminPopularProductsApi";
import { adminPopularProductPriceApi } from "./secondary/adminPopularProductPriceApi";
import { adminGetCartApi } from "./services/adminGetCartApi";
import { productFavoritesApi } from "./secondary/productFavoritesApi";

const rootreducer = combineReducers({
  ModalSlice: ModalSlice,
  AuthorizationUserSlice: AuthorizationUserSlice,
  Breadcrumbs: Breadcrumbs,
  [shoppingCartApi.reducerPath]: shoppingCartApi.reducer,
  [LikeApi.reducerPath]: LikeApi.reducer,
  [AuthorizationAPI.reducerPath]: AuthorizationAPI.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
  [UserApi.reducerPath]: UserApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [collectionCategoryApi.reducerPath]: collectionCategoryApi.reducer,
  [dropDownApi.reducerPath]: dropDownApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
  [searchApi.reducerPath]: searchApi.reducer,
  [categoryOneProductApi.reducerPath]: categoryOneProductApi.reducer,
  [adminCollectionApi.reducerPath]: adminCollectionApi.reducer,
  [adminUserOneApi.reducerPath]: adminUserOneApi.reducer,
  [adminDeleteUserApi.reducerPath]: adminDeleteUserApi.reducer,
  [adminPopularProductsApi.reducerPath]: adminPopularProductsApi.reducer,
  [adminPopularProductPriceApi.reducerPath]:
    adminPopularProductPriceApi.reducer,
  [adminGetCartApi.reducerPath]: adminGetCartApi.reducer,
  [adminRegularUsersApi.reducerPath]: adminRegularUsersApi.reducer,
  [productFavoritesApi.reducerPath]: productFavoritesApi.reducer,
  [productBestsellersApi.reducerPath]: productBestsellersApi.reducer,
  [newProductsApi.reducerPath]: newProductsApi.reducer,
});

export const store = configureStore({
  reducer: rootreducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      searchApi.middleware,
      shoppingCartApi.middleware,
      LikeApi.middleware,
      AuthorizationAPI.middleware,
      categoryApi.middleware,
      UserApi.middleware,
      productsApi.middleware,
      categoriesApi.middleware,
      collectionCategoryApi.middleware,
      dropDownApi.middleware,
      orderApi.middleware,
      productsApi.middleware,
      categoryOneProductApi.middleware,
      adminCollectionApi.middleware,
      adminUserOneApi.middleware,
      adminDeleteUserApi.middleware,
      adminPopularProductsApi.middleware,
      adminPopularProductPriceApi.middleware,
      adminGetCartApi.middleware,
      adminRegularUsersApi.middleware,
      adminGetCartApi.middleware,
      productFavoritesApi.middleware,
      productBestsellersApi.middleware,
      newProductsApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
