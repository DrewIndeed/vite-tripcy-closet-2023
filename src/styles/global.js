import styled from "styled-components";

export const AppWrapper = styled.main`
  width: 100%;
  height: 100%;
  /* css overkill baselines start */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    /* border: 2px solid greenyellow; */
  }

  html {
    font-family: "Cochin", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    overscroll-behavior: hidden;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  img,
  button,
  li,
  a,
  ul {
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  button:hover {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }

  .c-scrollbar {
    display: none;
  }
  /* css overkill baselines end */

  /* utils */
  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  }
  /* utils */
`;

export const MobileMainContent = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;

  /* css overkill baselines start */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    /* border: 2px solid greenyellow; */
  }

  html {
    font-family: "Cochin", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    overscroll-behavior: hidden;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  img,
  button,
  li,
  a,
  ul {
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  button:hover {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }

  .c-scrollbar {
    display: none;
  }
  /* css overkill baselines end */

  /* utils */
  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  }
  /* utils */
`;
