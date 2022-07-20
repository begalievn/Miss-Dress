import { createSlice } from "@reduxjs/toolkit";


export const AuthorizationUserSlice = createSlice({
  name: "AuthorizationUserSlice",
  initialState: {
    userState: true,

  },
  reducers: {
    userStateToogle(state, action) {
      state.userState = action.payload;
    },

  },
});

export const {
  userStateToogle,

} = AuthorizationUserSlice.actions;

export default AuthorizationUserSlice.reducer;
