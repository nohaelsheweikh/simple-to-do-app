import React ,{useEffect,useState}from "react";
import * as styles from "../../styles/card"
import { 
    Container,
    CardsListWrapper,
    HiddenButton,
    StyledInput,
    SearchWrapper
  } from "../../styles/tasks"
import history from "../../utils/history"
import { IoMdTrash} from 'react-icons/io';
import _ from 'lodash';

  

const TasksList = (props:any) =>{
  const [tasks,setTasks] = useState([props.tasks]);
  useEffect(() => setTasks(props.tasks), [props.tasks]);


  if(!props.tasksList){
    return <h4>is loading</h4>
  }
  return (
    <Container>
       <styles.CreateTaskButtonWrapper>
         <styles.CreateTaskButton onClick={() => history.push('./create')}>Create Task</styles.CreateTaskButton>
       </styles.CreateTaskButtonWrapper> 

      
          <form onSubmit={props.fetchTasksByDate}>
          <HiddenButton>Search</HiddenButton> 
            <SearchWrapper>
              <StyledInput type="date" onChange={props.onChange} name="date"/>
            </SearchWrapper>
          </form>

      <CardsListWrapper>
        <styles.CardContainer>  
        {
          tasks||props.tasksList.map((task:any, index:number) => {
              return  (
              <styles.Card key={index}>
                <styles.DeleteTaskButton onClick={() => props.deleteTask(task.id)}>
                    <IoMdTrash       
                    />
                </styles.DeleteTaskButton>
                  <styles.Title>{task.category}</styles.Title>
                      {task.tasks.map((task:any, index:number) => {
                    return(
                        <div key={index}>
                          <styles.Date>{task.date}</styles.Date>
                          <styles.Description>{task.name}</styles.Description>
                      </div>

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
