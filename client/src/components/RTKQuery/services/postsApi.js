import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseURL = import.meta.env.VITE_APP_API_URL

export const postsApi = createApi({
  reducerPath: 'postsApi',

  baseQuery: fetchBaseQuery({
    baseUrl: `${baseURL}`
  }),

  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts'
    })
  })
})

export const { useGetPostsQuery } = postsApi
