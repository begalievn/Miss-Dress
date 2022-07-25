import { combineReducers, configureStore } from "@reduxjs/toolkit";

import AuthorizationUserSlice from "./reducers/AuthorizationUserSlice";
import Breadcrumbs from "./reducers/BreadcrumbsSlice";
import ModalSlice from "./reducers/ModalSlice";
import { shoppingCartApi } from "./services/shoppingCartQuery";

const rootreducer = combineReducers({
  ModalSlice: ModalSlice,
  AuthorizationUserSlice: AuthorizationUserSlice,
  Breadcrumbs: Breadcrumbs,
  [shoppingCartApi.reducerPath]: shoppingCartApi.reducer,
});

export const store = configureStore({
  reducer: rootreducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shoppingCartApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
