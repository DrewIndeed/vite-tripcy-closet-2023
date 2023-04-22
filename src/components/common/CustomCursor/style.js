import styled from "styled-components";

export const CursorWrapper = styled.div`
  .main-cursor,
  .secondary-cursor {
    z-index: 10000;
    pointer-events: none;
    transform: translate3d(0, 0, 0);
    position: fixed;
    mix-blend-mode: exclusion;
  }

  .main-cursor {
    transition: opacity 1s cubic-bezier(0.77, 0, 0.175, 1);
    animation: fadeIn 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;

    .cursor-background {
      width: ${(props) => `${props.theme.cursor.main}px`};
      height: ${(props) => `${props.theme.cursor.main}px`};
      background: ${(props) => props.theme.colors.sup3};
      border-radius: 50%;
    }
  }

  .secondary-cursor {
    width: ${(props) => `${props.theme.cursor.second}px`};
    height: ${(props) => `${props.theme.cursor.second}px`};

    .cursor-background {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 1px solid ${(props) => props.theme.colors.sup3};
      position: relative;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
