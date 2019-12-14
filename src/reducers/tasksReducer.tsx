import * as ActionTypes from "../constants/tasks";
import { fromJS } from 'immutable';

const INITIAL_STATE =  fromJS({
    isLoading: false,
    tasks: []
});

export default (state = INITIAL_STATE, action:any) => {
    switch (action.type) {
        case ActionTypes.FETCH_TASKS_IS_LOADING:
            return Object.assign({}, state, {
                isLoading: action.isLoading,
            });
            case  ActionTypes.FETCH_TASKS_SUCCESS:
                return {
                    ...state,      
                     tasks: action.payload
                };
        default:
            return state;
    }
};