import styled from 'styled-components';

export const Form = styled.form``;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 16px;

    @media screen and (min-width: 768px) {
      margin-top: 24px;
    }

    @media screen and (min-width: 1280px) {
      margin-top: 26px;
    }
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

export const Span = styled.span`
  margin-bottom: 8px;

  font-size: 14px;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  width: 100%;
  height: 44px;
  padding: 14px;
  justify-content: center;
  align-items: center;
  margin-top: 16px;

  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: inherit;
  letter-spacing: inherit;

  color: #ffffff;
  background-color: #162d3a;
  border: 1px solid transparent;
  border-radius: 12px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transition: background-color 250ms ease-in-out, transform 250ms ease-in-out;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    height: 52px;
    padding: 16px;
    margin-top: 24px;

    font-size: 20px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 26px;
  }

  ${props => {
    if (!props.disabled) {
      return `&:hover {
        background-color: #0c1421;
        transform: scale(1.01);
  }`;
    }
  }}
`;
