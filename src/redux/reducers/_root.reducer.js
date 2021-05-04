import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import posts from './blog.posts.reducer'
import nasa from './nasa.reducer'



const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  posts,
  nasa,

});

export default rootReducer;
