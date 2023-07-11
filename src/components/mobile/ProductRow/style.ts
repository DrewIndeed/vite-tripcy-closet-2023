import { devices } from "@styles/themes";
import styled from "styled-components";

export const ProductRowWrapper = styled.section`
  width: 100%;
  height: 100dvh;

  .product-row {
    scroll-snap-align: start;
    width: 100%;
    height: 100dvh;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    overflow-x: hidden;

    .progress {
      position: absolute;
      z-index: 50;
      transform: rotate(-90deg);

      bottom: 1rem;
      right: 1rem;

      @media ${devices.tablet} {
        transform: rotate(-90deg) scale(1.2);
        top: 7rem;
        right: 7.5rem;
      }

      @media ${devices.laptop} {
        right: 17rem;
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
        stroke: #8b8a8795;
      }
    }

    .title {
      max-width: min-content;
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      z-index: 50;
      transform-origin: bottom left;

      bottom: 2rem;
      left: 1rem;
      @media ${devices.tablet} {
        bottom: 8.5rem;
        left: 7.5rem;
      }
      @media ${devices.laptop} {
        left: 17.5rem;
        bottom: 8.5rem;
      }

      .title-text {
        color: #fff;
        white-space: pre-line;
        text-shadow: 0.5vw 0.5vw 0 #8b8a8760;

        font-family: "Cochin Bold";
        font-weight: bold;
        text-transform: uppercase;
        transform: scaleY(1.4);

        font-size: 2.5em;
        line-height: 2rem;
        @media ${devices.tablet} {
          font-size: 4em;
          line-height: 3.5rem;
        }
      }
    }

    .scroll {
      /* padding-top: 1rem; */
      width: 100%;
      height: 100dvh;

      /* border: 2px solid #000; */
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      display: flex;
      /* margin-top: auto; */

      .product-card {
        scroll-snap-align: start;
        flex-shrink: 0;
        width: 100%;
        height: 100%;

        /* border: 2px solid green; */
        /* padding-inline: 2.5rem;
        padding-top: 2rem;
        padding-bottom: 6rem; */
        position: relative;

        /* @media ${devices.tablet} {
          padding-inline: 6rem;
        } */

        .swipe-more {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.2rem;
          color: #fff;
          text-shadow: 0.5vw 0.5vw 0 #8b8a8760;

          position: absolute;
          z-index: 50;

          top: 6vh;
          left: 3.2rem;
          @media ${devices.tablet} {
            top: 5vh;
            left: 7.2rem;
          }

          .icon {
            width: 1.5rem;
            height: 1.5rem;
            @media ${devices.tablet} {
              width: 2.5rem;
              height: 2.5rem;
            }
          }

          .text {
            font-size: 1.25em;
            @media ${devices.tablet} {
              font-size: 2em;
            }
          }
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
          padding-block: 0;
          @media ${devices.tablet} {
            padding-block: 6rem;
            padding-inline: 6rem;
          }

          @media ${devices.laptop} {
            padding-inline: 16rem;
          }

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
            border-radius: 0.5rem;
            object-fit: cover;
            /* filter: saturate(1.02); */
            @media ${devices.tablet} {
              object-position: 2% 0;
            }
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
