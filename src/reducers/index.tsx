import { combineReducers } from 'redux'
import authReducer from './authReducer';
import tasksReducer from './tasksReducer'
import profileReduser from './profileReducer'

export default combineReducers({
   auth:authReducer ,
   tasksReducer:tasksReducer,
   profile:profileReduser

});
