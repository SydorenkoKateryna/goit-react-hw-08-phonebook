import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  margin-left: auto;

  @media screen and (max-width: 767.98px) {
    flex-wrap: wrap;
    max-width: 50px;
  }
`;

export const Item = styled.li`
  & + & {
    margin-top: 10px;
  }

  @media screen and (min-width: 768px) {
    & + & {
      margin-top: 0;
      margin-left: 50px;
    }
  }
`;

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

  @media screen and (max-width: 767.98px) {
    font-size: 12px;
    line-height: 1.1666666667;
    padding-top: 0;
    padding-bottom: 0;
  }

  &.active {
    color: #1e4ae9;
  }
`;
