import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  & + & {
    margin-left: 50px;
  }
`;

// export const Nav = styled.nav`
//   padding-top: 8px;
//   padding-bottom: 8px;
//   display: flex;
//   align-items: center;
// `;

export const Link = styled(NavLink)`
  /* padding: 8px 16px;
  border-radius: 2px;
  font-size: 18px;
  font-weight: 400;
  line-height: 13px;
  text-transform: uppercase;
  color: inherit; */

  display: inline-flex;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 32px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: inherit;

  &.active {
    color: #1e4ae9;
  }
`;
