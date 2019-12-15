import React from "react";
import * as styles from "../../styles/card"
import { Container, CardsListWrapper} from "../../styles/tasks"
import history from "../../utils/history"
import { IoMdTrash} from 'react-icons/io';
import _ from 'lodash';

  

const TasksList = (props:any) =>{
  if(!props.tasksList){
    return <h4>is loading</h4>
  }
  return (
    <Container>
       <styles.CreateTaskButtonWrapper>
         <styles.CreateTaskButton onClick={() => history.push('./create')}>Create Task</styles.CreateTaskButton>
       </styles.CreateTaskButtonWrapper> 
      <CardsListWrapper>
        <styles.CardContainer>  
        {
         props.tasksList.map((task:any, index:number) => {
              return  (
              <styles.Card key={index} >
            
              <styles.DeleteTaskButton onClick={() => props.deleteTask(task.id)}>
                  <IoMdTrash       
                  />
              </styles.DeleteTaskButton>
                <styles.Title>{task.category}</styles.Title>
                    {task.tasks.map((task:any, index:number) => {
                  return(
                      <>
                        <styles.Date>{task.date}</styles.Date>
                        <styles.Description>{task.name}</styles.Description>
                      </>

                    )}
                  )}
                
              </styles.Card>
        
          )})}
        </styles.CardContainer>
      </CardsListWrapper>
  </Container>
  )
};

export default TasksList;
