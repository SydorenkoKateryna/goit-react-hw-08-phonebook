import styled from 'styled-components';

export const Item = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 8px;
  border: 1px solid #d4d7e3;
  border-radius: 8px;
  box-shadow: 4px 8px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 16px;

  transition: background-color 250ms ease-in-out, transform 250ms ease-in-out,
    border-color 250ms ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: rgb(30, 74, 233, 0.2);
    border-color: rgb(30, 74, 233, 0.6);
    transform: scale(1.05);
  }

  @media screen and (min-width: 768px) {
    width: calc((100% - 24px) / 2);
    font-size: 18px;
  }

  @media screen and (min-width: 1280px) {
    width: calc((100% - 2 * 26px) / 3);
  }
`;

export const Name = styled.p`
  max-width: 220px;

  @media screen and (min-width: 768px) {
    max-width: 280px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 320px;
  }
`;

export const Number = styled.p`
  margin-top: 8px;
`;

export const Button = styled.button`
  padding: 0;
  position: absolute;
  top: 8px;
  right: 8px;

  color: #162d3a;
  background-color: transparent;
  border: 1px solid transparent;
  transition: color 250ms ease-in-out;

  cursor: pointer;

  &:hover,
  &:focus {
    color: #0c1421;
  }
`;
