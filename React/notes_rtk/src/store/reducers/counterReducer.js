import { createSlice } from "@reduxjs/toolkit";

const counterReducer = createSlice({
  name: "counter",
  initialState: { count: 0 },

  reducers: {
    increment(state, action) {
      state.count += action.payload.amount;
    },

    decrement(state, action) {
      state.count -= action.payload.amount;
    },
  },
});

export const { increment, decrement } = counterReducer.actions;
export default counterReducer.reducer;
