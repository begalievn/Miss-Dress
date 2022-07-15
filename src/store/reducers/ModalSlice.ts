import { createSlice } from "@reduxjs/toolkit";


export const ModalSlice = createSlice({
  name: "ModalSlice",
  initialState: {
    modalState: false,

  },
  reducers: {
    openModal(state,action) {
      state.modalState = action.payload;
    
    },
  },
});

export const {
  openModal,

} = ModalSlice.actions;

export default ModalSlice.reducer;
