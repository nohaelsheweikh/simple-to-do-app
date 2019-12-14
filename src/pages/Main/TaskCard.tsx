import React from "react";
import * as styles from "../../styles/card"
import {
  CreateTaskButton,
  CreateTaskButtonWrapper,
  Container,DeleteTaskButton,DeleteWrapper} from "../../styles/tasks"
import history from "../../utils/history"

const Card = (props:any) =>{
  if(!props.tasksList){
    return <h4>is loading</h4>
  }
  return (
    <Container>
       <CreateTaskButtonWrapper>
       <CreateTaskButton onClick={() => history.push('./main/create')}>Create Task</CreateTaskButton>
      </CreateTaskButtonWrapper> 
    <styles.CardContainer>  
     {
       props.tasksList.map((task:any, index:number) => {
          return  (
          <styles.Wrapper key={index} >
            <styles.Title>{task.category.name}</styles.Title>
            <styles.Description>{task.task_name}</styles.Description>
            <DeleteWrapper>
             <DeleteTaskButton onClick={() => props.deleteTask(task.id)}>Delete Task</DeleteTaskButton>
            </DeleteWrapper>
          </styles.Wrapper>
     
       )})}
    </styles.CardContainer>
  </Container>
  )
};

export default Card;
