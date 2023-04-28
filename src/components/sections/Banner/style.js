import styled from "styled-components";
import { devices } from "@styles/themes";

export const BannerWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bg1};
  overflow: hidden;

  .brandname {
    width: 12vw;
    height: 100vh;
    right: 0;
    position: absolute;
    z-index: 30;
    display: flex;
    justify-content: flex-end;
    /* border: 2px solid red; */

    .text-container {
      position: relative;
      width: 10vw;
      height: 100%;
      /* border: 2px solid green; */

      p {
        color: ${(props) => props.theme.colors.sup2};
        opacity: 0.2;
        position: absolute;
        width: max-content;
        transform-origin: 0 0;
        transform: rotate(90deg) scale(1.3);

        font-size: 6em;
        left: calc(120%);
        margin-bottom: 50vh;
        /* border: 2px solid purple; */

        @media (min-width: 769px) and (max-width: 1090px) {
          display: none;
        }

        @media (min-width: 1091px) {
          opacity: 0.35;
          left: calc(60%);
          font-size: 5em;
          margin-top: 5vh;
        }

        @media ${devices.laptopL} {
          display: block;
          font-size: 10em;
          left: calc(100% - 2rem);
          top: 110px;
          opacity: 0.5;
          margin-top: 0;
        }
      }
    }
  }

  .content {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;

    .text,
    .model {
      flex: 1;
      padding-top: 64px;
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;

      /* mobile spacing */
      padding-left: 0;
      margin-bottom: 0;

      @media ${devices.tablet} {
        padding-left: calc(2rem + 64px);
        margin-bottom: 8rem;
      }

      p {
        /* mobile spacing */
        padding: 0 2rem;
        z-index: 40;

        @media ${devices.tablet} {
          padding: 0 3rem;
        }

        @media ${devices.laptop} {
          padding: 0 4rem;
        }
      }

      #text-container {
        display: flex;
        flex-direction: column;
        gap: -3rem;

        span {
          margin: 0;
          padding: 0;
          transform: scaleY(1.05);
        }

        #stay {
          /* font-weight: bold; */
          /* background: cyan; */
          color: ${(props) => props.theme.colors.typo1};
          font-size: 4em;

          @media ${devices.tablet} {
            font-size: 8em;
          }

          @media ${devices.laptopL} {
            font-size: 9em;
          }
        }

        #stylish {
          /* background: green; */
          font-family: "Cochin Bold";
          font-weight: bold;
          color: ${(props) => props.theme.colors.sup3};
          font-size: 6em;

          @media ${devices.tablet} {
            font-size: 10em;
          }

          @media ${devices.laptop} {
            font-size: 12em;
          }
        }
      }

      #chic {
        margin-top: 1rem;
        font-size: 1.5em;
        color: ${(props) => props.theme.colors.typo1};
        display: flex;
        white-space: pre-wrap;

        @media ${devices.tablet} {
          font-size: 1.75em;
        }

        @media ${devices.laptop} {
          font-size: 2em;
        }

        @media ${devices.laptopL} {
          font-size: 2.5em;
        }
      }

      #inner-desc {
        color: ${(props) => props.theme.colors.typo1};
        margin-top: 0.5rem;
        z-index: 40;

        font-size: 0.95em;
        line-height: 1.2rem;
        padding-right: 3rem;
        text-align: justify;

        @media ${devices.tablet} {
          font-size: 1.2em;
          line-height: 1.5rem;
          padding-right: 3rem;
        }

        @media ${devices.laptop} {
          font-size: 1.3em;
          padding-right: 6rem;
          line-height: 1.75rem;
        }

        @media ${devices.laptopL} {
          font-size: 1.4em;
          padding-right: 8rem;
          line-height: 2rem;
        }
      }

      button {
        color: #fff;
        background-color: ${(props) => props.theme.colors.out3};
        width: 10rem;
        padding: 15px 0;
        margin-left: 2rem;
        margin-top: 2rem;
        border-radius: 2px;
        border: none;
        outline: none;
        font-size: 1em;
        z-index: 5;
        transition: opacity 0.2s ease-in-out, font-size 0.4s ease-in-out;

        :hover {
          opacity: 0.75;
          font-size: 1.1em;
        }

        @media ${devices.tablet} {
          margin-left: 3rem;
          margin-top: 2rem;
          padding: 20px 0;
        }

        @media ${devices.laptop} {
          width: 14rem;
          font-size: 1.3em;
          margin-left: 4rem;

          :hover {
            opacity: 0.75;
            font-size: 1.4em;
          }
        }
      }
    }

    .model {
      /* border: 1px solid red; */
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      #svg-hard {
        display: none;
        width: 650px;
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translate3d(20rem, 14rem, 0) scaleY(1.1) scale(1.1)
          rotate(20deg);
        z-index: 2;

        @media ${devices.tablet} {
          display: block;
        }

        @media ${devices.laptop} {
          width: 720px;
        }

        @media ${devices.laptopL} {
          width: 900px;
        }
      }

      #svg-light {
        display: none;
        width: 650px;
        opacity: 0.95;
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translate3d(10rem, 16rem, 0) rotate(-30deg);
        z-index: 1;

        @media ${devices.tablet} {
          display: block;
        }

        @media ${devices.laptop} {
          width: 720px;
        }
        @media ${devices.laptopL} {
          width: 900px;
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.6s ease-in-out;

        :hover {
          filter: brightness(0.8);
          transform: scale(1.08);
        }
      }

      .model-img {
        position: relative;
        width: 80%;
        width: 80%;
        height: 75%;
        overflow: hidden;
        border-radius: 1rem;
        z-index: 20;
        margin-right: 7rem;
        margin-bottom: 3rem;
        background-color: #8b8a8740;
        box-shadow: #8b8a8740 -5px 5px, #8b8a8730 -10px 10px,
          #8b8a8720 -15px 15px, #8b8a8710 -20px 20px, #8b8a8705 -25px 25px;

        @media (min-width: 1200px) {
          height: 75%;
        }
      }

      .small-product-img {
        position: absolute;
        width: 190px;
        height: 240px;
        overflow: hidden;
        border-radius: 1rem;
        z-index: 20;
        bottom: 5rem;
        left: -5rem;
        background-color: #8b8a8740;
        box-shadow: #8b8a8740 -5px 5px, #8b8a8730 -10px 10px,
          #8b8a8720 -15px 15px, #8b8a8710 -20px 20px, #8b8a8705 -25px 25px;

        @media (min-width: 1200px) {
          width: 190px;
          height: 240px;
          bottom: 4rem;
          left: -4rem;
        }
      }
    }
  }
`;
