import { combineReducers, configureStore } from "@reduxjs/toolkit";

import  ModalSlice  from "./reducers/ModalSlice";

const rootreducer = combineReducers({
  ModalSlice: ModalSlice,
  

});

export const store = configureStore({
  reducer: rootreducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;