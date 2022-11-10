import { createSlice } from "@reduxjs/toolkit";
import Product from "../models/productModal";
import { CUSTOM_CATYGORY } from "./categoriesSlice";

interface FavoritesState {
  loading: boolean;
  filterBy: string;
  data: Product[] | null;
}

const initialState = {
  loading: false,
  filterBy: CUSTOM_CATYGORY.ALL.name,
  data: JSON.parse(localStorage.getItem("favorites") as string) ?? [],
} as FavoritesState;

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action) {
      state.data && state.data.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.data));
    },
    removeFromFavorites(state, action) {
      let newFavorites =
        state.data && state.data.filter((p) => p._id !== action.payload);
      state.data = newFavorites;
      localStorage.setItem("favorites", JSON.stringify(state.data));
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
