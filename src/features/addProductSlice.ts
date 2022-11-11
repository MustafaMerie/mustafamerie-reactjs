import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../api";
import { ProductSubmitModal } from "../models/productSubmitModal";

interface addProductContainer {
  status: string;
  message: string;
}

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product: ProductSubmitModal | undefined, thunkApi) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_URL_TOKEN}`,
        },
      };

      const response = await axios.post<addProductContainer>(
        `${BASE_URL}/products`,
        product,
        config
      );

      return response.data.message;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

interface addProductState {
  loading: boolean;
  error: string | null;
  message: string | null;
}

const initialState = {
  loading: false,
  error: null,
  message: null,
} as addProductState;

const addProductSlice = createSlice({
  name: "add Product",
  initialState,
  reducers: {
    addProductReset(state){
      state.message = ''
    }
  },
  extraReducers(builder) {
    builder
      .addCase(addProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addProduct.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(addProduct.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

const { actions } = addProductSlice;

export const { addProductReset } = actions;


export default addProductSlice.reducer;
