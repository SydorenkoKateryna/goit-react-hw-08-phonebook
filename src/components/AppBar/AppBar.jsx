import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import { Wrapper } from './AppBar.styled';

// import {
//     selectIsLoggedIn
//   } from 'redux/auth/selectors';

const AppBar = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Wrapper>
      <Navigation />
      {/* {isLoggedIn ? <UserMenu/> : <AuthNav/>} */}
      {false ? <UserMenu /> : <AuthNav />}
    </Wrapper>
  );
};

export default AppBar;
