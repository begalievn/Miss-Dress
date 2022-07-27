import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { AuthorizationAPI } from "./services/AuthorizationApi";


import AuthorizationUserSlice from "./reducers/AuthorizationUserSlice";
import Breadcrumbs from "./reducers/BreadcrumbsSlice";
import ModalSlice from "./reducers/ModalSlice";
import { LikeApi } from "./services/LikeApi";
import { categoryApi } from "./services/categoryApi";

const rootreducer = combineReducers({
  ModalSlice: ModalSlice,
  AuthorizationUserSlice: AuthorizationUserSlice,
  Breadcrumbs: Breadcrumbs,
  [LikeApi.reducerPath]: LikeApi.reducer,
  [AuthorizationAPI.reducerPath]:AuthorizationAPI.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
});

export const store = configureStore({
  reducer: rootreducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      LikeApi.middleware,
      AuthorizationAPI.middleware,
      categoryApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
