import styled from "styled-components";

export const MainNavWrapper = styled.div`
  top: 0;
  position: absolute;
  z-index: 35;
  width: 100vw;
  height: 90px;

  display: flex;
  justify-content: center;
  align-items: center;

  /* TEMP */
  /* border: 1px solid brown; */

  #nav-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 2rem;
    padding-inline: 1rem;

    .logo-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 80px;
      overflow: hidden;
      border-radius: 50%;
      padding: 10px;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      /* border: 1px solid #332f2a; */
      backdrop-filter: blur(1rem);
      background-color: #332f2a05;

      #logo {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }

      @media (max-width: 425px) {
        transform: scale(0.9);
      }
    }

    .menu-close {
      position: absolute;
      top: 0;
      right: 0;
      padding: 1rem;
      cursor: pointer;
    }

    .socials {
      position: absolute;
      bottom: 0;
      left: 0;
      margin: 40px 100px;
    }

    .socials span {
      text-transform: uppercase;
      margin: 0 20px;
      letter-spacing: 0px;
    }

    .nav-container {
      position: fixed;
      bottom: 0;
      left: -100%;
      width: 100vw;
      height: 100vh;
      background: #fff;
      z-index: 10000;

      a {
        text-decoration: none;
        color: inherit;
      }
    }

    .menu__item {
      position: relative;
      padding: 0 6vw;
      margin: 1.5rem 0;
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

    .menu {
      padding: 10vh 0 25vh;
      --offset: 20vw;
      --move-initial: calc(-25% + var(--offset));
      --move-final: calc(-50% + var(--offset));
      font-size: 7vw;
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
`;
