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
function* getPost(action) {
    try{
        console.log('in get post saga')
        const response = yield axios.get('/api/blog');
        console.log('response from getting blog:', response)
        yield put({type: 'SET_POSTS', payload: response.data})
    }
    catch (error) {
        console.error('error with getting blog posts', error)
    }
}





function* blogSaga() {
    yield takeLatest('NEW_POST', newPost);
    yield takeLatest('GET_POSTS', getPost)
  }

  export default blogSaga;
