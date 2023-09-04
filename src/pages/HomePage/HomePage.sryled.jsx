import styled from 'styled-components';

export const Title = styled.h1`
  margin-top: 50px;
  text-align: center;
  color: white;
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  font-size: 36px;
  font-weight: 700;

  padding: 10px;

  &:hover,
  &:focus {
    background-color: #8974a1;
    
    box-shadow: rgb(255, 255, 255) -2px -2px 5px, rgb(139, 167, 147) 2px 2px 5px;
    border-radius:10px;
  }
`;