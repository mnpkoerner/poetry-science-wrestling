// import { combineReducers } from 'redux';

const postsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_POSTS':
        console.log(action.payload)
        return action.payload;
      default:
        return state;
    }
  };


  export default postsReducer
