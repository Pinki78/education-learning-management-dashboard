// /store/courseNewFormSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "@/assets/firebase/firebaseClient.js";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { CreateNewCourseFormData } from "@/app/create-new-course/data-create-form/data-create-form";




// 🔹 Upload menu to Firestore
export const uploadFormFFirestore = createAsyncThunk(
  "coursesNewForm/upload",
  async () => {
    await setDoc(doc(db, "CoursesNewDataFormList", "NewForm"), {
      CourseDoc: CreateNewCourseFormData,
    });

    return CreateNewCourseFormData;
  }
);

// Fetch menu
export const getFormFields = createAsyncThunk(
  "coursesNewForm/fetch",
  async () => {
    const docRef = doc(db, "CoursesNewDataFormList", "NewForm");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data().CourseDoc; // fixed
    } else {
      return courseListData;
    }
  }
);



/* =========================
   GET FORM FIELDS FROM FIREBASE
========================= */

// export const getFormFields = createAsyncThunk(
//   "coursesNewForm/getFormFields",
//   async (_, { rejectWithValue }) => {
//     try {

//       const docRef = doc(db, "CreateNewCourseFormFields", "FormFieldsId");

//       const docSnap = await getDoc(docRef);

//       console.log("Firebase doc:", docSnap.data());

//       if (docSnap.exists()) {

//         const data = docSnap.data();

//         return {
//           basicfield: data.Basicfield || [],
//           curriculum: data.Curriculum || []
//         };

//       }

//       return {
//         basicfield: [],
//         curriculum: []
//       };

//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error.message);
//     }
//   }
// );
/* =========================
   SLICE
========================= */

const courseNewFormSlice = createSlice({
  name: "coursesNewForm",

  initialState: {
    loading: false,
    error: null,
    fieldsBasic: [],
    curriculum: [],
    step:1,
  },

  reducers: {
     nextStep: (state) => {
      if (state.step < 5) {
        state.step += 1;
      }
    },

    prevStep: (state) => {
      if (state.step > 1) {
        state.step -= 1;
      }
    },

    setStep: (state, action) => {
      state.step = action.payload;
    },
  },

  extraReducers: (builder) => {

    builder

      .addCase(getFormFields.pending, (state) => {
        state.loading = true;
      })

      .addCase(getFormFields.fulfilled, (state, action) => {
        state.loading = false;
        state.fieldsBasic = action.payload.field;
        state.curriculum = action.payload.curriculum;
      })

      .addCase(getFormFields.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

  },
});


export const { nextStep, prevStep, setStep } = courseNewFormSlice.actions;
export default courseNewFormSlice.reducer;