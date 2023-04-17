import styled from "styled-components";

export const AppWrapper = styled.main`
  .jump {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }

  .main-nav {
    top: 0;
    position: absolute;
    z-index: 35;
    width: 100vw;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;

    /* TEMP */
    border: 1px solid brown;
  }

  .socials-nav {
    left: 0;
    position: absolute;
    z-index: 30;
    height: 100vh;
    width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;

    /* TEMP */
    border: 1px solid brown;
  }

  .app {
    width: 100%;
    height: 100%;
  }
`;
