import styled from "styled-components";

export const AboutWrapper = styled.section`
  width: 100%;
  height: 100vh;
  font-size: 8em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .content {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    background-color: ${(props) => `${props.theme.colors.bg2}`};
  }
`;
