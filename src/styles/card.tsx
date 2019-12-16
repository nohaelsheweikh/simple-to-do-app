import styled from "styled-components";

export const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content:center
`
export const Date = styled.h5`
  font-size: 1rem;
  font-weight: 300;
  margin: 2rem;
  color:  "white" ;
  text-align: center;
`;
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  margin: 2rem;
  color:  "white" ;
  text-align: center;
`;
export const Card = styled.div`
  position:relative
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 250px;
  background-color: #c4b2a9;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;

  a{
    
  }
`;

export const Description = styled.p`
  color: white;
  text-align: center;
`;

export const CreateButtonWrapper = styled.div`
padding:3%
`


export const CreateButton = styled.div`
  background-color: #0088CC;
  text-align:center
  border: 1px solid #dbdbdb;
  color: #FFFFFF;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  padding: 5px 9px;
  text-transform: capitalize;
  font-size: 14px;
  margin-left: 20px;
  width:100px
`;

export const ADDTaskButton = styled.div`
  
    color: #f32013;
    cursor: pointer;
    font-weight: 600;
    font-size: 2em;
    position: absolute;
    top: 10px;
    right: 10px


 
`;


export const DeleteTaskButton = styled.div`
  
    color: #f32013;
    cursor: pointer;
    font-weight: 600;
    font-size: 2em;
    display:flex
    left: 10px


 
`;

