import styled from 'styled-components';

export const PageNf = styled.div`
  text-align: center;
  color: red;
  height: 700px;
  padding-top: 200px;
  font-weight: 700;
  text-shadow: 0 -0.4px 0.4px #ffffff, 0.4px 0.4px 0.4px #00000031;

  h1 {
    margin-bottom: 10px;
    text-align: center;
    color: red;

    font-size: 44px;
    letter-spacing: 1.5px;

    @media screen and (min-width: 480px) {
      font-size: 150px;
    }
  }
  p {
    font-size: 24px;
    letter-spacing: 1.5px;
    text-transform: uppercase;

    @media screen and (min-width: 480px) {
      font-size: 54px;
      letter-spacing: 1.5px;
    }
  }
`;

export const Wrap = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;