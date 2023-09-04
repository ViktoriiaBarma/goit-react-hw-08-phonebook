import { Container, MainBlock,NavBlock  } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

// export const Layout = ({ children }) => {
//   return (
//     <Container>
//       <MainBlock>{children}</MainBlock>
//     </Container>
//   );
// };


const Layout = () => {
  return (
    <>
          <Container>
      <NavBlock  >
        <AppBar />
      </NavBlock>

        <MainBlock >
        <Suspense
          fallback={
           <Loader/>
          }
        >
          <Outlet />
        </Suspense>
      </MainBlock>
        </Container>
    </>
  );
};

export default Layout;