import styled from 'styled-components';
import imgSmall from './home@1x.jpg';
import imgBig from './home@2x.jpg';

export const Wrapper = styled.div`
  display: flex;
  padding-top: 24px;
  padding-bottom: 24px;

  @media screen and (max-width: 767.98px) {
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 768px) {
    padding-top: 48px;
    padding-bottom: 48px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 81px - 2 * 24px - 180px);

  @media screen and (min-width: 768px) {
    max-width: 352px;
    width: 100%;
    height: calc(100vh - 81px - 2 * 48px);
  }

  @media screen and (min-width: 1280px) {
    max-width: 608px;
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 38px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
  }
`;

export const AfterTitle = styled.div`
  margin-top: 24px;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-top: 48px;
  }
`;

export const TextLittle = styled.i`
  display: block;
  margin-top: 8px;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const TextBig = styled.span`
  display: block;
  font-size: 24px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }

  & ~ & {
    margin-top: 8px;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 180px;

  @media screen and (min-width: 768px) {
    max-width: 352px;
    width: 100%;
    height: calc(100vh - 81px - 2 * 48px);
  }

  @media screen and (min-width: 1280px) {
    max-width: 608px;
    width: 100%;
  }

  background-image: url(${imgSmall});
  background-color: #162d3a;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${imgBig});
  }
`;
