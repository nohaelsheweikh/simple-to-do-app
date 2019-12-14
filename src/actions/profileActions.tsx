import * as ActionTypes from "../constants/profile";


export function isLoading(isLoading: boolean) {
    return {
      type: typeof ActionTypes.FETCH_USER_IS_LOADING,
     isLoading
    };
  }



export const fetchProfile = () => {  
    return async(dispatch:any) => {
        dispatch(isLoading(true));
        let response = await localStorage.getItem('User') 
          
        if(response){
            let user =JSON.parse(response)

        dispatch({
            type:ActionTypes.FETCH_USER_SUCCESS,
            payload: user
        });
        dispatch(isLoading(false));
     }else{
        dispatch({
            type:ActionTypes.FETCH_USER_HAS_ERROR,
            payload: "fetching error"
        });
        dispatch(isLoading(false));
     }
    }
};