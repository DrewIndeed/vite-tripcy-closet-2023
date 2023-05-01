import { common as commonTheme } from "@styles/themes";
import anime from "animejs";
import { useEffect } from "react";
import { IntroWrapper } from "./style";
import { svgLogoD } from "@constants/text";

type Props = {
  svgColorHex?: string;
  textColorHex?: string;
  bgColorHex?: string;
};

const Intro = (props: Props) => {
  const {
    svgColorHex = "#ffffff",
    textColorHex = "#ffffff",
    bgColorHex = commonTheme.colors.typo1,
  } = props;

  useEffect(() => {
    const animIntro = () => {
      anime({
        targets: "#part1",
        opacity: [0, 1],
        translateY: [0, 600, -300, 0],
        easing: "easeInOutSine",
        duration: 2000,
      });

      anime({
        targets: "#part3",
        opacity: [0, 1],
        translateY: [0, -600, 300, 0],
        easing: "easeInOutSine",
        duration: 2000,
      });

      anime({
        targets: "#part2",
        opacity: [0, 1],
        translateX: [0, -500, 300, 0],
        easing: "easeInOutSine",
        duration: 2000,
        delay: 1200,
      });

      const headerWrapper: HTMLDivElement | null =
        document.querySelector(".header");
      headerWrapper!.innerHTML = headerWrapper!.textContent!.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
      anime({
        targets: ".header .letter",
        opacity: [0, 1],
        translateY: [50, 0],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 2000,
        delay: (_, i) => 2000 + 40 * i,
      });

      anime({
        targets: "#intro",
        opacity: [1, 0],
        easing: "easeInSine",
        duration: 600,
        delay: 3000,
      });
    };

    animIntro();
  }, []);

  return (
    <IntroWrapper id="intro" style={{ backgroundColor: bgColorHex }}>
      <div className="svg-wrapper">
        <svg
          id="welcome-logo"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="2048.000000pt"
          height="2048.000000pt"
          viewBox="0 0 2048.000000 2048.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,2048.000000) scale(0.100000,-0.100000)"
            fill={svgColorHex}
            stroke="none"
          >
            <path id="part1" d={svgLogoD.part1} />
            <path id="part2" d={svgLogoD.part2} />
            <path id="part3" d={svgLogoD.part3} />
          </g>
        </svg>
      </div>

      <div className="header noselect" style={{ color: textColorHex }}>
        TRIPCY&nbsp;CLOSET
      </div>
    </IntroWrapper>
  );
};

export default Intro;
