import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from '../api/posts.api';


const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    isLoading: true,
    error_msg: "",
  },
  reducers: {
    posts_fetched: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    like_added: (state, action) => {
      // state.data = 
    }
  }
});

export default postsSlice.reducer;
const { posts_fetched } = postsSlice.actions;
export const { like_added } = postsSlice.actions;


export const fetchPosts = () => async (dispatch) => {
  const data = await getPosts();
  dispatch(posts_fetched(data));
}



