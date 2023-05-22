import { devices } from "@styles/themes";
import styled from "styled-components";

export const ProductRowWrapper = styled.section`
  .product-row {
    scroll-snap-align: start;
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    .progress {
      position: absolute;
      z-index: 50;
      transform: rotate(-90deg);

      top: calc(18vh + 0.5rem);
      right: 3rem;

      @media ${devices.tablet} {
        top: 17vh;
        right: 7rem;
      }

      /* background-color: #8b8a8715;
      backdrop-filter: blur(0.5rem);
      border-radius: 50%; */

      circle {
        stroke-dashoffset: 0;
        stroke-width: 1rem;
        fill: none;
      }

      .bg {
        stroke: #8b8a8730;
      }

      .indicator {
        stroke: #ffffff;
      }
    }

    .title {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      z-index: 50;

      bottom: 18vh;
      padding-inline: 2.5rem;
      @media ${devices.tablet} {
        bottom: 17vh;
        padding-inline: 6rem;
      }

      .lines {
        flex: 1;
        height: 3px;
        background-color: ${(props) => props.theme.colors.typo2};
      }

      .title-text {
        flex: 2;
        padding-left: 1rem;
        /* text-align: center; */

        color: #fff;
        text-shadow: 0.5vw 0.5vw 0 #8b8a8760;
        /* font-weight: bold; */
        word-spacing: 100vw;
        margin: auto;

        font-family: "Cochin Bold";
        font-weight: bold;
        text-transform: uppercase;
        transform: scaleY(1.4);

        font-size: 2.5em;
        line-height: 2rem;
        @media ${devices.tablet} {
          font-size: 5em;
          line-height: 4rem;
        }
      }
    }

    .scroll {
      padding-top: 1rem;
      width: 100%;
      height: 90vh;
      /* border: 2px solid #000; */
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      display: flex;
      margin-top: auto;
      position: relative;

      .product-card {
        scroll-snap-align: start;
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        /* border: 2px solid green; */
        padding-inline: 2.5rem;
        padding-top: 2rem;
        padding-bottom: 6rem;

        @media ${devices.tablet} {
          padding-inline: 6rem;
        }

        .img-container {
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 0.25rem;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
            rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
          background-color: #c1b6a330;
          position: relative;

          :after {
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            background: radial-gradient(
              ellipse at center,
              #8b8a8700 0%,
              #8b8a8700 50%,
              #8b8a8720 75%,
              #8b8a8730 100%
            );
            position: absolute;
            top: 0;
            left: 0;
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: brightness(1.02) saturate(1.02);
          }

          .img-loader {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.25em;
          }
        }
      }
    }
  }
`;
