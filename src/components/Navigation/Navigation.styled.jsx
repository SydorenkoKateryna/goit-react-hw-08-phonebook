import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  & + & {
    margin-left: 50px;

    @media screen and (max-width: 767.98px) {
      margin-left: 16px;
    }
  }
`;

export const Link = styled(NavLink)`
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
