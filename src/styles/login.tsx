import styled from "styled-components";
export const StyledContainer =styled.body`
    width: 100%;
    display:flex;
`
export const StyledLogin = styled.div`
  margin:3%
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 60%;
  height: 300px;
  margin: 0 auto;
  border: 2px solid #000;
  border-radius: 20px;
  background: #eee;

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    text-align:center
  }
  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
  }

  
`;

export const StyledInput= styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  width:80%
  margin:2%
  padding: 9px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;
  &:active,
  &:focus {
    text-align: left;
  }
`
export const StyledButton = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  color: ${props => (props ? 'violet' : 'palevioletred')};
  border: ${props =>
    props ? '2px solid violet' : '2px solid palevioletred'};
  margin:12px 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    color: white;
    background-color: ${props =>
      props ? 'violet' : 'palevioletred'};
  }
`;