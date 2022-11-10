import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import Product from "../models/productModal";
import { BASE_URL } from "../api";
import { CUSTOM_CATYGORY } from "./categoriesSlice";

interface ProductsContainer {
  products: Product[];
  message: string;
}

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (data, thunkApi) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_URL_TOKEN}`,
        },
      };

      const response = await axios.get<ProductsContainer>(
        `${BASE_URL}/products`,
        config
      );

      return response.data.products;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

interface ProductState {
  loading: boolean;
  error: string | null;
  data: Product[] | null;
  filterBy: string;
}

const initialState = {
  loading: false,
  error: null,
  data: null,
  filterBy: CUSTOM_CATYGORY.ALL.name,
} as ProductState;

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterBy(state, action) {
      state.filterBy = action.payload;
    },
    deleteProduct(state, action) {
      state.data =
        state.data && state.data.filter((p) => p._id !== action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(
        getProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(getProducts.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

const { actions } = productsSlice;

export const { filterBy, deleteProduct } = actions;

export default productsSlice.reducer;
