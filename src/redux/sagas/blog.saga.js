import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* newPost(action) {
    try{
        console.log('in post saga')
        const response = yield axios.post('/api/blog', action.payload);
        console.log('response from posting blog:', response)
    }
    catch (error) {
        console.error('error with posting new blog:', error)
    }
}





function* blogSaga() {
    yield takeLatest('NEW_POST', newPost);
  }

  export default blogSaga;
