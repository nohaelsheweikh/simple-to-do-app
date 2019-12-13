import React from "react";
import * as styles from "../../styles/card"

const Card = (props:any) =>{
  if(!props.tasksList){
    return <h4>is loading</h4>
  }
  return (
    <styles.Container>   
     {
       props.tasksList.map((task:any, index:number) => {
          return  (
          <styles.Wrapper key={index} >
            <styles.Title>{task.Category.name}</styles.Title>
            <styles.Description>{task.task_name}</styles.Description>
          </styles.Wrapper>
     
       )})}
    </styles.Container>
  )
};

export default Card;
