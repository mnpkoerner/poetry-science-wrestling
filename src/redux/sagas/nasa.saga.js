import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getPhoto(action) {
    try {
        console.log('in nasa photo saga')
        if (action.payload) {
            const response = yield axios.get(`/api/nasa/photo/${action.payload}`)
            console.log('nasa response:', response)
            yield put({ type: 'SET_PHOTO', payload: response })
        }
        else {
            const response = yield axios.get('/api/nasa/photo')
            console.log('nasa response:', response)
            yield put({ type: 'SET_PHOTO', payload: response })
        }
    } catch (error) {
        console.error('error from getPhoto saga:', error)
    }
}


function* nasaSaga() {
    yield takeLatest('GET_PHOTO', getPhoto)
}

export default nasaSaga;
