import * as ActionTypes from "../constants/tasks";
import history from "../utils/history"
import axios from 'axios'
let moment = require('moment');


export function isLoading(isLoading: boolean) {
    return {
      type: typeof ActionTypes.FETCH_TASKS_IS_LOADING,
     isLoading
    };
  }


  export const handleCreateCategory = (category:string,details:Text) => {
      let id = Date.now() + Math.floor(Math.random())
      let newDate =  moment(new Date()).format('DD-MM-YYYY')
      let jsonData=
        {
          "id":id,
          "category": category,
          "tasks": [
            {
              "date": newDate,
              "name": details
            }
          ]
        }
      
    return async(dispatch:any) => {
      const response = await axios.post( 'http://localhost:3001/data',jsonData) 
      if(response.status === 201){
        dispatch({
          type:ActionTypes.CREATE_TASKS_SUCCESS, 
        });
      history.push('/')
    }
    else{
      dispatch({
          type:ActionTypes.CREATE_TASKS_HAS_ERROR,
          payload: "creating error"
      });
   }
  } 
}

  export const handleUpdateTask = (id:any,task:Text) => {
    return async(dispatch:any) => {
    // let newDate =  moment(new Date()).format('DD-MM-YYYY')
   let newTask = {

     "date": moment(new Date()).format('DD-MM-YYYY'),
     "name": task
   }
    const response = await axios.get( `http://localhost:3001/data/${id}`) 
    if(response.status === 200){
      let data = response.data
      data.tasks.push(newTask)
      const res = await axios.put( `http://localhost:3001/data/${id}`,data) 
      if(res.status === 200){
        dispatch({
          type:ActionTypes.UPDATE_TASK_SUCCESS, 
        });
      history.push('/')
  }
  }else{
      dispatch({
        type:ActionTypes.UPDATE_TASK_HAS_ERROR,
        payload: "creating error"
      });
    }
  } 
}
  
  export const deleteTask = (categoryId:number,id:number) => {  
    return async(dispatch:any) => {
      // let newDate =  moment(new Date()).format('DD-MM-YYYY')
     
      const response = await axios.get( `http://localhost:3001/data/${categoryId}`) 
      console.log('responase',response.data)
      if(response.status === 200){
        let data = response.data
        data.tasks.pop(id)
        console.log("data", data);
      
      const res = await axios.put( `http://localhost:3001/data/${categoryId}`,data) 
  
      if(res.status === 200){
          dispatch({
            type:ActionTypes.DELETE_TASKS_SUCCESS, 
          });
            dispatch(fetchTasks())
        }
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


export const fetchTasksByDate = (Date:any) => {  
  let date = moment(Date).format('DD-MM-YYYY')
  return async(dispatch:any) => {
      dispatch(isLoading(true));
      const response = await axios.get( `http://localhost:3001/data/?q=${date}`) 
      if(response.status === 200){
      dispatch({
          type:ActionTypes.FETCH_TASKS_BY_DATE_SUCCESS,
          payload: response.data
      });
      dispatch(isLoading(false));
   }else{
      dispatch({
          type:ActionTypes.FETCH_TASKS_BY_DATE_HAS_ERROR,
          payload: "fetching error"
      });
      dispatch(isLoading(false));
   }
  }
};