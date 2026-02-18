"use client";

import { db } from "@/assets/firebase/firebaseClient.js";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HederMenuListDat } from "@/assets/api-datas/header-data/header-menu-list-data";

// 🔹 Upload menu to Firestore
export const uploadHeaderMenu = createAsyncThunk(
  "headerMenu/upload",
  async () => {
    await setDoc(doc(db, "settings", "headerMenu"), {
      menuHeader: HederMenuListDat,
    });

    return HederMenuListDat;
  }
);

// Fetch menu
export const fetchHeaderMenu = createAsyncThunk(
  "headerMenu/fetch",
  async () => {
    const docRef = doc(db, "settings", "headerMenu");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data().menuHeader;
    } else {
      // fallback if firestore empty
      return HederMenuListDat;
    }
  }
);


const headerMenuSlice = createSlice({
  name: "headerMenu",
  initialState: {
    menuHeader: [],
    loading: false,
    activeItemId: null,
  },

  reducers: {
    setToggleItem: (state, action) => {
      state.activeItemId =
        state.activeItemId === action.payload
          ? null
          : action.payload;
    },

    
  },

  extraReducers: (builder) => {
    builder
      .addCase(uploadHeaderMenu.pending, (state) => {
        state.loading = true;
      })
      .addCase(uploadHeaderMenu.fulfilled, (state, action) => {
        state.menuHeader = action.payload;
        state.loading = false;
      })
      .addCase(fetchHeaderMenu.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHeaderMenu.fulfilled, (state, action) => {
        state.menuHeader = action.payload;
        state.loading = false;
      })
      .addCase(fetchHeaderMenu.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setToggleItem } = headerMenuSlice.actions;
export default headerMenuSlice.reducer;
