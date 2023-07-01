import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1200;
`;

export const ModalStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 280px;
  width: 100%;
  max-height: calc(100vh - 80px);
  padding: 20px;

  background-color: #ffffff;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    max-width: 404px;
    width: 100%;
    max-height: calc(100vh - 40px);
    padding: 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 484px;
    width: 100%;
    padding: 48px;
  }
`;
