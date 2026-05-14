import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",

  initialState: {
    ids: [],
  },

  reducers: {
    add(state, action) {
      console.log(action);
      if (!state.ids.includes(action.payload.id))
        state.ids.push(action.payload.id);
    },

    remove(state, action) {
      state.ids = state.ids.filter((id) => id != action.payload.id);
    },
  },
});

export const { add, remove } = favoriteSlice.actions;

export default favoriteSlice.reducer;
