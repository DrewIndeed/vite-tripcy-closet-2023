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

  .menu-close {
    color: #ffffff;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    padding: 5px;
    margin: 1rem 1rem 0 0;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.6s ease;
    border: 1px solid #ffffff00;
    z-index: 100;

    :hover {
      border: 1px solid #ffffff90;
    }

    .menu-close-icon {
      width: 3.5rem;
      height: 3.5rem;
    }
  }

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
      flex: 2;
    }
  }

  .normal-width {
    animation: normal-width 0.4s ease-in-out forwards;
  }
  @keyframes normal-width {
    from {
      flex: 2;

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
  color: ${(props) => props.theme.colors.typo1};
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
      margin-left: 5.5rem;
      font-size: 3em;
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
    position: absolute;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    color: #ffffff;
    text-transform: uppercase;
    transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

    /* temp */
    /* border: 2px solid cyan; */
  }

  #images {
    /* background-color: lime; */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    padding-block: 1rem;

    .normal {
      border: 3px solid ${({ theme }) => theme.colors.typo3};
      animation: to-normal 0.4s ease-in-out forwards;
    }

    .darker {
      border: 0px solid transparent;
      animation: to-darker 0.4s ease-in-out forwards;
    }

    .container {
      width: 3rem;
      height: 3rem;
      border-radius: 0.4rem;
      @media ${devices.laptopL} {
        width: 4rem;
        height: 4rem;
      }
      /* background-color: cyan; */
      background-color: ${({ theme }) => theme.colors.out2};
      overflow: hidden !important;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 0;
      }
    }

    @keyframes to-normal {
      from {
        filter: brightness(0.6);
      }
      to {
        filter: brightness(1);
      }
    }

    @keyframes to-darker {
      from {
        filter: brightness(1);
      }
      to {
        filter: brightness(0.6);
      }
    }
  }
`;
