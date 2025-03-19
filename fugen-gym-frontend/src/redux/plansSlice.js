import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/plans';

// Async thunks
export const fetchPlans = createAsyncThunk('plans/fetchPlans', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const updatePlan = createAsyncThunk('plans/updatePlan', async ({ id, name, price }) => {
  const response = await axios.put(`${API_URL}/${id}`, { name, price });
  return response.data;
});

export const deletePlan = createAsyncThunk('plans/deletePlan', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

// Slice
const plansSlice = createSlice({
  name: 'plans',
  initialState: {
    plans: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlans.fulfilled, (state, action) => {
        state.plans = action.payload;
      })
      .addCase(updatePlan.fulfilled, (state, action) => {
        const index = state.plans.findIndex(plan => plan._id === action.payload._id);
        if (index !== -1) {
          state.plans[index] = action.payload;
        }
      })
      .addCase(deletePlan.fulfilled, (state, action) => {
        state.plans = state.plans.filter(plan => plan._id !== action.payload);
      });
  }
});

export default plansSlice.reducer;
