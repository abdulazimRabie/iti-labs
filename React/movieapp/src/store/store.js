import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./reducers/favoriteReducrer";

const store = configureStore({
  reducer: {
    favorite: favoriteSlice,
  },
});

export default store;
