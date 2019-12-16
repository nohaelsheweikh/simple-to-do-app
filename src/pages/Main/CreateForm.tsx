import React from "react";
import {StyledLogin,StyledInput,StyledButton,StyledTextArea} from '../../styles/login'

const CreateForm = (props:any) => {
  return (
     
        <form onSubmit={props.onSubmit}>
          <StyledLogin>
             <h2>Create Category</h2>
            <StyledInput type="text" placeholder="Category" onChange={props.onChange} name="category"/>
            <StyledTextArea rows={20} cols={5} placeholder="Details" onChange={props.onChange} name="details" />
            <StyledButton>Save</StyledButton>
          </StyledLogin>
         </form>
         
  )
};

export default CreateForm;
