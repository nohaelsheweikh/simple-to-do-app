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
import { IoMdTrash,IoMdAdd} from 'react-icons/io';

  

const TasksList = (props:any) =>{
  const [tasks,setTasks] = useState([props.tasks]);
  useEffect(() => setTasks(props.tasks), [props.tasks]);


  if(!props.tasksList){
    return <h4>is loading</h4>
  }
  return (
    <Container>
       <styles.CreateButtonWrapper>
         <styles.CreateButton onClick={() => history.push('./create')}>Create Category</styles.CreateButton>
       </styles.CreateButtonWrapper> 

      
          <form onSubmit={props.fetchTasksByDate}>
          <HiddenButton>Search</HiddenButton> 
            <SearchWrapper>
              <StyledInput type="date" onChange={props.onChange} name="date"/>
            </SearchWrapper>
          </form>

      <CardsListWrapper>
        <styles.CardContainer>  
        {
          tasks||props.tasksList.map((category:any, index:number) => {
            
              return  (
              <styles.Card key={index} >
                <styles.ADDTaskButton>
                  <IoMdAdd 
                   color={'green'} 
                   onClick={() =>history.push(`/task/${category.id}`)}
                   />
                </styles.ADDTaskButton>
                  <styles.Title>{category.category}</styles.Title>
                      {category.tasks.map((task:any, index:number) => {
                    return(
                        <div key={index}>
                         
                          <styles.Date>
                          <IoMdTrash 
                          color={"red"}
                          onClick={() => props.deleteTask(category.id,task.id)}      
                            />{task.date}</styles.Date>
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
