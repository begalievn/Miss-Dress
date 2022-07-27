import { combineReducers, configureStore } from "@reduxjs/toolkit";

import AuthorizationUserSlice from "./reducers/AuthorizationUserSlice";
import Breadcrumbs from "./reducers/BreadcrumbsSlice";
import ModalSlice from "./reducers/ModalSlice";
import { CategoryApi } from "./services/CategoryApi";
import { LikeApi } from "./services/LikeApi";

const rootreducer = combineReducers({
  ModalSlice: ModalSlice,
  AuthorizationUserSlice: AuthorizationUserSlice,
  Breadcrumbs: Breadcrumbs,
  [LikeApi.reducerPath]: LikeApi.reducer,
  [CategoryApi.reducerPath]: CategoryApi.reducer,
});

export const store = configureStore({
  reducer: rootreducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(LikeApi.middleware, CategoryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
