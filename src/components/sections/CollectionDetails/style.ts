import styled from "styled-components";
import { devices } from "@styles/themes";
import { motion } from "framer-motion";

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
`;

export const ProductCardWrapper = styled(motion.div)`
  flex: 1;
  height: 100%;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
  background-color: ${(props) => props.theme.colors.out2};

  .item-wrapper {
    .img-overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      top: -100%;
      left: 0;

      background-color: ${(props) => props.theme.colors.typo3};
      transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

      @media ${devices.laptopM} {
        top: 0;
      }

      .item-name {
        /* border: 2px solid lime; */
        margin-top: 83dvh;
        margin-left: 9.5rem;

        white-space: nowrap;
        word-break: break-word;

        text-transform: uppercase;
        font-family: "Cochin Bold";
        font-weight: bold;

        /* transform: scaleY(1.4); */
        transform: rotate(-90deg) scaleY(1.4);

        font-size: 3em;
        @media ${devices.laptopL} {
          font-size: 4em;
        }
      }
    }
    :hover .img-overlay {
      top: -100%;
    }

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(1);
      filter: brightness(0.9);
      transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);

      @media ${devices.laptopM} {
        transform: scale(1.5);
        filter: brightness(1);
      }
    }
    :hover img {
      transform: scale(1);
      filter: brightness(0.8);
    }

    .item-copy {
      width: 100%;
      height: 100%;
      position: absolute;

      /* margin-top: 20vh;
      padding-left: 2rem; */

      display: flex;
      flex-direction: column;
      /* justify-content: space-between;
      align-items: flex-start; */

      color: #ffffff;
      text-transform: uppercase;
      transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

      /* THIS SHIT IS WEIRD */
      /* line-height: 3rem;
      top: 40%;
      @media ${devices.laptopL} {
        line-height: 4rem;
        top: 25%;
      } */

      /* temp */
      /* border: 2px solid cyan; */
    }
    /* :hover .item-copy {
      color: #ffffff;
    } */

    @media ${devices.laptopM} {
      color: ${(props) => props.theme.colors.typo1};
    }
  }
`;

type ProductItemWrapperType = {
  isLastAnimDone?: boolean;
};

export const ProductItemWrapper = styled.div<ProductItemWrapperType>`
  cursor: ${({ isLastAnimDone }) => (isLastAnimDone ? "pointer" : "auto")};

  .img-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: -100%;
    left: 0;

    background-color: ${(props) => props.theme.colors.typo3};
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

    @media ${devices.laptopM} {
      top: 0;
    }

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

      white-space: nowrap;
      word-break: break-word;

      text-transform: uppercase;
      font-family: "Cochin Bold";
      /* font-weight: bold; */

      /* transform: scaleY(1.4); */
      transform: rotate(-90deg) scaleY(1.4);

      font-size: 3.5em;
      @media ${devices.laptopL} {
        margin-top: 70dvh;
        margin-left: 9.5rem;
        font-size: 4em;
      }
    }
  }
  :hover .img-overlay {
    top: ${({ isLastAnimDone }) => (isLastAnimDone ? "-100%" : 0)};
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1);
    filter: brightness(0.75);
    transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);

    @media ${devices.laptopM} {
      transform: scale(1.5);
      filter: brightness(0.25);
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

    /* margin-top: 20vh;
      padding-left: 2rem; */

    display: flex;
    flex-direction: column;
    /* justify-content: space-between;
      align-items: flex-start; */

    color: #ffffff;
    text-transform: uppercase;
    transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

    /* THIS SHIT IS WEIRD */
    /* line-height: 3rem;
      top: 40%;
      @media ${devices.laptopL} {
        line-height: 4rem;
        top: 25%;
      } */

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
