import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const baseURL = import.meta.env.VITE_APP_API_URL

// Async thunk
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await fetch(`${baseURL}/posts`)
    const data = await response.json()
    return data
  }
)

const postsDataSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: null
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false
        state.posts = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export default postsDataSlice.reducer