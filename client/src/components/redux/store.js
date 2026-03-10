import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import postsReducer from '../Thunk/PostsDataSlice'
import { postsApi } from '../RTKQuery/services/postsApi'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        [postsApi.reducerPath] : postsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware)
})