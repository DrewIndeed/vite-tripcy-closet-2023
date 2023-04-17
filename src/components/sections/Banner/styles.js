import styled from "styled-components";
import { devices } from "@/styles/themes";

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
        opacity: 0.35;
        font-size: 2em;
        position: absolute;
        width: max-content;
        left: calc(100% - 1rem);
        transform-origin: 0 0;
        transform: rotate(90deg) scale(1.3);
        /* border: 2px solid purple; */

        /* VERY IMPORTANT */
        @media (max-width: 1440px) {
          bottom: 20rem;
        }

        @media ${devices.laptopL} {
          opacity: 0.5;
          font-size: 10em;
          top: 110px;
          left: calc(100% - 2rem);
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
      padding-left: calc(2rem + 64px);
      margin-bottom: 8rem;

      p {
        padding: 0 3rem;
        z-index: 40;

        @media ${devices.laptop} {
          padding: 0 4rem;
        }
      }

      p:nth-child(1) {
        display: flex;
        flex-direction: column;
        gap: -3rem;

        span {
          margin: 0;
          padding: 0;
          transform: scaleY(1.05);
        }

        span:nth-child(1) {
          /* font-weight: bold; */
          /* background: cyan; */
          color: ${(props) => props.theme.colors.typo1};
          font-size: 7em;

          @media ${devices.laptop} {
            font-size: 8em;
          }

          @media ${devices.laptopL} {
            font-size: 9em;
          }
        }

        span:nth-child(2) {
          /* background: green; */
          font-family: "Cochin Bold";
          font-weight: bold;
          color: ${(props) => props.theme.colors.sup3};
          font-size: 10em;

          @media ${devices.laptop} {
            font-size: 12em;
          }

          @media ${devices.laptopL} {
            font-size: 12em;
          }
        }
      }

      p:nth-child(2) {
        font-size: 1.75em;
        color: ${(props) => props.theme.colors.typo1};
        display: flex;
        white-space: pre-wrap;

        @media ${devices.laptop} {
          font-size: 2em;
        }

        @media ${devices.laptopL} {
          font-size: 2.5em;
        }
      }

      p:nth-child(3) {
        color: ${(props) => props.theme.colors.typo2};
        font-size: 1.2em;
        margin-top: 0.5rem;
        line-height: 1.5rem;
        padding-right: 3rem;
        z-index: 40;

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
        background-color: ${(props) => props.theme.colors.out2};
        width: 10rem;
        padding: 20px 0;
        margin-left: 3rem;
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
        width: 650px;
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translate3d(20rem, 14rem, 0) scaleY(1.1) scale(1.1)
          rotate(20deg);
        z-index: 2;

        @media ${devices.laptop} {
          width: 720px;
        }

        @media ${devices.laptopL} {
          width: 900px;
        }
      }

      #svg-light {
        width: 650px;
        opacity: 0.95;
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translate3d(10rem, 16rem, 0) rotate(-30deg);
        z-index: 1;

        @media ${devices.laptop} {
          width: 720px;
        }
        @media ${devices.laptopL} {
          width: 900px;
        }
      }

      img {
        width: 100%;
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
        height: 65%;
        overflow: hidden;
        border-radius: 0.25rem;
        z-index: 20;
        margin-right: 7rem;
        margin-bottom: 3rem;
        background-color: #c1b6a340;
        box-shadow: #c1b6a340 -5px 5px, #c1b6a330 -10px 10px,
          #c1b6a320 -15px 15px, #c1b6a310 -20px 20px, #c1b6a305 -25px 25px;

        img {
          height: 100%;
          filter: brightness(0.95);

          :hover {
            filter: brightness(0.8);
          }
        }

        @media (min-width: 1200px) {
          height: 75%;
        }
      }

      .small-product-img {
        position: absolute;
        width: 170px;
        height: 170px;
        overflow: hidden;
        border-radius: 0.25rem;
        z-index: 20;
        bottom: 8rem;
        left: -5rem;
        background-color: #c1b6a340;
        box-shadow: #c1b6a340 -5px 5px, #c1b6a330 -10px 10px,
          #c1b6a320 -15px 15px, #c1b6a310 -20px 20px, #c1b6a305 -25px 25px;

        @media (min-width: 1200px) {
          width: 230px;
          height: 230px;
          bottom: 4rem;
          left: -4rem;
        }
      }
    }
  }
`;
