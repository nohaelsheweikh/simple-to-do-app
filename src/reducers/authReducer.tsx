import { 
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
} from "../constants/auth";
import { fromJS } from 'immutable';

const INITIAL_STATE =  fromJS({
    error:""
});

export default (state = INITIAL_STATE, action:any) => {
    switch (action.type) {
        
    
        case LOGIN_SUCCESS:
            return{
                user:action.payload
            }
          
        case LOGIN_FAIL:
            return{
                error:action.payload
            }
        case LOGOUT_SUCCESS: 
        default:
            return state;
    }
};