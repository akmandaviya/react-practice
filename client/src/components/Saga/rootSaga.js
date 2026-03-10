import { all } from 'redux-saga/effects'
import { watchPostsSaga } from './PostsSaga'

export default function* rootSaga() {
  yield all([
    watchPostsSaga()
  ])
}