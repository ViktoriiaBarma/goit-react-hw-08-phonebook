import { useAuth } from 'hooks/useAuth';
import { NavLink, Nav } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? 'rgb(6, 58, 54)' : 'white',
        })}
        to="/"
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? 'rgb(6, 58, 54)' : 'white',
          })}
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </Nav>
  );
};
export default Navigation;
