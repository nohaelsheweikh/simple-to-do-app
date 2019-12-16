import React,{FC} from "react";
import {StyledLogin,StyledButton,StyledTextArea} from '../../styles/login'
import {RouteComponentProps} from 'react-router-dom'

type PageProps = {} & RouteComponentProps<{id: string}>;


export const Page: FC<PageProps> = props => {
    console.log('page', props)
    return (
      <h4>This is {props.match.params.id} Page.</h4>
    )
  };

  

const UpdateForm = (props:any) => {
  return (
     
        <form onSubmit={props.onSubmit}>
          <StyledLogin>
             <h2>Add Task</h2>
                {Page}
            <StyledTextArea rows={20} cols={5} placeholder="Details" onChange={props.onChange} name="details" />
            <StyledButton>Save</StyledButton>
          </StyledLogin>
         </form>
         
  )
};

export default UpdateForm;
