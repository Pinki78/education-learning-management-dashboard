
import { db } from "@/assets/firebase/firebaseClient.js";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { courseListData } from "@/assets/api-datas/course-data/course-data";

// 🔹 Upload menu to Firestore
export const uploadCourseFirestore = createAsyncThunk(
  "CourseItms/upload",
  async () => {
    const docRef = doc(db, "coursesDataList", "courseItms");

    await setDoc(docRef, {
      CourseItms: courseListData,
    });

    return courseListData;
  }
);

// 🔹 Fetch menu
export const fetchCourse = createAsyncThunk(
  "CourseItms/fetch",
  async () => {
    const docRef = doc(db, "coursesDataList", "courseItms");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data().CourseItms;
    }

    // ✅ Auto upload if empty
    await setDoc(docRef, {
      CourseItms: courseListData,
    });

    return courseListData;
  }
);

const courseListSlice = createSlice({
  name: "CourseItms",
  initialState: {
    CourseDataState: [],
    loading: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(uploadCourseFirestore.pending, (state) => {
        state.loading = true;
      })
      .addCase(uploadCourseFirestore.fulfilled, (state, action) => {
        state.CourseDataState = action.payload;
        state.loading = false;
      })
      .addCase(fetchCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCourse.fulfilled, (state, action) => {
        state.CourseDataState = action.payload;
        state.loading = false;
      })
      .addCase(fetchCourse.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default courseListSlice.reducer;