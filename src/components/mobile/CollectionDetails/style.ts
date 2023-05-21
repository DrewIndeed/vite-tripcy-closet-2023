import { motion } from "framer-motion";
import styled from "styled-components";

export const CollectionDetailsWrapper = styled(motion.section)`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.bg2};
  z-index: 100;

  position: absolute;
  inset: 0;
  margin: auto;

  overflow-y: auto;
  scroll-snap-type: y mandatory;

  .product-row {
    scroll-snap-align: start;
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    .scroll {
      padding-top: 1rem;
      width: 100%;
      height: 100vh;
      /* border: 2px solid #000; */
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      display: flex;
      margin-top: auto;

      ::-webkit-scrollbar {
        height: 5px; /* Remove scrollbar space */
        background: ${(props) =>
          props.theme.colors
            .sup2}; /* Optional: just make scrollbar invisible */
      }
      /* Optional: show position indicator in red */
      ::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.colors.typo3};
      }

      .product-card {
        scroll-snap-align: start;
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        /* border: 2px solid green; */
        padding: 2rem;
        padding-top: 1rem;

        .img-container {
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 0.25rem;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
            rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }

  .menu-close {
    color: ${(props) => props.theme.colors.out3};
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    padding: 0.5rem;
    margin: 1rem 0 0 1rem;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.6s ease;
    border: 1px solid #332f2a00;
    z-index: 100;
    background-color: #8b8a8720;
    backdrop-filter: blur(0.5rem);

    :hover {
      border: 1px solid #332f2a90;
    }

    .menu-close-icon {
      width: 2rem;
      height: 2rem;
    }
  }
`;
