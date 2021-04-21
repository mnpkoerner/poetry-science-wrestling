import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getPhoto () {
    console.log('in nasa saga')
    const response = yield axios.get('/api/nasa/photo')
    console.log('nasa response:', response)
    yield put({type: 'SET_PHOTO', payload: response})
}


function* nasaSaga() {
    yield takeLatest('GET_PHOTO', getPhoto)
}

export default nasaSaga;
