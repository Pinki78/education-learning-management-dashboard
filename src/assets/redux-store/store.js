"use client";

import { configureStore } from "@reduxjs/toolkit";
import headerMenuSlice from "./store-redux-componets/headerMenuSlice";
import courseListSilce from "./store-redux-componets/courseListSilce";
import courseFormSlice from "./store-redux-componets/courseFormSlice";
import pageTitleSlice from "./store-redux-componets/pageTitleAreaSilce"




export const store = configureStore({
  reducer: {
    headerMenuReducer: headerMenuSlice,
    courseListReducer:courseListSilce,
    courseFormReducer:courseFormSlice,
    pageTitleReducer:pageTitleSlice,
  },
});