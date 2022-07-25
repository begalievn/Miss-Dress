import { combineReducers, configureStore } from "@reduxjs/toolkit";

import AuthorizationUserSlice from "./reducers/AuthorizationUserSlice";
import Breadcrumbs from "./reducers/BreadcrumbsSlice";
import  ModalSlice  from "./reducers/ModalSlice";


const rootreducer = combineReducers({
  ModalSlice: ModalSlice,
  AuthorizationUserSlice:AuthorizationUserSlice,
  Breadcrumbs:Breadcrumbs,

});

export const store = configureStore({
  reducer: rootreducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;