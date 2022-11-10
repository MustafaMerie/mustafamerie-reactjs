import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../api";
import Category from "../models/categoryModal";

interface CatygoriesContainer {
  categories: Category[];
  message: string;
}

export const CUSTOM_CATYGORY = {
  ALL: {
    _id: "all_catygories",
    name: "All",
  },
};

export const getCatygories = createAsyncThunk(
  "catygories/getCatygories",
  async (data, thunkApi) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_URL_TOKEN}`,
        },
      };

      const response = await axios.get<CatygoriesContainer>(
        `${BASE_URL}/categories`,
        config
      );
      return response.data.categories;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

interface CategoryState {
  loading: boolean;
  error: string | null;
  data: Category[] | null;
}

const initialState = {
  loading: false,
  error: null,
  data: null,
} as CategoryState;

const catygoriesSlice = createSlice({
  name: "catygories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCatygories.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(
        getCatygories.fulfilled,
        (state, action: PayloadAction<Category[]>) => {
          state.loading = false;
          state.data = [
            ...action.payload,
            { _id: CUSTOM_CATYGORY.ALL._id, name: CUSTOM_CATYGORY.ALL.name },
          ];
        }
      )
      .addCase(getCatygories.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default catygoriesSlice.reducer;
