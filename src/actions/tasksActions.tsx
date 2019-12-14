import * as ActionTypes from "../constants/tasks";
// import history from "../utils/history"
import axios from 'axios'


export function isLoading(isLoading: boolean) {
    return {
      type: typeof ActionTypes.FETCH_TASKS_IS_LOADING,
     isLoading
    };
  }


  export const handleCreateTask = (category:string,details:Text) => {

    let jsonData={
      "category":{
         "name":category
      },
      "task_name":details
   }
   console.log('jsonData',jsonData)
    return async(dispatch:any) => {
     let Data = JSON.stringify(jsonData)
      let res = await  axios.post('http://localhost:3000/data.json',Data, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
        }
      })
     
  
  
    dispatch({
      type:ActionTypes.CREATE_TASKS_SUCCESS,
      payload:res
    });
    }
  }

  export const fetchTasks = () => {  
    return async(dispatch:any) => {
        dispatch(isLoading(true));
        const response = await axios.get('data.json') 
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