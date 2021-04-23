import { combineReducers } from 'redux';

const rhyme = (state = '', action) => {
    if(action.type == 'SET_RHYME'){
        return action.payload
    }
    else{
        return state;
    }
}

const synonym = (state = '', action) => {
    if(action.type == 'SET_SYNONYM'){
        return action.payload
    }
    else {
        return state;
    }
}


export default combineReducers({
    rhyme,
    synonym
})
