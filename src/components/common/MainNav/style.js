import { devices } from "@styles/themes";
import styled from "styled-components";

export const MainNavWrapper = styled.div`
  top: 0;
  position: absolute;
  z-index: 35;
  width: 100vw;
  height: 5.625rem;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  /* TEMP */
  /* border: 1px solid brown; */

  #nav-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-inline: 1rem;

    @media ${devices.laptop} {
      padding-inline: 1rem;
      justify-content: flex-start;
    }

    .logo-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 3.4rem;
      height: 3.4rem;
      overflow: hidden;
      border-radius: 50%;
      padding: 10px;
      cursor: pointer;
      transition: all 0.6s ease;
      border: 1px solid #332f2a00;
      margin-left: 1rem;

      :hover {
        border: 1px solid #332f2a90;
      }

      .menu-open-icon {
        width: 3.4rem;
        height: 3.4rem;
        color: ${(props) => props.theme.colors.out3};
      }
    }

    .nav-container {
      position: fixed;
      bottom: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: #fff;
      z-index: 100;

      a {
        text-decoration: none;
        color: inherit;
      }

      .menu-close {
        color: ${(props) => props.theme.colors.out3};
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        right: 0;
        padding: 5px;
        margin: 1.2rem 1.1rem 0 0;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.6s ease;
        border: 1px solid #332f2a00;

        :hover {
          border: 1px solid #332f2a90;
        }

        .menu-close-icon {
          width: 2.5rem;
          height: 2.5rem;
        }
      }

      .menu {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 10vh 0 0 0;
        --offset: 20vw;
        --move-initial: calc(-25% + var(--offset));
        --move-final: calc(-50% + var(--offset));

        font-size: 6vw;
        height: 100%;
        overflow: hidden;

        .menu-footer {
          color: #8b8a8740;
          font-style: italic;
          /* transform: scaleY(1.2) translateX(-100px); */
          white-space: nowrap;
          margin: auto 0 1rem auto;
          padding: 0 6vw;
        }

        .menu__item {
          position: relative;
          padding: 5px 6vw;
          /* background-color: cyan; */
          /* margin: 1.5rem 0; */
        }

        .menu__item-link {
          display: inline-block;
          cursor: pointer;
          position: relative;
          transition: opacity 0.4s;
        }

        .menu__item-link::before {
          all: initial;
          counter-increment: menu;
          position: absolute;
          bottom: 60%;
          left: 0;
          pointer-events: none;
        }

        .menu__item-link:hover {
          transition-duration: 0.1s;
          opacity: 0;
        }

        .menu__item-img {
          object-fit: cover;
          z-index: 2;
          pointer-events: none;
          position: absolute;
          height: 100%;
          opacity: 0;
          left: 8%;
          top: 8%;
          transform: scale(0);
        }

        .menu__item-link:hover + .menu__item-img {
          opacity: 1;
          transform: scale(1);
          transition: all 0.4s;
        }

        .marquee {
          position: absolute;
          top: 0;
          left: 0;
          overflow: hidden;
          color: rgb(214, 214, 214);
          pointer-events: none;
        }

        .marquee__inner {
          width: fit-content;
          display: flex;
          position: relative;
          opacity: 0;
          transition: all 0.1s;
          transform: translateX(60px);
        }

        .menu__item-link:hover ~ .marquee .marquee__inner {
          opacity: 1;
          transform: translateX(0px);
          transition-duration: 0.4s;
        }

        .menu__item-link,
        .marquee span {
          white-space: nowrap;
          font-size: 7vw;
          padding: 0 1vw;
          line-height: 1.15;
        }

        .marquee span {
          font-style: italic;
        }
      }
    }
  }
`;
