import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Category } from "../../types/Category.dto";

interface CategoryState {
  items: Category[];
  loading: boolean;
}

const initialState: CategoryState = {
  items: [],
  loading: false,
};

// ✅ Async thunk to fetch categories from EscuelaJS API
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await axios.get("https://api.escuelajs.co/api/v1/categories");
    return response.data; 
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchCategories.fulfilled,
        (state, action) => {
          state.items = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchCategories.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default categorySlice.reducer;
