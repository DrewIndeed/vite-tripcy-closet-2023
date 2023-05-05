import styled from "styled-components";
import { devices } from "@styles/themes";

export const CollectionWrapper = styled.section`
  width: 100%;
  height: 120vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bg2};
  overflow: hidden;
  padding-top: 4rem;
  padding-bottom: 4rem;

  p {
    width: 100%;
    white-space: nowrap;
    color: ${(props) => props.theme.colors.typo1};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: ${(props) => props.theme.colors.out2};
  }

  #title {
    /* background-color: cyan; */
    font-size: 8em;
    font-style: italic;
    z-index: 20;
  }

  #subtitle {
    /* background-color: green; */
    letter-spacing: 0.25rem;
    text-align: center;
  }

  .preview-photos {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 2rem 0;
    justify-content: center;
    align-items: center;

    .col {
      z-index: 10;
      flex: 1;
      height: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .img-container {
      width: 85%;
      height: 80%;
      overflow: hidden;
    }

    .side-col-left {
      align-items: flex-start;

      .img-container {
        border-top-right-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
        background-color: #8b8a8730;
        box-shadow: #8b8a8730 05px 05px, #8b8a8720 10px 10px,
          #8b8a8710 15px 15px, #8b8a8705 20px 20px;
      }
    }

    .side-col-right {
      align-items: flex-end;

      .img-container {
        border-top-left-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;
        background-color: #8b8a8730;
        box-shadow: #8b8a8730 -05px 05px, #8b8a8720 -10px 10px,
          #8b8a8710 -15px 15px, #8b8a8705 -20px 20px;
      }
    }

    .center {
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
      background-color: #8b8a8730;
      box-shadow: #8b8a8740 0px 5px, #8b8a8730 0px 10px, #8b8a8720 0px 15px,
        #8b8a8710 0px 20px, #8b8a8705 0px 25px;
    }
  }
`;
