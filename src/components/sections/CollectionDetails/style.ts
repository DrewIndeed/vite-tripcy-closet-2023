import styled from "styled-components";
import { devices } from "@styles/themes";
import { motion } from "framer-motion";

type ProductItemWrapperType = {
  isLastAnimDone?: boolean;
  isClicked?: boolean;
};

export const CollectionDetailsWrapper = styled(motion.div)`
  width: 100%;
  opacity: 0;
  height: -webkit-fill-available;
  height: 100dvh;
  background-color: ${(props) => props.theme.colors.typo1};

  position: absolute;
  top: 0;
  bottom: 0;
  left: 100%;
  right: 0;
  z-index: 100;

  overflow-y: auto;
  scroll-snap-type: y mandatory;

  .row {
    width: 100%;
    height: 100dvh;
    scroll-snap-align: start;
    /* font-size: 8em; */

    display: flex;
    align-items: center;
    gap: 4px;
  }

  .anim-width {
    animation: anim-width 0.4s ease-in-out forwards;
  }
  @keyframes anim-width {
    to {
      flex: 1.5;
    }
  }

  .normal-width {
    animation: normal-width 0.4s ease-in-out forwards;
  }
  @keyframes normal-width {
    from {
      flex: 1.5;

      to {
        flex: 1;
      }
    }
  }
`;

export const ProductCardWrapper = styled(motion.div)`
  flex: 1;
  height: 100%;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
  background-color: ${(props) => props.theme.colors.out2};
`;

export const ProductItemWrapper = styled.div<ProductItemWrapperType>`
  cursor: ${({ isLastAnimDone }) => (isLastAnimDone ? "pointer" : "auto")};

  .img-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: ${({ isClicked }) => (isClicked ? "-120%" : 0)};
    left: 0;

    background-color: ${(props) => props.theme.colors.typo3};
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

    .item-order {
      transform: scaleY(1.2);
      margin-left: 1.5rem;
      font-size: 5em;
      @media ${devices.laptopL} {
        font-size: 6em;
      }
    }

    .item-name {
      /* border: 2px solid lime; */
      margin-top: 72dvh;
      margin-left: 7.5rem;
      font-size: 3.5em;
      @media ${devices.laptopL} {
        margin-top: 70dvh;
        margin-left: 9.5rem;
        font-size: 4em;
      }

      white-space: nowrap;
      word-break: break-word;

      text-transform: uppercase;
      font-family: "Cochin Bold";
      /* font-weight: bold; */

      /* transform: scaleY(1.4); */
      transform: rotate(-90deg) scaleY(1.4);
    }
  }
  :hover .img-overlay {
    top: ${({ isLastAnimDone }) => (isLastAnimDone ? "-120%" : 0)};
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);

    transform: ${({ isClicked }) => (isClicked ? "scale(1)" : "scale(1)")};
    filter: ${({ isClicked }) =>
      isClicked ? "brightness(1)" : "brightness(0.75)"};
    @media ${devices.laptopM} {
      transform: ${({ isClicked }) => (isClicked ? "scale(1)" : "scale(1)")};
      filter: ${({ isClicked }) =>
        isClicked ? "brightness(1)" : "brightness(0.25)"};
    }
  }
  :hover img {
    transform: scale(1);
    filter: brightness(1);
  }

  .item-copy {
    width: 100%;
    height: 100%;
    position: absolute;

    display: flex;
    flex-direction: column;

    color: #ffffff;
    text-transform: uppercase;
    transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

    /* temp */
    /* border: 2px solid cyan; */
  }
  /* :hover .item-copy {
      color: #ffffff;
    } */

  @media ${devices.laptopM} {
    color: ${(props) => props.theme.colors.typo1};
  }
`;
