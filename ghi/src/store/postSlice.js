import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

export const postSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    setPosts: (state, { payload }) => {
      state.posts = payload.data;
    },
  },
});

export default postSlice.reducer;

export const { setPosts } = postSlice.actions;
