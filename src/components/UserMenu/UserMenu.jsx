// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
// import {
//     selectUser
//   } from 'redux/auth/selectors';
// import { Wrapper, Username, Button} from "./UserMenu.styled";
import { Wrapper } from "./UserMenu.styled";

const UserMenu = () => {
//   const dispatch = useDispatch();
//   const user = useSelector(selectUser);

  return (
    <Wrapper>
      {/* <Username>Welcome, {user.name}</Username>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button> */}
      Welcome
    </Wrapper>
  );
};

export default UserMenu;
