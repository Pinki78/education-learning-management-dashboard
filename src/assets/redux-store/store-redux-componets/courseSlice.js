// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { db } from "@/assets/firebase/firebaseClient.js";
// import {
//   collection,
//   getDocs,
//   setDoc,
//   doc,
//   serverTimestamp,
// } from "firebase/firestore";
// import { courseListData } from "@/assets/api-datas/course-data/course-data";

// // ✅ fetch from firebase
// export const fetchCourses = createAsyncThunk(
//   "courses/fetchCourses",
//   async () => {
//     const snapshot = await getDocs(collection(db, "courses"));
//     return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//   }
// );

// // ✅ upload local data to firebase
// export const uploadCourses = createAsyncThunk(
//   "courses/uploadCourses",
//   async () => {
//     for (const course of courseListData) {
//       await setDoc(doc(db, "courses", course.id), {
//         id: course.id,
//         title: course.title,
//         categoryName:course.categoryName,
//         imagePath:course.imagePath,
//         member:course.member,
//         offer:course.offer,
//         price: course.price,
//         info: course.info,
//         bio:course.bio,
//         socialiocn:course.socialiocn,
//         subCategory:course.subCategory,
//         updatedAt: serverTimestamp(),
//       });
//     }
//     return true;
//   }
// );

// const courseSlice = createSlice({
//   name: "courses",
//   initialState: {
//     courseList: [],
//     loading: false,
//     error: null,
//     uploaded: false,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // fetch
//       .addCase(fetchCourses.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchCourses.fulfilled, (state, action) => {
//         state.loading = false;
//         state.courseList = action.payload;
//       })
//       .addCase(fetchCourses.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })
//       // upload
//       .addCase(uploadCourses.fulfilled, (state) => {
//         state.uploaded = true;
//       });
//   },
// });

// export default courseSlice.reducer;