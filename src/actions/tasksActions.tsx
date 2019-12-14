import * as ActionTypes from "../constants/tasks";
import history from "../utils/history"
import axios from 'axios'


export function isLoading(isLoading: boolean) {
    return {
      type: typeof ActionTypes.FETCH_TASKS_IS_LOADING,
     isLoading
    };
  }


  export const handleCreateTask = (category:string,details:Text) => {
      let id = Date.now() + Math.random()

    let jsonData={
      "id":id,
      "category":{
         "name":category
      },
      "task_name":details
   }
   console.log('jsonData',jsonData)
    return async(dispatch:any) => {
      const response = await axios.post( 'http://localhost:3001/data',jsonData) 
      console.log('data',response)
      if(response.status === 201){
        dispatch({
          type:ActionTypes.CREATE_TASKS_SUCCESS, 
        });
      dispatch(isLoading(false));
      history.push('/main')
   }else{
      dispatch({
          type:ActionTypes.CREATE_TASKS_HAS_ERROR,
          payload: "creating error"
      });
      dispatch(isLoading(false));
   }
  }
  
  }

  export const fetchTasks = () => {  
    return async(dispatch:any) => {
        dispatch(isLoading(true));
        const response = await axios.get( 'http://localhost:3001/data') 
        console.log('data',response)
        if(response.status === 200){
        dispatch({
            type:ActionTypes.FETCH_TASKS_SUCCESS,
            payload: response.data
        });
        dispatch(isLoading(false));
     }else{
        dispatch({
            type:ActionTypes.FETCH_TASKS_HAS_ERROR,
            payload: "fetching error"
        });
        dispatch(isLoading(false));
     }
    }
};