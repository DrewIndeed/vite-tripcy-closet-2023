import { common, devices } from "@styles/themes";
import styled from "styled-components";

const colors = common.colors;

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

      @media screen and (min-width: 1024px) and (max-width: 1207px) {
        object-fit: scale-down;
      }
      filter: brightness(0.9);
    }
  }

  .corner-blur-blob {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    aspect-ratio: 1 / 1;
    background-color: #ffffff40;
    backdrop-filter: blur(0.2rem);
    clip-path: ellipse(50% 38% at 50% 50%);
  }

  .top-left {
    top: 0;
    transform: translate(-50%, -50%);
  }

  .top-right {
    top: 0;
    transform: translate(50%, -50%);
  }

  .bottom-left {
    bottom: 0;
    transform: translate(-50%, 50%);
  }

  .bottom-right {
    bottom: 0;
    transform: translate(50%, 50%);
  }

  .text-content {
    width: 100%;
    position: absolute;
    left: 0;
    color: #fff;
    padding-inline: 10%;
    top: 35%;

    @media ${devices.tablet} {
      top: 32%;
    }
    @media ${devices.laptop} {
      top: 22%;
    }

    .new-status {
      font-size: 1.2em;
      font-style: italic;
      margin-bottom: 2rem;
      padding-left: 0.5rem;
      text-decoration: underline;
      text-underline-offset: 0.5rem;
      text-decoration-style: wavy;

      @media ${devices.tablet} {
        font-size: 2.5em;
        margin-bottom: 4rem;
      }
      @media ${devices.laptop} {
        margin-bottom: 4rem;
        font-size: 2.5em;
      }
    }

    .title {
      color: ${(props) => props.theme.colors.sup2};
      text-shadow: 0.5vw 0.5vw 0 #c1b6a380;
      text-align: left;
      word-spacing: 100vw;
      font-size: 4.5em;
      line-height: 9.5vh;

      @media ${devices.tablet} {
        font-size: 9em;
        line-height: 13vh;
      }
      @media ${devices.laptop} {
        font-size: 10em;
        line-height: 14vh;
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

  .see-more {
    margin-top: auto;
    margin-bottom: 7rem;
    z-index: 40;

    .arrow-button {
      display: flex;
      padding: 0.8rem 1.5rem;
      /* border-radius: 20px; */
      transition: all 0.3s ease;
      font-weight: bold;
      cursor: pointer;
      align-items: center;
      font-size: 1.2em;
      border-radius: 2px;

      color: #fff;
      background-color: transparent;
      border: 2px solid transparent;
      outline: none;
    }

    .arrow-button > .arrow {
      width: 12px;
      height: 12px;
      border-right: 2px solid ${colors.bg1};
      border-bottom: 2px solid ${colors.bg1};
      position: relative;
      transform: rotate(-45deg);
      margin: 0 0.5rem;
      transition: all 0.3s ease;
    }

    .arrow-button > .arrow::before {
      display: block;
      background-color: currentColor;
      width: 3px;
      transform-origin: bottom right;
      height: 2px;
      position: absolute;
      opacity: 0;
      bottom: calc(-2px / 2);
      transform: rotate(45deg);
      transition: all 0.15s ease;
      content: "";
      right: 0;
    }

    .arrow-button:hover > .arrow {
      transform: rotate(-45deg) translate(4px, 4px);
      border-color: #fff;
      margin-left: 1.3rem;
    }

    .arrow-button:hover > .arrow::before {
      opacity: 1;
      width: 1.3em;
    }

    .arrow-button:hover {
      background-color: #8b8a8750;
      border: 1px solid #fff;
    }
  }
`;
