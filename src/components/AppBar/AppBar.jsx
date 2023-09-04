import NavbarAuth from 'components/NavbarAuth/NavbarAuth';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Nav } from 'components/Navigation/Navigation.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Nav>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <NavbarAuth />}
      </Nav>
    </>
  );
};
export default AppBar;