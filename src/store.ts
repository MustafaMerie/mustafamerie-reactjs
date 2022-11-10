import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/productSlice";
import productsSlice from "./features/productsSlice";

const store = configureStore({
  reducer: { productsSlice, productSlice }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;