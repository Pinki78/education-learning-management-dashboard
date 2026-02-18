// store/courseFormSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/assets/firebase/firebaseClient.js";

export const createCourse = createAsyncThunk(
  "coursesForm/createCourse",
  async (courseData, { rejectWithValue }) => {
    try {
      const docRef = await addDoc(collection(db, "courses"), {
        ...courseData,
        createdAt: serverTimestamp(),
      });
      return { id: docRef.id, ...courseData };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const courseFormSlice = createSlice({
  name: "coursesForm",
  initialState: {
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCourse.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default courseFormSlice.reducer;
