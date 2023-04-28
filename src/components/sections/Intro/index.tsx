import { common as commonTheme } from "@styles/themes";
import anime from "animejs";
import { useEffect } from "react";
import { IntroWrapper } from "./style";

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
            <path
              id="part1"
              d="M9254 15255 c-11 -29 16 -45 75 -45 78 0 173 -25 245 -62 77 -41 184
              -146 222 -218 l29 -55 5 -760 5 -760 287 -3 287 -2 3 752 3 753 33 69 c77 163
              276 286 463 286 65 0 99 21 78 46 -10 12 -148 14 -871 14 -757 0 -859 -2 -864
              -15z"
            />

            <path
              id="part2"
              d="M8720 13100 l-665 -5 0 -75 0 -75 1900 -5 c1045 -3 1960 -3 2033 -1
              l132 3 0 78 0 78 -122 7 c-128 6 -2131 4 -3278 -5z"
            />

            <path
              id="part3"
              d="M9837 12703 c-4 -3 -7 -217 -7 -474 l0 -469 -22 -4 c-13 -3 -68 -12
              -123 -21 -222 -37 -399 -96 -630 -210 -225 -111 -369 -215 -540 -388 -299
              -302 -477 -637 -568 -1067 -20 -95 -22 -133 -22 -405 0 -290 1 -304 27 -426
              74 -336 222 -653 422 -899 336 -416 823 -701 1345 -787 l112 -18 -3 -480 -3
              -480 -24 -49 c-14 -27 -51 -77 -83 -112 -105 -112 -201 -157 -373 -178 -92
              -10 -100 -13 -103 -34 l-3 -22 873 2 c864 3 873 3 873 23 0 18 -11 21 -90 31
              -160 20 -258 64 -356 163 -72 72 -103 128 -119 210 -6 31 -10 234 -10 482 0
              360 2 430 14 442 8 8 41 18 73 21 73 9 283 65 388 104 289 108 529 260 756
              480 125 121 284 315 273 333 -3 5 -36 9 -73 9 l-69 0 -41 -55 c-66 -87 -239
              -251 -326 -310 -267 -179 -619 -296 -920 -307 l-70 -3 -3 1847 c-2 1795 -2
              1847 17 1853 22 7 246 -28 352 -55 283 -73 582 -228 773 -401 158 -144 356
              -415 411 -561 l18 -48 54 0 c65 0 65 -9 -9 149 -94 201 -207 363 -383 549
              -134 142 -333 290 -512 380 -161 82 -436 173 -633 211 l-85 16 -3 483 -2 482
              -283 0 c-156 0 -287 -3 -290 -7z m3 -3037 c0 -1007 -4 -1777 -9 -1780 -28 -18
              -371 139 -514 235 -293 196 -470 397 -613 694 -100 209 -149 374 -184 620 -19
              127 -21 181 -17 345 5 214 24 338 79 509 137 430 479 815 911 1026 108 53 293
              123 330 124 16 1 17 -90 17 -1773z"
            />
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
