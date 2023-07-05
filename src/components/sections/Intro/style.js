import styled from "styled-components";

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 15vh;
  z-index: 200;
  flex: 1;
  will-change: transform;

  width: 100%;
  height: 100dvh;
  position: fixed;
  top: 0;
  overflow: hidden;

  animation: noheight 400ms linear forwards;
  animation-delay: 3.8s;

  @media (min-width: 376px) {
    padding-bottom: 10vh;
  }

  .svg-wrapper {
    transform: scale(0.1);

    @media (min-width: 500px) {
      transform: scale(0.15);
    }
  }

  .header {
    width: 100%;
    position: absolute;
    bottom: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 300;
    font-size: 2em;

    @media (min-width: 500px) {
      font-size: 3.5em;
      bottom: 35%;
    }
  }

  @keyframes noheight {
    to {
      height: 0;
      transform: translateY(-100%);
    }
  }
`;
