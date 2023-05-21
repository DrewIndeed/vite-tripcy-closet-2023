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
      top: 0.8rem;
      right: 0.6rem;
      z-index: 50;
      transform: rotate(-90deg);

      circle {
        stroke-dashoffset: 0;
        stroke-width: 0.5rem;
        fill: none;
      }

      .bg {
        stroke: #8b8a8750;
      }

      .indicator {
        stroke: #8b8a87;
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

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
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
