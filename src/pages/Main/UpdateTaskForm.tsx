import React from "react";
import {StyledLogin,StyledButton,StyledTextArea} from '../../styles/login'





  

const UpdateForm = (props:any) => {
  return (
     
        <form onSubmit={props.onSubmit}>
          <StyledLogin>
             <h2>Add Task</h2>
            <StyledTextArea rows={20} cols={5} placeholder="Details" onChange={props.onChange} name="details" />
            <StyledButton>Save</StyledButton>
          </StyledLogin>
         </form>
         
  )
};

export default UpdateForm;
