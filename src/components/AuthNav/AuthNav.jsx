import { List, Item, Link } from './AuthNav.styled';

const AuthNav = () => {
  return (
    // <div>

    //   <Link to="/register">Register</Link>
    //   <Link to="/login">Log In</Link>
    // </div>

    <List>
      <Item>
        <Link to="/register">Register</Link>
      </Item>
      <Item>
        <Link to="/login">Log In</Link>
      </Item>
    </List>
  );
};

export default AuthNav;
