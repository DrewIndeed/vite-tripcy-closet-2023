import styled from "styled-components";

export const AppMainContent = styled.main`
  background-color: ${(props) => props.theme.colors.bg2};
`;
export const MobileMainContent = styled.main`
  width: 100%;
  height: -webkit-fill-available;
  height: 100dvh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  background-color: ${(props) => props.theme.colors.bg2};
`;
