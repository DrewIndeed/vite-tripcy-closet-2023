import { devices } from "@styles/themes";
import { motion } from "framer-motion";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  scroll-snap-align: start;
  background-color: ${(props) => props.theme.colors.out2};

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
    @media ${devices.laptop} {
      padding: 6rem;
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
          cursor: pointer;
          font-size: 1.1em;
          color: ${(props) => props.theme.colors.bg2};
          transition: all 0.4s ease-in-out;
          @media ${devices.tablet} {
            font-size: 2em;
          }
          @media ${devices.laptop} {
            font-size: 1.5em;
          }
          :hover {
            margin-left: 1vh;
          }
        }
      }
    }

    #contact-us,
    #follow-us {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;

      .socials {
        gap: 0.5rem;
        display: flex;
        justify-content: center;
        flex-direction: column;

        .contact-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          @media ${devices.tablet} {
            gap: 2rem;
          }
          @media ${devices.laptop} {
            gap: 1.5rem;
          }

          p {
            user-select: all;
            --webkit-user-select: all;
            --moz-user-select: all;
            --ms-user-select: all;
            display: flex;
            justify-content: center;
            flex-direction: column;
            font-size: 1.1em;
            color: ${(props) => props.theme.colors.bg2};
            @media ${devices.tablet} {
              font-size: 2em;
            }
            @media ${devices.laptop} {
              font-size: 1.5em;
            }
          }
        }

        .icon-wrapper {
          width: 2.5rem;
          height: 2.5rem;
          @media ${devices.tablet} {
            width: 5rem;
            height: 5rem;
          }
          @media ${devices.laptop} {
            width: 4rem;
            height: 4rem;
          }

          display: flex;
          justify-content: center;
          align-items: center;

          border-radius: 50%;
          background-color: #332f2a60;

          :hover {
            background-color: ${(props) => props.theme.colors.typo1};
          }
        }

        #insta-icon,
        #facebook-icon,
        .icon-wrapper {
          transition: all 0.4s ease-in-out;
        }

        #insta-icon,
        #facebook-icon {
          width: 1.5rem;
          height: 1.5rem;
          @media ${devices.tablet} {
            transform: scale(1.7);
          }
          @media ${devices.laptop} {
            transform: scale(1.2);
          }
        }

        .icons {
          width: 1.25rem;
          height: 1.25rem;
          color: ${(props) => props.theme.colors.bg2};
          @media ${devices.tablet} {
            width: 2.5rem;
            height: 2.5rem;
          }
          @media ${devices.laptop} {
            width: 1.75rem;
            height: 1.75rem;
          }
        }
      }
    }

    .title {
      font-size: 1.4rem;
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.bg2};

      @media ${devices.tablet} {
        font-size: 2em;
      }
      @media ${devices.laptop} {
        font-size: 1.75em;
      }
    }

    .divider {
      width: 5rem;
      height: 0.2rem;
      margin-block: 0.75rem;
      background-color: ${(props) => props.theme.colors.bg2};

      @media ${devices.tablet} {
        width: 12rem;
        height: 0.4rem;
        margin-block: 1.75rem;
      }
    }
  }

  #copyright {
    display: flex;
    font-size: 0.75em;
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

type PoliciesShowType = {
  show: boolean;
};
export const PoliciesShow = styled(motion.div)<PoliciesShowType>`
  display: ${(p) => (p.show ? "block" : "none")};
  opacity: 0;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100dvh;
  z-index: 50;
  background-color: #332f2a95;
  backdrop-filter: blur(0.5rem) brightness(0.5);
  overflow: hidden;
  overscroll-behavior: none;

  #policy-wrapper {
    width: 100%;
    height: 90dvh;
    position: relative;

    #close-policy-icon {
      color: #fff;
      width: 2.25rem;
      height: 2.25rem;
      margin: 1.25rem;
      position: absolute;
      right: 0;
      border-radius: 50%;

      @media ${devices.tablet} {
        width: 3.75rem;
        height: 3.75rem;
        margin: 1.5rem;
      }
    }

    #policy-content {
      width: 100%;
      height: 100%;
      color: #fff;

      #title {
        font-weight: bold;
        font-size: 1.8em;
        padding-top: 1.25rem;
        padding-left: 2rem;

        @media ${devices.tablet} {
          font-size: 3em;
          padding-top: 1rem;
          padding-left: 4rem;
        }
      }

      #parts {
        height: 100%;
        overflow-y: auto;
        margin-top: 1rem;
        padding-inline: 2rem;
        padding-bottom: 3rem;

        @media ${devices.tablet} {
          padding-inline: 4rem;
        }

        p {
          text-align: justify;
          margin-bottom: 1rem;
          @media ${devices.tablet} {
            font-size: 1.75em;
          }
        }

        .notice {
          span {
            font-weight: bold;
            text-decoration: underline;
            text-underline-offset: 0.2rem;
          }
        }
      }
    }
  }
`;
