import styled from "styled-components";

export const AppWrapper = styled.main`
  width: 100%;
  height: 100%;
`;

export const MobileMainContent = styled.div`
  width: 100%;

  @media (max-width: 1207px) {
    height: 100vh;
    overflow-y: auto;
  }

  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  }
`;
