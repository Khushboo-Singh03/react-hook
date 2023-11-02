import { combineReducers } from 'redux';
import userReducer from '../store/userSlice';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;