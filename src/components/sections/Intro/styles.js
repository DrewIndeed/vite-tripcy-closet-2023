import styled from "styled-components";

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10vh;
  z-index: 200;
  flex: 1;

  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  overflow: hidden;

  .svg-wrapper {
    transform: scale(0.25);

    @media (min-width: 500px) {
      transform: scale(0.3);
    }
  }

  .header {
    width: 100%;
    position: absolute;
    bottom: 35vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    font-size: 2em;

    @media (min-width: 500px) {
      font-size: 3.5em;
    }
  }
`;
