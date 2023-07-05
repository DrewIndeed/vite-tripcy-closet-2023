import styled from "styled-components";

export const SocialsNavWrapper = styled.div`
  left: 0;
  position: absolute;
  z-index: 30;
  height: 100dvh;
  width: 90px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  /* gap: 1.25rem; */

  /* TEMP */
  /* border: 1px solid brown; */

  .icon-wrapper {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.sup3};
    cursor: pointer;
    transform: translateX(-100px);
    opacity: 0;
    margin-bottom: 1.25rem;
  }

  .icons {
    width: 25px;
    height: 25px;
    color: #fff;
  }

  #insta-icon,
  .icon-wrapper {
    transition: all 0.4s ease-in-out;
  }

  .icon-wrapper:hover {
    transform: scale(1.1) translateX(10px);
    background-color: ${(props) => props.theme.colors.out2};
  }
`;
