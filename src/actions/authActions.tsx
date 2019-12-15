import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
} from "../constants/auth";
import history from "../utils/history"



  export function logout() {
    return (dispatch:any) => {
      localStorage.removeItem('jwtToken');
      history.push('/login')
    }
  }
  const LoginFakeData =()=>{
    return{

      "email": "admin@gmail.com",
      "username": "Admin",
      "phone":"54317899",
      "age":"29",
      "hobbies":"Tennis , Videogames , Reading"
  
    }
   
  } 
export const login =  (
 username: string,password:string)=> (dispatch:any) => {
        console.log(LoginFakeData)
        if(username=='Admin'&&password=='54321'){
            
            const token:any = 'sdfghj456fgh657ghj567yuh67yughh6g'

            localStorage.setItem('jwtToken',token);
            localStorage.setItem('User',JSON.stringify(LoginFakeData()));
            dispatch ({
              type:LOGIN_SUCCESS,
              });
           history.push('/profile')
        }else{
            dispatch({
                type: LOGIN_FAIL,
                payload:"Wrong Username or Password "
            });
        }
             
};