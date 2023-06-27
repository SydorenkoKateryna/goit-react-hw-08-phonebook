import styled from 'styled-components';

export const FormWrapper = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding-top: 48px;
    padding-bottom: 48px;
    width: 340px;
  }

  @media screen and (min-width: 1280px) {
    width: 388px;
  }
`;

export const ContactListWrapper = styled.section`
  padding-bottom: 24px;

  @media screen and (min-width: 768px) {
    padding-bottom: 48px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;
