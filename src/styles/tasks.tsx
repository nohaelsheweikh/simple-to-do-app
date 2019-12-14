import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  display:block;
  align-items: center;
`
export const CardContainer = styled.div`
width: 20%;
border: 2px solid #000;
border-radius: 20px;
margin:20px
`;
export const Category = styled.h5`

padding:1%
display: flex;

`



export const CreateTaskButtonWrapper = styled.div`
padding:3%
`
export const DeleteWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 250px;
height: 250px;
padding: 1rem;
margin: 1rem;
`
export const DeleteTaskButton = styled.div`
  background-color: #f32013;
  border: 1px solid #dbdbdb;
  color: #FFFFFF;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  padding: 5px 9px;
  text-align:center
  text-transform: capitalize;
  font-size: 14px;
  margin-left: 20px;
  width:100px
`;
export const CreateTaskButton = styled.div`
  background-color: #33b5e5;
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
export const CardBody = styled.img`
cursor: pointer;
width: 33%;
`;