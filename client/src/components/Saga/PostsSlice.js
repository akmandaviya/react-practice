import { createSlice } from '@reduxjs/toolkit'

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: null
  },
  reducers: {
    fetchPostsRequest: (state) => {
      state.loading = true
    },
    fetchPostsSuccess: (state, action) => {
      state.loading = false
      state.posts = action.payload
    },
    fetchPostsFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFailure
} = postsSlice.actions

export default postsSlice.reducer