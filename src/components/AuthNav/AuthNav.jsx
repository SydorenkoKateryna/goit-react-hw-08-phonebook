import { List, Item, Link } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <List>
      <Item>
        <Link to="/register">Sign up</Link>
      </Item>
      <Item>
        <Link to="/login">Log In</Link>
      </Item>
    </List>
  );
};

export default AuthNav;
