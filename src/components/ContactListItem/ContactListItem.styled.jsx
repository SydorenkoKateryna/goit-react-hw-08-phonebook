import styled from 'styled-components';

export const Item = styled.li`
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

  @media screen and (min-width: 768px) {
    width: calc((100% - 24px) / 2);
    font-size: 18px;
  }

  @media screen and (min-width: 1280px) {
    width: calc((100% - 2 * 26px) / 3);
  }
`;

export const Name = styled.p``;

export const Number = styled.p`
  margin-top: 8px;
`;

export const Button = styled.button`
  display: inline-flex;
  min-width: 100px;
  height: 30px;
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
  transition: background-color 250ms ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #0c1421;
  }

  @media screen and (min-width: 768px) {
    min-width: 120px;
    height: 40px;
    margin-top: 24px;

    font-size: 20px;
  }
`;
