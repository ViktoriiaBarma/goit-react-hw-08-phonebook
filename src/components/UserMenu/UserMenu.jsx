import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { userLogOut } from 'redux/auth/auth-operations';
import { Wrapper, Btn, Content} from './UserMenu.styled';

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(userLogOut());

  return (
    <Wrapper>
      <Content>{user.name}</Content>
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