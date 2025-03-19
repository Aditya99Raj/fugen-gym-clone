import { configureStore } from '@reduxjs/toolkit';
import plansReducer from './plansSlice'; // Import your slice

const store = configureStore({
  reducer: {
    plans: plansReducer,
  },
});

export default store;
