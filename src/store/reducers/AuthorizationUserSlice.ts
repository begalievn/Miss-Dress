import { createSlice } from "@reduxjs/toolkit";


export const AuthorizationUserSlice = createSlice({
  name: "AuthorizationUserSlice",
  initialState: {
    userState: false,
    userIdForBack: 0,
    role:"",

  },
  reducers: {
    userStateToogle(state, action) {
      state.userState = action.payload;
    },
    addUserId(state,action){
      state.userIdForBack = action.payload;
    }

  },
});

export const {
  userStateToogle,
  addUserId,
} = AuthorizationUserSlice.actions;

export default AuthorizationUserSlice.reducer;
