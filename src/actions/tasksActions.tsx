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
    return async(dispatch:any) => {
      const response = await axios.post( 'http://localhost:3001/data',jsonData) 
      if(response.status === 201){
        dispatch({
          type:ActionTypes.CREATE_TASKS_SUCCESS, 
        });
      history.push('/main')
    }else{
      dispatch({
          type:ActionTypes.CREATE_TASKS_HAS_ERROR,
          payload: "creating error"
      });
   }
  }
  
  }

  export const deleteTask = (id:any) => {  
    return async(dispatch:any) => {
        const response = await axios.delete( `http://localhost:3001/data/${id}`,id) 
        if(response.status === 200){
        dispatch({
            type:ActionTypes.DELETE_TASKS_SUCCESS,
           
        });
        dispatch(fetchTasks())
     }else{
        dispatch({
            type:ActionTypes.DELETE_TASKS_HAS_ERROR,
            payload: "deleting error"
        });
     }
    }
};

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