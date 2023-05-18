import styled from "styled-components";
import { devices } from "@styles/themes";

export const MobileBannerWrapper = styled.section`
  scroll-snap-align: start;
  position: relative;
  width: 100%;
  height: -webkit-fill-available;
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
      font-size: 15vw;

      @media ${devices.laptop} {
        font-size: 12vw;
      }
    }

    #stylish {
      font-weight: bold;
      font-family: "Cochin Bold";
      color: ${(props) => props.theme.colors.sup3};
      font-size: 22vw;

      @media ${devices.laptop} {
        font-size: 14vw;
      }
    }

    #chic {
      display: flex;
      white-space: pre-wrap;
      margin-top: 1rem;
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
      margin: 0 auto;
      margin-top: 3rem;
      font-size: 0.8rem;
      border-radius: 2px;
      background-color: ${(props) => props.theme.colors.out3};

      .btn-text {
        font-style: 0.2rem;
        background-color: ${(props) => props.theme.colors.out3};
      }

      @media ${devices.mobileL} {
        margin-inline: 0;
        width: 10rem;
        height: 3.5rem;
        margin-top: 2rem;
        font-size: 1.1rem;

        :hover {
          opacity: 0.75;
          font-size: 1rem;
        }
      }
    }
  }

  .special-right-side {
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
      transition: all 0.4s ease-in-out;
      transform: scale(1.08);
      filter: brightness(0.8) blur(1px);

      :hover {
        transform: scale(1);
        filter: brightness(1);
      }
    }
  }
`;
