import { createSlice } from "@reduxjs/toolkit";
import { fetchCourse } from "./courseListSilce";


const searchFilterSlice = createSlice({
  name: "itemsSearch",

  initialState: {
    filterSearchItem: "",
    loading: false,
    // CourseDataState: [],
    error: null,
    uploaded: false,
  },

  reducers: {
    setFilterSearch: (state, action) => {
      state.filterSearchItem = action.payload;
    },

    clearFilterSearch: (state) => {
      state.filterSearchItem = "";
    },
  },

//   extraReducers: (builder) => {
//     builder

//       // fetch
      
//       .addCase(fetchCourse.pending, (state) => {
//         state.loading = true;
//       })

//       .addCase(fetchCourse.fulfilled, (state, action) => {
//         state.loading = false;
//         state.CourseDataState = action.payload;
//       })

//       .addCase(fetchCourse.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
});

export const {
  setFilterSearch,
  clearFilterSearch,
} = searchFilterSlice.actions;

export default searchFilterSlice.reducer;