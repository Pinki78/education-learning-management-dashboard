// /store/courseFormSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db, storage } from "@/assets/firebase/firebaseClient.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const createCourse = createAsyncThunk(
  "coursesForm/createCourse",
  async (courseData, { rejectWithValue }) => {
    try {
      // Upload media first if any
      const newData = { ...courseData };
      if (courseData.thumbnail) {
        const thumbRef = ref(storage, `courses/${courseData.title}/thumbnail`);
        await uploadBytes(thumbRef, courseData.thumbnail);
        newData.thumbnail = await getDownloadURL(thumbRef);
      }
      if (courseData.promoVideo) {
        const videoRef = ref(storage, `courses/${courseData.title}/promoVideo`);
        await uploadBytes(videoRef, courseData.promoVideo);
        newData.promoVideo = await getDownloadURL(videoRef);
      }

      // Save in Firestore
      const docRef = await addDoc(collection(db, "courses"), {
        ...newData,
        createdAt: serverTimestamp(),
      });
      return { id: docRef.id, ...newData };
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
    courseData: {},
  },
  reducers: {
    updateCourseData: (state, action) => {
      state.courseData = { ...state.courseData, ...action.payload };
    },
    resetCourseForm: (state) => {
      state.courseData = {};
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
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

export const { updateCourseData, resetCourseForm } = courseFormSlice.actions;
export default courseFormSlice.reducer;