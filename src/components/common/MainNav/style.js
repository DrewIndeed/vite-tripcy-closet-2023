import styled from "styled-components";

export const MainNavWrapper = styled.div`
  top: 0;
  position: absolute;
  z-index: 35;
  width: 100vw;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  /* TEMP */
  border: 1px solid brown;

  nav {
    width: 100%;
    height: 100%;
    display: flex;
    gap: 1rem;

    div {
      background: red;
    }
  }
`;
