import { createSlice } from "@reduxjs/toolkit";


export const ModalSlice = createSlice({
  name: "ModalSlice",
  initialState: {
    modalState: false,
    validationNumber: true,
    textError: "",

  },
  reducers: {
    openModal(state,action) {
      state.modalState = action.payload;
    
    },
    validationNumber(state,action){
      state.validationNumber=action.payload;
    },
    textErrorNumber(state,action){
      state.textError= action.payload;
    }
  },
});

export const {
  openModal,
  validationNumber,
  textErrorNumber
} = ModalSlice.actions;

export default ModalSlice.reducer;
