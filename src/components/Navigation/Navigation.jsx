// import { useSelector } from "react-redux";
import { List, Item, Link } from './Navigation.styled';
// import {
//     selectIsLoggedIn
//   } from 'redux/auth/selectors';

const Navigation = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <List>
        <Item>
          <Link to="/">Home</Link>
        </Item>
        <Item>
          {/* {isLoggedIn && (<Link to="/contacts">Contacts</Link>)} */}
          <Link to="/contacts">Contacts</Link>
        </Item>
      </List>
    </nav>
  );
};

export default Navigation;
