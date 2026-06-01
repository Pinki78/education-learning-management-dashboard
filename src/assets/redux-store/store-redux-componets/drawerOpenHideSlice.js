import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drawerMsgOpen: false,
  drawerCartOpen: false,
  drawerNotiOpen: false,
  drawerProfileOpen: false,
//   drawerMsgOpen: false,

};

const drawerOpenHideSlice = createSlice({
  name: "drawer",
  initialState,

  reducers: {
    toggleDrawerMsg: (state) => {
      state.drawerMsgOpen = !state.drawerMsgOpen;
    },

    openDrawerMsg: (state) => {
      state.drawerMsgOpen = true;
    },

    closeDrawerMsg: (state) => {
      state.drawerMsgOpen = false;
    },

    // drawerCartOpen

    toggleDrawerCart: (state) => {
      state.drawerCartOpen = !state.drawerCartOpen;
    },

    openDrawerCart: (state) => {
      state.drawerCartOpen = true;
    },

    closeDrawerCart: (state) => {
      state.drawerCartOpen = false;
    },

    // drawerNotiOpen

    toggleDrawerNoti: (state) => {
      state.drawerNotiOpen = !state.drawerNotiOpen;
    },

    openDrawerNoti: (state) => {
      state.drawerNotiOpen = true;
    },

    closeDrawerNoti: (state) => {
      state.drawerNotiOpen = false;
    },

    // drawerProfileOpen

    toggleDrawerProfile: (state) => {
      state.drawerProfileOpen = !state.drawerProfileOpen;
    },

    openDrawerProfile: (state) => {
      state.drawerProfileOpen = true;
    },

    closeDrawerProfile: (state) => {
      state.drawerProfileOpen = false;
    },


    
  },
});

export const {
  toggleDrawerMsg,
  openDrawerMsg,
  closeDrawerMsg,
   toggleDrawerCart,
  openDrawerCart,
  closeDrawerCart,
  toggleDrawerNoti,
  openDrawerNoti,
  closeDrawerNoti,
  toggleDrawerProfile,
  openDrawerProfile,
  closeDrawerProfile

} = drawerOpenHideSlice.actions;

export default drawerOpenHideSlice.reducer;