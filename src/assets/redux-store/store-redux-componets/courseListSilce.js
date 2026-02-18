"use client";

import { db } from "@/assets/firebase/firebaseClient.js";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { courseListData } from "@/assets/api-datas/course-data/course-data";

// 🔹 Upload menu to Firestore
export const uploadCourseFirestore = createAsyncThunk(
  "CourseItms/upload",
  async () => {
    await setDoc(doc(db, "CoursesDataList", "CourseItms"), {
      CourseDoc: courseListData,
    });

    return courseListData;
  }
);

// Fetch menu
export const fetchCourse = createAsyncThunk(
  "CourseItms/fetch",
  async () => {
    const docRef = doc(db, "CoursesDataList", "CourseItms");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data().CourseDoc; // fixed
    } else {
      return courseListData;
    }
  }
);

const courseListSilce = createSlice({
  name: "CourseItms",
  initialState: {
    CourseCreate: [],
    loading: false,
   
  },

  reducers: {
    
  },

  extraReducers: (builder) => {
    builder
      .addCase(uploadCourseFirestore.pending, (state) => {
        state.loading = true;
      })
      .addCase(uploadCourseFirestore.fulfilled, (state, action) => {
        state.CourseCreate = action.payload;
        state.loading = false;
      })
      .addCase(fetchCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCourse.fulfilled, (state, action) => {
        state.CourseCreate = action.payload;
        state.loading = false;
      })
      .addCase(fetchCourse.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setToggleItem } = courseListSilce.actions;
export default courseListSilce.reducer;