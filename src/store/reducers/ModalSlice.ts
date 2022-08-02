import { createSlice } from "@reduxjs/toolkit";


export const ModalSlice = createSlice({
  name: "ModalSlice",
  initialState: {
    modalState: false,
    ModalChoise:"",
    searchState: false,
    burgerMenu:false,
    menuProfile:false,
    validationNumber: true,
    textError: "",
  },
  reducers: {
    openModal(state,action) {
      state.modalState = action.payload;
      state.searchState = false;
      state.menuProfile = false;
    },
    openSearch(state,action) {
      state.searchState = action.payload; 
      state.modalState = false; 
      state.menuProfile = false; 
    },
    openBurgerMenu(state,action){
      state.burgerMenu = action.payload;
      if(action.payload){
        state.modalState = false;
        state.searchState = false;
        state.menuProfile = false;
      }  
    },
    openProfile(state,action){
      state.menuProfile = action.payload;
      state.modalState = false;
      state.searchState = false;
    },
    AddModalChoise(state,action){
      state.ModalChoise = action.payload;
    },
    closeAll(state){
      state.modalState = false;
      state.searchState = false;
      state.menuProfile = false; 
    },
    validationNumber(state,action){
      state.validationNumber=action.payload;
    },
    textErrorNumber(state,action){
      state.textError= action.payload;
    },
  },
});

export const {
  openModal,
  validationNumber,
  textErrorNumber,
  openSearch,
  openBurgerMenu,
  closeAll,
  openProfile,
  AddModalChoise
} = ModalSlice.actions;

export default ModalSlice.reducer;
