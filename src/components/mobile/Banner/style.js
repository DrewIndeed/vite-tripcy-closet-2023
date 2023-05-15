import styled from "styled-components";
import { devices } from "@styles/themes";

export const MobileBannerWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.bg2};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.bg2};
    padding-inline: 2rem;

    @media ${devices.mobileL} {
      padding-inline: 4rem;
    }

    p,
    span {
      z-index: 10;
    }

    #stay {
      color: ${(props) => props.theme.colors.typo1};
      font-size: 14vw;

      @media ${devices.laptop} {
        font-size: 12vw;
      }
    }

    #stylish {
      font-weight: bold;
      font-family: "Cochin Bold";
      color: ${(props) => props.theme.colors.sup3};
      font-size: 20vw;

      @media ${devices.laptop} {
        font-size: 14vw;
      }
    }

    #chic {
      display: flex;
      white-space: pre-wrap;
      color: ${(props) => props.theme.colors.typo1};
      font-size: 6vw;

      @media ${devices.laptop} {
        font-size: 4vw;
      }
    }

    #inner-desc {
      color: #332f2a;
      text-align: justify;
      margin-top: 0.5rem;
      line-height: 1.2rem;
      font-size: 1rem;

      @media ${devices.mobileL} {
        font-size: 1.5rem;
        line-height: 2rem;
      }

      @media ${devices.laptop} {
        width: 50%;
      }
    }

    #show-more-btn-mobile {
      z-index: 5;
      color: #fff;
      width: 8rem;
      height: 2.5rem;
      border: none;
      outline: none;
      margin-top: 1.5rem;
      font-size: 0.8rem;
      /* padding: 0.8rem 0; */
      border-radius: 2px;
      background-color: ${(props) => props.theme.colors.out3};
      transition: opacity 0.2s ease-in-out, font-size 0.4s ease-in-out;

      .btn-text {
        font-style: 0.2rem;
        background-color: ${(props) => props.theme.colors.out3};
      }

      @media ${devices.mobileL} {
        width: 10rem;
        height: 3.5rem;
        margin-top: 2rem;
        font-size: 1.1rem;
        /* padding: 1.25rem 0; */

        :hover {
          opacity: 0.75;
          font-size: 1rem;
        }
      }
    }
  }

  .andrew {
    position: absolute;
    top: 0;
    right: 0;
    width: 45%;
    height: 100%;
    z-index: 5;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 1s ease-in-out;
      transform: scale(1.08);
      filter: brightness(0.8) blur(1px);

      :hover {
        transform: scale(1);
        filter: brightness(1);
      }
    }
  }
`;
