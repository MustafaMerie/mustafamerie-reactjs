import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import Product from "../models/productModal";
import { BASE_URL } from "../api";

interface ProductContainer {
  product: Product;
  message: string;
}

export const getProduct = createAsyncThunk(
  "products/getProductById",
  async (id: string | undefined, thunkApi) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_URL_TOKEN}`,
        },
      };

      const response = await axios.get<ProductContainer>(
        `${BASE_URL}/products/${id}`,
        config
      );

      return response.data.product;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

interface ProductState {
  loading: boolean;
  error: string | null;
  data: Product | null;
}

const initialState = {
  loading: false,
  error: null,
  data: null,
} as ProductState;

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(
        getProduct.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(getProduct.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
