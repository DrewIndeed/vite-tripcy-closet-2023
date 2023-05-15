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
    scroll-behavior: smooth;
    animation-delay: 3300ms;
  }

  @keyframes scrollable {
    to {
      overflow-y: auto;
    }
  }
`;
