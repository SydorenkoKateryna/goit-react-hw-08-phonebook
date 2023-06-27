import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LoginWrapper = styled.div`
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

export const AfterTitle = styled.p`
  margin-top: 16px;

  font-size: 12px;
  line-height: 1.4;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    margin-top: 28px;

    font-size: 17px;
  }
`;

export const LinkWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 5px;

  font-size: 16px;

  @media screen and (min-width: 768px) {
    margin-top: 48px;

    font-size: 18px;
  }
`;

export const Text = styled.p``;

export const LinkStyled = styled(Link)`
  color: #1e4ae9;
`;
