import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/TMDB'; // movie database API
import genreOrCategoryReducer from '../features/currentGenreOrCategory';
import userReducer from '../features/auth';
 
// A reducer in React is like a decision-maker in a factory. 
// It takes in two things: the current state (the factory's current status) and 
// an action (a change request), and then decides how to update the state based on that action. 
// The action is like an instruction, such as "add a new product" or "remove an item." 
// The reducer function processes the instruction and returns the updated state, 
// just like how a factory updates its production line. 
// It's used with `useReducer` to manage complex state changes in React.

// It's called a "reducer" because it "reduces" a series of actions into a single result 
// — the updated state. Think of it like a process where multiple instructions (actions) 
// are combined or reduced down into one final outcome (the new state). 
// The name comes from a concept in functional programming, 
// where a "reducer" is a function that takes an accumulator and a value, 
// and returns a new accumulator — in React, that accumulator is the state.


export default configureStore({
  reducer: {
    // [tmdbApi.reducerPath]: tmdbApi.reducer,
    // currentGenreOrCategory: genreOrCategoryReducer,
    // user: userReducer,
  },
});