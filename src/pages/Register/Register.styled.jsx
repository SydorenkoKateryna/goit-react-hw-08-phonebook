import styled from 'styled-components';

export const RegisterWrapper = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 388px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 48px;
    padding-bottom: 48px;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;

export const Title = styled.b`
  font-size: 24px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;
