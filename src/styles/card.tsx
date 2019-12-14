import styled from "styled-components";

export const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
`
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  margin: 1rem;
  color:  "white" ;
  text-align: center;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 250px;
  height: 250px;
  background-color: #c4b2a9;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;
`;

export const Description = styled.p`
  color: white;
  text-align: center;
`;