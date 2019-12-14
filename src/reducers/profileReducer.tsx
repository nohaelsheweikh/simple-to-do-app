import* as ActionTypes from "../constants/profile";
import { fromJS } from 'immutable';

const INITIAL_STATE =  fromJS({
   
    user: {}
});

export default (state = INITIAL_STATE, action:any) => {
    switch (action.type) {
        
        case ActionTypes.FETCH_USER_IS_LOADING:
            return Object.assign({}, state, {
                isLoading: action.isLoading,
            });
           
        case ActionTypes.FETCH_USER_SUCCESS:
            return{
                user:action.payload
            }
          

      
       
        default:
            return state;
    }
};