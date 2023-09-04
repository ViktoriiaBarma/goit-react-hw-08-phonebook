import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { userLogOut } from 'redux/auth/auth-operations';
import { Wrapper, Btn} from './UserMenu.styled';

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(userLogOut());

  return (
    <Wrapper>
      <p>{user.name}</p>
      <Btn
        type="button"
        onClick={handleLogOut}
      >
        LogOut 
      </Btn>
    </Wrapper>
  );
};

export default UserMenu;