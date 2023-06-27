import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-left: auto;

  @media screen and (max-width: 767.98px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
    max-width: 120px;
  }
`;

export const Username = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.1666666667;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: #0c1421;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.14;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  min-width: 80px;
  height: 30px;
  justify-content: center;
  align-items: center;

  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.1666666667;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: #ffffff;
  background-color: #0c1421;
  border: 1px solid transparent;
  border-radius: 12px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    min-width: 120px;
    font-size: 14px;
    line-height: 1.14;
  }
`;
