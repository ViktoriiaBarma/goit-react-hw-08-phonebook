import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  margin: 0 auto;
    padding: 40px 15px;
  width: 100%;
     background-color: #c9c4cd;
`;

export const MainBlock = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;

  width: 100%;
`;

export const NavBlock = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`; 