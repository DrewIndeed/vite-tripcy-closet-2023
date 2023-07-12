import styled from "styled-components";
import { devices } from "@styles/themes";

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 10rem;
  position: relative;
  background-image: url("/imgs/footer-poly-grid.svg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  box-shadow: #8b8a8740 0px -5px, #8b8a8730 0px -10px, #8b8a8720 0px -15px,
    #8b8a8710 0px -20px, #8b8a8705 0px -25px;
`;

export const FooterContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* background-color: #00000060; */
  backdrop-filter: blur(2px);

  display: flex;
  justify-content: center;
  align-items: center;

  #content-wrapper {
    width: max-content;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    color: #fff;
    /* background-color: lime; */

    #content {
      /* background-color: aqua; */
      font-size: 1em;
      width: 100%;
      flex: 1;
      display: flex;
      gap: 0.5rem;
      flex-direction: column;
      align-items: center;

      justify-content: center;
      padding-top: 0.1rem;

      .dots {
        margin-inline: 1.5rem;
      }

      #policies {
        font-size: 1.05em;
        text-decoration: underline;
        text-underline-offset: 3px;
        text-decoration-thickness: 3px;
      }
    }

    #copyright {
      font-size: 0.9em;
      opacity: 0.5;
      padding-bottom: 0.5rem;
    }
  }
`;
