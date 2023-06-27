import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { logOut } from 'store/auth/operations';
import { selectUser } from 'store/auth/selectors';
import { Wrapper, Username, Button } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Wrapper>
      <Username>{user.name}</Username>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </Button>
    </Wrapper>
  );
};

export default UserMenu;
