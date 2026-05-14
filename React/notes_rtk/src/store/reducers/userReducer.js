import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await fetch("https://dummyjson.com/users/1");
  const data = await response.json();
  return data;
});

const userReducer = createSlice({
  name: "user",
  initialState: {
    user: null,

    isLoggedIn: false,
    isLoading: false,

    error: null,
  },

  reducers: {
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
        state.isLoggedIn = false;
      })

      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.error = null;
        state.user = action.payload;
      })

      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { login, logout } = userReducer.actions;

export default userReducer.reducer;
