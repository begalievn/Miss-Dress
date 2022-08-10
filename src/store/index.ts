import { adminCollectionApi } from './services/adminCollectionApi';
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { AuthorizationAPI } from "./services/AuthorizationApi";

import AuthorizationUserSlice from "./reducers/AuthorizationUserSlice";
import Breadcrumbs from "./reducers/BreadcrumbsSlice";
import ModalSlice from "./reducers/ModalSlice";

import { shoppingCartApi } from "./services/shoppingCartQuery";
import { LikeApi } from "./services/LikeApi";
import { categoryApi } from "./services/categoryApi";
import { UserApi } from "./services/UserApi";
import { productsApi } from "./services/productsApi";

import { categoriesApi } from "./services/categoriesApi";
import { collectionCategoryApi } from "./services/collectionCategoryApi";
import { dropDownApi } from "./services/dropDownApi";

import { orderApi } from "./services/OrderApi";
import { searchApi } from "./services/SearchApi";
import { ratingApi } from "./services/RatingApi";

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
  [ratingApi.reducerPath]: ratingApi.reducer,
  [adminCollectionApi.reducerPath]: adminCollectionApi.reducer,
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
      ratingApi.middleware,
      adminCollectionApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
