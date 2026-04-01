// /store/courseNewFormSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "@/assets/firebase/firebaseClient.js";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { CreateNewCourseFormData } from "@/app/create-new-course/data-create-form/data-create-form";

// Upload Form Schema
export const uploadFormFFirestore = createAsyncThunk(
  "coursesNewForm/upload",
  async () => {
    await setDoc(doc(db, "CoursesNewDataFormList", "NewForm"), {
      CourseDoc: CreateNewCourseFormData,
    });

    return CreateNewCourseFormData;
  }
);

// Fetch Form Schema
export const getFormFields = createAsyncThunk(
  "coursesNewForm/fetch",
  async () => {
    const docRef = doc(db, "CoursesNewDataFormList", "NewForm");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data().CourseDoc;
    } else {
      return CreateNewCourseFormData;
    }
  }
);

const courseNewFormSlice = createSlice({
  name: "coursesNewForm",

  initialState: {
    loading: false,
    error: null,
    fieldsFormInput: [],
    step: 1,

    // 🔹 Store all form values dynamically
    formValues: {},
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

    // 🔹 Update form value
    updateFormValue: (state, action) => {
      const { name, value } = action.payload;
      state.formValues[name] = value;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(getFormFields.pending, (state) => {
        state.loading = true;
      })

      .addCase(getFormFields.fulfilled, (state, action) => {
        state.loading = false;
        state.fieldsFormInput = action.payload;
      })

      .addCase(getFormFields.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(uploadFormFFirestore.pending, (state) => {
        state.loading = true;
      })

      .addCase(uploadFormFFirestore.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(uploadFormFFirestore.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { nextStep, prevStep, setStep, updateFormValue } =
  courseNewFormSlice.actions;

export default courseNewFormSlice.reducer;