import { createSlice } from "@reduxjs/toolkit";

import type { Post } from "@types";

export interface PostRootState {
  socialMedia: PostState;
}

export interface PostState {
  post: Post;
}

const initialState: PostState = {
  post: {
    id: "djjd388282j2i29i2973",
    content: "Hello World",
    likes: 0,
  },
};

export const postSlice = createSlice({
  name: "socialMediaPost",
  initialState,
  reducers: {
    likePost: (state) => {
      state.post.likes++;
    },
  },
});
