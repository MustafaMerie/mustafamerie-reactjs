import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/productSlice";
import productsSlice from "./features/productsSlice";
import catygoriesSlice from './features/categoriesSlice'

const store = configureStore({
  reducer: { productsSlice, productSlice, catygoriesSlice }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;