import styled from "styled-components";

export const Container = styled.div`
display:block;
align-items: center;
flex-wrap: wrap;
  
`
export const CardsListWrapper = styled.div`
display:flex;
align-items: center;
justify-content:center
`
export const SearchWrapper = styled.div`
width:100%
display: flex;
align-items: center;
justify-content:center
`
export const StyledInput= styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  width:70%
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

export const HiddenButton = styled.button`
  display:none
  
`;

