import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import counterReducer from './counter/counterSlice'
import postsReducer from '../Thunk/PostsDataSlice'
import postSagaReducer from '../Saga/PostsSlice'
import { postsApi } from '../RTKQuery/services/postsApi'
import rootSaga from '../Saga/rootSaga'

const sagaMiddleWare = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        postData: postSagaReducer,
        [postsApi.reducerPath] : postsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(postsApi.middleware).concat(sagaMiddleWare)
})

sagaMiddleWare.run(rootSaga)