import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Navigate = styled.div`
display: flex;

`


export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const NavLink = styled(Link)`
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
  color: #000;
  font-size: 14px;

  font-weight: 500;

  &:hover,
  &:focus {
    box-shadow: inset -1px -1px 3px #fff, inset 1px 1px 3px rgba(0, 0, 0, 0.1);
  }

  &.active {
    outline: none;

    box-shadow: inset -1px -1px 3px #fff, inset 1px 1px 3px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in-out;

    background-color: transparent;
    color: red;

    cursor: pointer;
  }
`;