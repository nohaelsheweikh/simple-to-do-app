import React from "react";
import {StyledLogin,StyledInput,StyledButton} from '../../styles/login'

const LoginForm = (props:any) => {
  return (
     
        <form onSubmit={props.onSubmit}>
          <StyledLogin>
             <h2>Login</h2>
            <StyledInput type="text" placeholder="text" onChange={props.onChange} name="username"/>
            <StyledInput type="password" placeholder="password" onChange={props.onChange} name="password" />
            <StyledButton>Login</StyledButton>
          </StyledLogin>
         </form>
         
  )
};

export default LoginForm;
