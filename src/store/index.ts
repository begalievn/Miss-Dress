import { combineReducers, configureStore } from "@reduxjs/toolkit";

import AuthorizationUserSlice from "./reducers/AuthorizationUserSlice";
import Breadcrumbs from "./reducers/BreadcrumbsSlice";
import ModalSlice from "./reducers/ModalSlice";
import { categoryApi } from "./services/categoryApi";

const rootreducer = combineReducers({
  ModalSlice: ModalSlice,
  AuthorizationUserSlice: AuthorizationUserSlice,
  Breadcrumbs: Breadcrumbs,
  [categoryApi.reducerPath]: categoryApi.reducer,
});

export const store = configureStore({
  reducer: rootreducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
