import { 
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    SET_CURRENT_USER 
} from "../constants/auth";
import isEmpty from 'lodash/isEmpty'
import { fromJS } from 'immutable';

const INITIAL_STATE =  fromJS({
    isAuthenticated: null,
    user: {}
});

export default (state = INITIAL_STATE, action:any) => {
    switch (action.type) {
        
     case SET_CURRENT_USER :
         return{
             
                isAuthenticated :!isEmpty(action.user),
                    user:action.user
                }
           
        case LOGIN_SUCCESS:
            return{
                user:action.payload
            }
          

        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
       
        default:
            return state;
    }
};