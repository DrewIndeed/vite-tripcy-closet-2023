import { motion } from "framer-motion";
import styled from "styled-components";
import { devices } from "@styles/themes";

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
    background-color: #8b8a8710;
    backdrop-filter: blur(0.5rem);

    :hover {
      border: 1px solid #332f2a90;
    }

    .menu-close-icon {
      width: 2rem;
      height: 2rem;
    }
  }

  .collection-name {
    color: ${(props) => props.theme.colors.out3};
    font-size: 1.75em;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 1.2rem;
    left: 5rem;
    z-index: 100;
  }

  .page-dots {
    color: ${(props) => props.theme.colors.out3};
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    right: 0;
    z-index: 100;
    width: 8vw;
    height: 100%;

    @media ${devices.tablet} {
      width: 10vw;
    }

    .dot {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: #8b8a8750;

      @media ${devices.tablet} {
        width: 0.75rem;
        height: 0.75rem;
      }
    }

    .active {
      background-color: #8b8a87;
    }
  }
`;
