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

    /* TEMP */
    border: 2px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu-close {
    color: ${(props) => props.theme.colors.out3};
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    padding: 0.8rem;
    margin: 1.2rem 0 0 1.1rem;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.6s ease;
    border: 1px solid #332f2a00;

    :hover {
      border: 1px solid #332f2a90;
    }

    .menu-close-icon {
      width: 2.25rem;
      height: 2.25rem;
    }
  }
`;
