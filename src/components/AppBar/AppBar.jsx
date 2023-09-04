import NavbarAuth from 'components/NavbarAuth/NavbarAuth';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { NavConteiner } from 'components/Navigation/Navigation.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <NavConteiner>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <NavbarAuth />}
      </NavConteiner>
    </>
  );
};
export default AppBar;