import styled from "styled-components";
import { devices } from "@styles/themes";
import { motion } from "framer-motion";

export const CollectionDetailsWrapper = styled(motion.section)`
  width: 100%;
  opacity: 0;
  min-height: 100dvh;
  background-color: ${(props) => `${props.theme.colors.out2}`};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 100%;
  right: 0;
  z-index: 100;
`;
