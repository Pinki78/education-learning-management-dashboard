"use client";

import { configureStore } from "@reduxjs/toolkit";
import headerMenuSlice from "./store-redux-componets/headerMenuSlice";
import courseListSilce from "./store-redux-componets/courseListSilce";
import courseNewFormSlice from "./store-redux-componets/courseNewFormSlice";
import pageTitleSlice from "./store-redux-componets/pageTitleAreaSilce"
// import courseSlice from "./store-redux-componets/courseSlice"
import drawerOpenHideSlice from "./store-redux-componets/drawerOpenHideSlice"
import searchFilterSlice from "./store-redux-componets/searchFilterSlice"
import loadingSlice from "./store-redux-componets/loadingSlice"
import addToCartSilce from "./store-redux-componets//addToCartSilce"



export const store = configureStore({
  reducer: {
    headerMenuReducer: headerMenuSlice,
    courseListReducer:courseListSilce,
    courseNewFormReducer:courseNewFormSlice,
    pageTitleReducer:pageTitleSlice,
    // courseReducer:courseSlice,
    drawerReducer:drawerOpenHideSlice,
    searchFilterReducer:searchFilterSlice,
    loadingReducer:loadingSlice,
    addToCartReducer:addToCartSilce,
    
  },
});