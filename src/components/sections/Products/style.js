import styled from "styled-components";
import { devices } from "@styles/themes";

export const ProductsWrapper = styled.section`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .cards {
    width: 100%;
    height: 100%;
    display: grid;
    gap: 3px;
    background-color: ${(props) => `${props.theme.colors.out2}90`};
    /* max-width: 1440px; */
    /* margin: 0 auto; */
    /*   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  }

  @media ${devices.tablet} {
    .cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media ${devices.laptopM} {
    .cards {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .card {
    /* background-color: dodgerblue;
    color: white; */
    /* padding: 1rem; */
    flex: 1;
    height: 100vh;
    position: relative;
    overflow: hidden;

    .img-overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      top: -100%;
      left: 0;
      background-color: ${(props) => props.theme.colors.sup2};
      transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

      @media ${devices.laptopM} {
        top: 0;
      }
    }

    .item-wrapper:hover .img-overlay {
      top: -100%;
    }

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(1);
      filter: brightness(0.6);
      transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);

      @media ${devices.laptopM} {
        transform: scale(1.5);
        filter: brightness(1);
      }
    }

    .item-wrapper:hover img {
      transform: scale(1);
      filter: brightness(0.6);
    }

    .item-copy {
      position: absolute;
      top: 0;
      width: 100%;
      /* height: 100%; */
      margin-top: 20vh;
      padding-left: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      text-transform: uppercase;
      line-height: 3rem;
      color: #ffffff;
      transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

      /* temp */
      /* border: 2px solid cyan; */

      @media ${devices.laptopL} {
        line-height: 4rem;
      }

      .item-name {
        position: relative;
        font-size: 3em;
        font-family: "Cochin Bold";
        font-weight: bold;
        transform: scaleY(1.4);

        @media ${devices.laptopL} {
          font-size: 4em;
        }
      }

      .item-subname {
        text-transform: none;
        font-size: 1.2em;
        margin-top: 0.75rem;
      }

      @media ${devices.laptopM} {
        color: ${(props) => props.theme.colors.typo1};
      }
    }

    .item-wrapper:hover .item-copy {
      color: #ffffff;
    }
  }
`;
