import styled from 'styled-components';

export const AddNewContactWrapper = styled.div`
  padding-top: 24px;
  padding-bottom: 16px;

  @media screen and (min-width: 768px) {
    padding-top: 48px;
    padding-bottom: 24px;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 26px;
  }
`;

export const ContactListWrapper = styled.section`
  padding-bottom: 24px;

  @media screen and (min-width: 768px) {
    padding-bottom: 48px;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;

  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.1666666667;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: #ffffff;
  background-color: #162d3a;
  border: 1px solid transparent;
  border-radius: 12px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transition: background-color 250ms ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #0c1421;
  }

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 14px;
    line-height: 1.14;
  }
`;
