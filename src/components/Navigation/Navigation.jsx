import { useAuth } from 'hooks/useAuth';
import {  NavLink,Navigate } from './Navigation.styled';
import { FcContacts } from 'react-icons/fc';
// import { useDispatch } from 'react-redux';
// import { userLogOut } from 'redux/auth/auth-operations';
// import { userLogIn } from 'redux/auth/auth-operations';
// import { RiLogoutBoxRLine } from 'react-icons/ri'
// import { StyledButton } from 'components/ContactForm/ContactForm.styled';

// export const Navigation = () => {
//   const { isLoggedIn } = useAuth();

//   return (
//     <Nav>
//       <NavLink to="/">Home</NavLink>
//       {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
//     </Nav>
//   );
// };

const Navigation = () => {
  const { isLoggedIn } = useAuth();


  return (

      <Navigate>
        <div>
          <NavLink to="/">
            <FcContacts />
          </NavLink>
        </div>
        <div>
          <div>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? 'rgb(79, 70, 229)' : 'black',
              })}
              to="/"
            >
              Home
            </NavLink>

            {isLoggedIn && (
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? 'rgb(79, 70, 229)' : 'black',
                })}
                to="/contacts"
               
              >
                Contacts
              </NavLink>
            )}
          </div>
         
        </div>
      </Navigate>

  )
}
export default Navigation;