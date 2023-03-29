import styled from "styled-components";

export const CombinatorWrapper = styled.section`
  position: relative;
  display: flex;
  height: 100vh;
  overflow-y: hidden;
  scroll-snap-type: y mandatory;
  animation: openScroll 100 linear forwards;
  animation-delay: 6s;

  .jump {
    position: absolute;
    min-height: 100vh;
    flex: 1;
  }

  .welcome-content {
    scroll-snap-align: start;
    height: 100vh;
    width: 100%;
    z-index: 20;
    flex: 1;
    font-size: 8em;
  }

  @keyframes openScroll {
    from {
      overflow-y: hidden;
    }
    to {
      overflow-y: scroll;
    }
  }
`;
