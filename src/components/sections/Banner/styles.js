import styled from "styled-components";

export const BannerWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bg1};
  overflow: hidden;

  .brandname {
    width: 12vw;
    height: 100vh;
    right: 0;
    position: absolute;
    z-index: 30;
    display: flex;
    justify-content: flex-end;
    /* border: 2px solid red; */

    .text-container {
      position: relative;
      width: 10vw;
      height: 100%;
      /* border: 2px solid green; */

      p {
        color: ${(props) => props.theme.colors.sup2};
        opacity: 0.5;
        position: absolute;
        width: max-content;
        font-size: 10em;
        top: 100px;
        left: calc(100% - 2rem);
        transform-origin: 0 0;
        transform: rotate(90deg) scale(1.3);
        /* border: 2px solid purple; */
      }
    }
  }

  .content {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;

    .text,
    .model {
      flex: 1;
      padding-top: 64px;
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: calc(2rem + 64px);
      margin-bottom: 8rem;

      p {
        padding: 0 4rem;
        z-index: 40;
      }

      p:nth-child(1) {
        display: flex;
        flex-direction: column;
        gap: -3rem;

        span {
          margin: 0;
          padding: 0;
          transform: scaleY(1.05);
        }

        span:nth-child(1) {
          /* font-weight: bold; */
          color: ${(props) => props.theme.colors.typo1};
          font-size: 9em;
          transform: translateY(3rem);
        }

        span:nth-child(2) {
          font-family: "Cochin Bold";
          font-weight: bold;
          color: ${(props) => props.theme.colors.out1};
          font-size: 14em;
        }
      }

      p:nth-child(2) {
        font-size: 2.5em;
        color: ${(props) => props.theme.colors.typo1};
        display: flex;
        white-space: pre-wrap;
      }

      p:nth-child(3) {
        color: ${(props) => props.theme.colors.typo2};
        font-size: 1.4em;
        margin-top: 0.5rem;
        line-height: 2rem;
        padding-right: 8rem;
        z-index: 40;
      }

      button {
        color: #fff;
        background-color: ${(props) => props.theme.colors.out2};
        width: 14rem;
        padding: 20px 0;
        margin-left: 4rem;
        margin-top: 2rem;
        border-radius: 2px;
        border: none;
        outline: none;
        font-size: 1.3em;
        transition: opacity 0.2s ease-in-out, font-size 0.4s ease-in-out;

        :hover {
          opacity: 0.75;
          font-size: 1.4em;
        }
      }
    }

    .model {
      /* border: 1px solid red; */
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      svg:nth-child(1) {
        width: 900px;
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translate3d(20rem, 14rem, 0) scaleY(1.1) scale(1.1)
          rotate(20deg);
        z-index: 10;
      }

      svg:nth-child(2) {
        width: 900px;
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translate3d(10rem, 16rem, 0) rotate(-30deg);
        z-index: 5;
      }

      .model-img {
        position: relative;
        width: 80%;
        height: 75%;
        overflow: hidden;
        border-radius: 0.25rem;
        z-index: 20;
        margin-right: 7rem;
        margin-bottom: 3rem;
        background-color: #c1b6a340;
        box-shadow: #c1b6a340 -5px 5px, #c1b6a330 -10px 10px,
          #c1b6a320 -15px 15px, #c1b6a310 -20px 20px, #c1b6a305 -25px 25px;

        img {
          height: 100%;
          filter: brightness(0.95);
        }
      }

      .small-product-img {
        position: absolute;
        width: 230px;
        height: 230px;
        overflow: hidden;
        border-radius: 0.25rem;
        z-index: 20;
        bottom: 4rem;
        left: -4rem;
        background-color: #c1b6a340;
        box-shadow: #c1b6a340 -5px 5px, #c1b6a330 -10px 10px,
          #c1b6a320 -15px 15px, #c1b6a310 -20px 20px, #c1b6a305 -25px 25px;
      }

      img {
        width: 100%;
        object-fit: cover;
        transition: all 0.6s ease-in-out;

        :hover {
          filter: brightness(0.8);
          transform: scale(1.08);
        }
      }
    }
  }
`;
