import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    IS_AUTHANTICATED ,
    SET_CURRENT_USER
} from "../constants/auth";
import history from "../utils/history"
import jwt from 'jsonwebtoken'


export function setCurrentUser(user: any) {
    return {
      type: typeof SET_CURRENT_USER,
      user
    };
  }

export const isAuthanticated = (bool: any) => {
    return {
        type: typeof IS_AUTHANTICATED ,
        isAuthanticated: bool
    }
  };
  export function logout() {
    return (dispatch:any) => {
      localStorage.removeItem('jwtToken');
      dispatch(setCurrentUser({}));
      history.push('/login')
    }
  }
  
export const login =  (
 username: string,password:string)=> (dispatch:any) => {
        console.log('clicked')
        if(username=='Admin'&&password=='54321'){
            // let user={  
            //     "email": "admin@gmail.com",
            //     "first_name": "Admin",
            //     "phone":"54317899"
            // }
            const token:any = 'sdfghj456fgh657ghj567yuh67yughh6g'

            localStorage.setItem('jwtToken',token);
            localStorage.setItem('User', username);
            dispatch ({
              type:LOGIN_SUCCESS,
              payload: username
              });
            dispatch(setCurrentUser(jwt.decode(token)));
           history.push('/profile')
        }else{
            dispatch({
                type: LOGIN_FAIL
            });
            isAuthanticated(false)
        }
            
   
};