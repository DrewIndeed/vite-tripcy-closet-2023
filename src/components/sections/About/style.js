import styled from "styled-components";
import { devices } from "@styles/themes";

export const AboutWrapper = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .content {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    background-color: ${(props) => `${props.theme.colors.bg2}`};

    .content__col {
      flex: 1;
      overflow: hidden;
    }

    .col-1 {
      position: relative;
      height: 100%;
      margin-left: 0;

      @media ${devices.laptopM} {
        margin-left: 6rem;
      }

      .mobile-content {
        position: absolute;
        background-color: transparent;
        z-index: 20;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 1.5rem;

        .container {
          width: 100%;
          height: 100%;
          padding: 1rem 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          backdrop-filter: blur(5px);

          .title {
            color: #fff;
            font-size: 3em;
          }

          .about-content {
            color: #fff;
            text-align: justify;
            padding-inline: 20px;
            font-size: 1.2em;
            line-height: 1.5rem;
          }

          .quote-author {
            color: #fff;
            font-size: 1.2em;
          }
        }

        @media ${devices.laptop} {
          display: none;
        }
      }
    }

    .col-2 {
      display: none;
      @media ${devices.laptop} {
        display: block;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* align-items: center; */
        gap: 1rem;

        .title {
          color: ${(props) => props.theme.colors.typo1};
          margin-left: 3rem;
          margin-bottom: 2rem;
          font-size: 5em;
          transform: scaleY(1.4);

          @media ${devices.laptopM} {
            font-size: 6em;
            margin-bottom: 1.5rem;
          }
        }

        .about-content {
          color: ${(props) => props.theme.colors.typo2};
          text-align: justify;
          margin-inline: 3rem;
          font-size: 1.3em;
          line-height: 2rem;

          @media ${devices.laptopM} {
            font-size: 1.5em;
          }
        }

        .quote-author {
          align-self: flex-end;
          margin-inline: 3rem;
          font-size: 1.5em;
        }
      }
    }

    #tripcy-pack {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      background-color: #8b8a8760;
      transition: all 0.6s ease-in-out;
      filter: brightness(0.7);

      @media ${devices.tablet} {
        filter: brightness(0.8);
        :hover {
          transform: scale(1.08);
          filter: brightness(0.6);
        }
      }
    }
  }
`;
