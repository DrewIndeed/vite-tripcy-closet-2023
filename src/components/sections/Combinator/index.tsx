import { useEffect } from "react";
import { CombinatorWrapper } from "./styles.js";
import Intro from "../Intro/index.js";
import { common as commonTheme } from "@/styles/themes";
import gsap from "gsap";

const Combinator = () => {
  useEffect(() => {
    gsap.to("#intro", {
      duration: 2,
      translateX: "-100%",
      ease: "expo.inOut",
      delay: 3,
    });

    gsap.to("#intro-jump-1", {
      duration: 1.8,
      translateX: "-100%",
      ease: "expo.inOut",
      delay: 4,
    });

    gsap.to("#intro-jump-2", {
      duration: 1.5,
      translateX: "-100%",
      ease: "expo.inOut",
      delay: 4.6,
    });
  }, []);

  return (
    <CombinatorWrapper>
      <Intro
        svgColorHex={commonTheme.colors.typo}
        textColorHex={commonTheme.colors.typo}
        bgColorHex={commonTheme.colors.bg2}
      />
      <div
        className="jump"
        id="intro-jump-1"
        style={{
          backgroundColor: commonTheme.colors.typo,
          width: "100vw",
          zIndex: 100,
        }}
      />
      <div
        className="jump"
        id="intro-jump-2"
        style={{
          backgroundColor: commonTheme.colors.sup3,
          width: "50vw",
          zIndex: 50,
        }}
      />
      <div className="jump">
        <div className="welcome-content">One</div>
        <div className="welcome-content">Two</div>
      </div>
    </CombinatorWrapper>
  );
};

export default Combinator;
