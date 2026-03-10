import { call, put, takeLatest } from 'redux-saga/effects'
import {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFailure
} from './PostsSlice'

const baseURL = import.meta.env.VITE_APP_API_URL

function fetchPostsApi() {
  return fetch(`${baseURL}/posts`).then(res => res.json())
}

function* fetchPostsSaga() {
  try {
    const data = yield call(fetchPostsApi)
    yield put(fetchPostsSuccess(data))
  } catch (error) {
    yield put(fetchPostsFailure(error.message))
  }
}

export function* watchPostsSaga() {
  yield takeLatest(fetchPostsRequest.type, fetchPostsSaga)
}