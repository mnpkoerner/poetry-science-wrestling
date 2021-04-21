import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import blogSaga from './blog.saga'
import nasaSaga from './nasa.saga'

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    blogSaga(),
    nasaSaga(),
  ]);
}
