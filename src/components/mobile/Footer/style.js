import styled from "styled-components";
import { devices } from "@styles/themes";

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  scroll-snap-align: start;
  background-color: ${(props) => props.theme.colors.out3};

  section {
    width: 100%;
  }

  #content {
    flex: 1;
    gap: 3rem;
    display: flex;
    flex-direction: column;

    padding: 2rem;
    @media ${devices.tablet} {
      padding: 4rem;
    }

    #legal {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;

      .content {
        gap: 0.3rem;
        display: flex;
        justify-content: center;
        flex-direction: column;

        p {
          font-size: 1.1em;
          color: ${(props) => props.theme.colors.bg2};
          @media ${devices.tablet} {
            font-size: 2em;
          }
        }
      }
    }

    #contact-us {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;

      .socials {
        gap: 1rem;
        display: flex;
        align-items: center;

        .icon-wrapper {
          width: 3rem;
          height: 3rem;
          @media ${devices.tablet} {
            width: 6rem;
            height: 6rem;
          }

          display: flex;
          justify-content: center;
          align-items: center;

          cursor: pointer;
          border-radius: 50%;
          background-color: #332f2a60;

          :hover {
            background-color: ${(props) => props.theme.colors.out2};
          }
        }

        #insta-icon,
        .icon-wrapper {
          transition: all 0.4s ease-in-out;
        }

        #insta-icon {
          width: 1.5rem;
          height: 1.5rem;
          @media ${devices.tablet} {
            width: 2.5rem;
            height: 2.5rem;
          }
        }

        .icons {
          width: 1.5rem;
          height: 1.5rem;
          color: ${(props) => props.theme.colors.bg2};
          @media ${devices.tablet} {
            width: 2.5rem;
            height: 2.5rem;
          }
        }
      }
    }

    .title {
      font-size: 1.4rem;
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.bg2};

      @media ${devices.tablet} {
        font-size: 3em;
      }
    }

    .divider {
      width: 5rem;
      height: 0.2rem;
      margin-block: 1.25rem;
      background-color: ${(props) => props.theme.colors.bg2};

      @media ${devices.tablet} {
        width: 12rem;
        height: 0.4rem;
      }
    }
  }

  #copyright {
    display: flex;
    font-size: 1em;
    padding: 0.5rem 0;
    /* font-style: italic; */
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.bg2};

    @media ${devices.tablet} {
      font-size: 1.5em;
    }
  }
`;
