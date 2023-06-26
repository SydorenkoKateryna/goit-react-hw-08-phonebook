import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'store/auth/selectors';
import { List, Item, Link } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <List>
        <Item>
          <Link to="/">Home</Link>
        </Item>
        <Item>{isLoggedIn && <Link to="/contacts">Contacts</Link>}</Item>
      </List>
    </nav>
  );
};

export default Navigation;
