import { styled } from 'styled-components';
    
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;


  }
`;

export const Content = styled.p`
  font-weight: 500;
  color: white;
`;


export const Btn = styled.button`
  padding: 4px 8px;
  border: none;
  outline: none;
  border-radius: 8px;
  color: rgb(255, 255, 255);
  background-color: #C4A7E7;
  box-shadow: rgba(0, 0, 0, 0.24) 10px 10px 5px 0px;
  transition: all 0.2s ease-in-out 0s;

  &:hover,
  &:focus {
    background-color: #8974a1;
    color: rgb(6, 58, 54);
    box-shadow: rgb(255, 255, 255) -2px -2px 5px, rgb(139, 167, 147) 2px 2px 5px;
  }
`;