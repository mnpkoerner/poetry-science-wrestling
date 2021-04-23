import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getRhyme(action) {
    try {
        console.log('in getRhyme saga with payload', action.payload)
            const response = yield axios.get(`/api/words/${action.payload}`)
            console.log('rhyme response:', response)
            yield put({ type: 'SET_RHYME', payload: response })
    } catch (error) {
        console.error('error from getRhyme saga:', error)
    }
}


function* wordsSaga() {
    yield takeLatest('GET_RHYME', getRhyme);
    yield takeLatest('GET_SYNONYM', getSynonym)
}

export default wordsSaga;
