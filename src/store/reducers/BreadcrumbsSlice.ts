import { createSlice } from "@reduxjs/toolkit";

export type BreadcrumbStateType = {
  breadcrumbs: string[];
};

const initialState: BreadcrumbStateType  = {
  breadcrumbs: [],
};


export const Breadcrumbs = createSlice({
  name: "Breadcrumbs",
  initialState,
  reducers: {
    addBreadcrumb(state, action:any) {
      state.breadcrumbs.push(action.payload.slice(1));
    },

  },
});

export const {
  addBreadcrumb,

} = Breadcrumbs.actions;

export default Breadcrumbs.reducer;
