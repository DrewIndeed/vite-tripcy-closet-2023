import styled from "styled-components";

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10vh;
  z-index: 200;
  flex: 1;

  height: 100vh;
  position: relative;
  overflow: hidden;

  .svg-wrapper {
    transform: scale(0.25);
    animation: blurOutHard 2s ease-in-out forwards;
    animation-delay: 3s;

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

    animation: blurOutLight 2s ease-in-out forwards;
    animation-delay: 3s;

    @media (min-width: 500px) {
      font-size: 3.5em;
    }
  }

  @keyframes blurOutLight {
    from {
      filter: blur(0);
    }
    to {
      filter: blur(2rem);
    }
  }

  @keyframes blurOutHard {
    from {
      filter: blur(0);
    }
    to {
      filter: blur(10rem);
    }
  }
`;
