import styled from "styled-components";
import { devices } from "@styles/themes";

type MobileCollectionWrapperType = {
  isEven: boolean;
  count: number;
};

export const MobileCollectionWrapper = styled.section<MobileCollectionWrapperType>`
  scroll-snap-align: start;
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.out2};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  /* margin-top: ${({ count }) => (count > 0 ? "1rem" : 0)}; */

  .bg-container {
    flex-shrink: 0;
    width: 100%;
    height: -webkit-fill-available;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;

    /* background-color: #8b8a8730;
    box-shadow: #8b8a8730 -05px -05px, #8b8a8720 -10px -10px,
      #8b8a8710 -15px -15px, #8b8a8705 -20px -20px; */
    /* border-top-left-radius: 30vw; */
    /* border-bottom-right-radius: 25vw; */

    /* border-top-left-radius: ${({ isEven }) => (!isEven ? 0 : "25vw")}; */
    /* border-bottom-right-radius: ${({ isEven }) => (!isEven ? 0 : "25vw")}; */
    /* border-top-right-radius: ${({ isEven }) => (isEven ? 0 : "25vw")}; */
    /* border-bottom-left-radius: ${({ isEven }) => (isEven ? 0 : "25vw")}; */

    img {
      width: 100%;
      height: -webkit-fill-available;
      height: 100vh;
      object-fit: cover;

      @media screen and (min-width: 830px) {
        object-fit: scale-down;
      }
      filter: brightness(0.9);
    }
  }

  .corner-blur-blob {
    position: absolute;
    bottom: 0;
    left: 0;
    clip-path: circle(50% at 50% 50%);

    width: 120%;
    aspect-ratio: 1 / 1;
    background-color: #ffffff40;
    backdrop-filter: blur(0.2rem);
    transform: translate(-50%, 50%) scaleX(1.2);

    @media ${devices.tablet} {
      transform: translate(-50%, 60%) scaleX(1.2);
    }
    @media ${devices.laptop} {
      transform: translate(-50%, 65%) scaleX(1.2);
    }
  }

  .text-content {
    width: 100%;
    position: absolute;
    top: 58%;
    left: 0;
    color: #fff;
    padding-inline: 10%;

    @media ${devices.tablet} {
      top: 55%;
    }
    @media ${devices.laptop} {
      top: 32%;
    }

    .new-status {
      font-size: 1.2em;
      font-style: italic;
      margin-bottom: 8%;
      padding-left: 0.5rem;
      text-decoration: underline;
      text-underline-offset: 0.5rem;
      text-decoration-style: wavy;

      @media ${devices.tablet} {
        font-size: 2.5em;
      }
      @media ${devices.laptop} {
        font-size: 2.5em;
      }
    }

    .title {
      color: ${(props) => props.theme.colors.sup2};
      text-shadow: 0.5vw 0.5vw 0 #c1b6a380;
      text-align: left;
      word-spacing: 100vw;
      font-size: 4.5em;
      line-height: 10vh;

      @media ${devices.tablet} {
        font-size: 9em;
        line-height: 10vh;
      }
      @media ${devices.laptop} {
        font-size: 10em;
        line-height: 16vh;
      }
    }

    .season {
      margin-top: 5%;
      font-style: italic;
      text-align: right;
      font-size: 1.2em;

      @media ${devices.tablet} {
        font-size: 2.5em;
      }
      @media ${devices.laptop} {
        font-size: 2.5em;
      }
    }
  }
`;
