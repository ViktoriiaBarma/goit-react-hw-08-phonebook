import { NavLink } from './NavbarAuth.styled';
import { CiLogin } from 'react-icons/ci'

const NavbarAuth = () => {
  return (
    <>
      <div >
        <NavLink
          to="/login"
        >
          Log in <span><CiLogin/></span>
        </NavLink>
      </div>
    </>
  );
};

export default NavbarAuth;