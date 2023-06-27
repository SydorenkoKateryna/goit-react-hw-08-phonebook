import styled from 'styled-components';

export const FilterWrapper = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 340px;
    margin-right: auto;
  }

  @media screen and (min-width: 1280px) {
    width: 388px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  padding: 14px;

  border: 1px solid #d4d7e3;
  border-radius: 8px;
  background-color: #f3f7fb;
  font-size: 14px;

  color: #162d3a;
  transition: border-color 250ms ease-in-out;

  &:focus {
    border-color: #162d3a;
    outline: transparent;
  }

  &::placeholder {
    color: #8897ad;
  }

  @media screen and (min-width: 768px) {
    height: 48px;
    padding: 16px;

    font-size: 16px;
  }
`;
