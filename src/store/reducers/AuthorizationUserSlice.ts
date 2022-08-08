import { createSlice } from "@reduxjs/toolkit";

export const AuthorizationUserSlice = createSlice({
  name: "AuthorizationUserSlice",
  initialState: {
    userState: false,
    userIdForBack: 0,
    role: "",
    phoneNumber: 0,
    token: localStorage.accessToken || "",
  },

  reducers: {
    userStateToogle(state, action) {
      state.userState = action.payload;
    },
    addUserId(state, action) {
      state.userIdForBack = action.payload;
    },
    addRole(state, action) {
      state.role = action.payload;
    },
    addPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    addToken(state, action) {
      state.token = action.payload;
    },
    deleteToken(state, action) {
      state.token = "";
    },
  },
});

export const {
  userStateToogle,
  addUserId,
  addPhoneNumber,
  addToken,
  deleteToken,
  addRole,
} = AuthorizationUserSlice.actions;

export default AuthorizationUserSlice.reducer;
