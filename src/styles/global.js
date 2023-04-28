import styled from "styled-components";

export const AppWrapper = styled.main`
  width: 100%;
  height: 100%;
`;

export const MobileMainContent = styled.div`
  width: 100%;

  @media (max-width: 1207px) {
    height: 100vh;
    overflow-y: hidden;
    animation: scrollable 200ms linear forwards;
    animation-delay: 3300ms;
  }

  div {
    width: 100%;
    height: 100vh;
    color: cyan;
    background-color: #000;
    font-size: 6em;
  }

  @keyframes scrollable {
    to {
      overflow-y: auto;
    }
  }
`;