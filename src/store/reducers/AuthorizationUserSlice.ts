import { createSlice } from "@reduxjs/toolkit";


export const AuthorizationUserSlice = createSlice({
  name: "AuthorizationUserSlice",
  initialState: {
    userState: false,
    userIdForBack: 0,
    role:"",
    phoneNumber:0

  },
  reducers: {
    userStateToogle(state, action) {
      state.userState = action.payload;
    },
    addUserId(state,action){
      state.userIdForBack = action.payload;
    },
    addPhoneNumber(state,action){
      state.phoneNumber = action.payload;
    }

  },
});

export const {
  userStateToogle,
  addUserId,
  addPhoneNumber
} = AuthorizationUserSlice.actions;

export default AuthorizationUserSlice.reducer;
