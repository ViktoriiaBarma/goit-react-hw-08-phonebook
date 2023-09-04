import styled from 'styled-components';

export const CloseBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  padding-top: 5px;
  padding-bottom:5px;
  padding-left: 5px;
  padding-right: 5px;

  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 50%;
  color: black;
  background-color: transparent;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    box-shadow: inset -1px -1px 1px #ffffff, inset 1px 1px 1px #8e9aaf;

   
  }
`;


export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
`
export const Content = styled.div`
  position: absolute;
  
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 200px;
  width: 600px;
  max-width: 95%;
  padding: 80px 32px;
  background-color: #fff;
  border-radius: 3px;
`