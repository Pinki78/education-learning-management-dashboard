"use client";

import { configureStore } from "@reduxjs/toolkit";
import headerMenuSlice from "./store-redux-componets/headerMenuSlice";

export const store = configureStore({
  reducer: {
    headerMenuReducer: headerMenuSlice,
  },
});