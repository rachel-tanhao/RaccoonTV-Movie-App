import { createSlice } from '@reduxjs/toolkit'; // Redux Slice

// Redux Slice for the current genre or category
export const genreOrCategory = createSlice({

  name: 'genreOrCategory',

  // Initial state of the genre or category
  initialState: {
    genreIdOrCategoryName: '',
    page: 1,
    searchQuery: '',
  },

  // Reducers for the genre or category
  reducers: {
    selectGenreOrCategory: (state, action) => {
      state.genreIdOrCategoryName = action.payload;
      state.searchQuery = '';
    },
    searchMovie: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { selectGenreOrCategory, searchMovie } = genreOrCategory.actions;

export default genreOrCategory.reducer;