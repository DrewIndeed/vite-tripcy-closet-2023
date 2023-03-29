import { stringToStyle } from "@utils";
import anime from "animejs";
import gsap from "gsap";
import { common as commonTheme } from "@/styles/themes";
import { useEffect } from "react";
import { IntroWrapper } from "./styles";

type Props = {
  svgColorHex?: string;
  textColorHex?: string;
  bgColorHex?: string;
};

const Intro = (props: Props) => {
  const {
    svgColorHex = "#ffffff",
    textColorHex = "#ffffff",
    bgColorHex = commonTheme.colors.typo,
  } = props;

  useEffect(() => {
    gsap.from("#part1", {
      opacity: 0,
      y: -150,
      ease: "expo.inOut",
    });
    gsap.to("#part1", {
      duration: 1.5,
      opacity: 1,
      y: 0,
      ease: "expo.inOut",
    });

    anime.timeline().add({
      targets: "#part2",
      opacity: [0, 1],
      translateX: [-75, 50, 0],
      easing: "easeInOutSine",
      duration: 2000,
      delay: 1200,
    });

    gsap.from(".part3", {
      opacity: 0,
      y: 150,
      ease: "expo.inOut",
    });

    gsap.to(".part3", {
      duration: 1.5,
      opacity: 1,
      y: 0,
      ease: "expo.inOut",
    });

    const headerWrapper: HTMLDivElement | null =
      document.querySelector(".header");
    headerWrapper!.innerHTML = headerWrapper!.textContent!.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
    anime.timeline().add({
      targets: ".header .letter",
      opacity: [0, 1],
      translateY: [75, 0],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 2000,
      delay: (_, i) => 2000 + 40 * i,
    });
  }, []);

  return (
    <IntroWrapper id="intro" style={{ backgroundColor: bgColorHex }}>
      <div className="svg-wrapper">
        <svg
          id="welcome-logo"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="696px"
          height="698px"
          style={stringToStyle(
            "shape-rendering:geometricPrecision;text-rendering:geometricPrecision; image-rendering:optimizeQuality;fill-rule:evenodd;clip-rule:evenodd"
          )}
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g id="part1">
            <path
              fill={svgColorHex}
              d="M 412.5,30.5 C 405.843,29.9649 399.51,31.1316 393.5,34C 390.734,35.371 388.401,37.2043 386.5,39.5C 382.088,44.0054 378.422,49.0054 375.5,54.5C 374.732,55.2625 374.232,56.2625 374,57.5C 373.5,91.8317 373.333,126.165 373.5,160.5C 360.833,160.5 348.167,160.5 335.5,160.5C 335.667,126.498 335.5,92.4984 335,58.5C 334.722,57.5842 334.222,56.9175 333.5,56.5C 332.833,56.5 332.5,56.1667 332.5,55.5C 333.043,55.44 333.376,55.1067 333.5,54.5C 332.196,50.8507 330.196,47.8507 327.5,45.5C 325.167,43.8333 323.167,41.8333 321.5,39.5C 320.883,37.7708 319.883,36.2708 318.5,35C 314.888,33.85 311.222,33.0166 307.5,32.5C 302.739,32.2065 298.072,31.3731 293.5,30C 292.185,28.6054 292.519,27.6054 294.5,27C 334.852,26.1956 375.185,26.3623 415.5,27.5C 415.5,28.5 415.5,29.5 415.5,30.5C 414.5,30.5 413.5,30.5 412.5,30.5 Z"
            />
          </g>

          <g id="part2">
            <path
              fill={svgColorHex}
              d="M 209.5,180.5 C 304.167,180.5 398.833,180.5 493.5,180.5C 493.5,183.5 493.5,186.5 493.5,189.5C 398.833,189.5 304.167,189.5 209.5,189.5C 209.5,186.5 209.5,183.5 209.5,180.5 Z"
            />
          </g>

          <g className="part3">
            <path
              fill={svgColorHex}
              d="M 334.5,207.5 C 347.5,207.5 360.5,207.5 373.5,207.5C 373.333,229.836 373.5,252.169 374,274.5C 377.285,276.137 380.785,276.804 384.5,276.5C 391.822,277.723 398.822,279.723 405.5,282.5C 406.78,283.931 408.447,284.598 410.5,284.5C 410.421,285.93 410.754,287.264 411.5,288.5C 409.488,289.029 407.988,290.696 407,293.5C 397.752,293.719 388.419,292.719 379,290.5C 377.293,290.508 375.793,290.842 374.5,291.5C 373.167,378.167 373.167,464.833 374.5,551.5C 383.217,550.895 391.884,549.895 400.5,548.5C 403.91,548.543 407.243,548.043 410.5,547C 414.848,545.621 418.848,543.787 422.5,541.5C 427.012,540.954 431.345,539.954 435.5,538.5C 435.062,542.072 434.396,545.572 433.5,549C 433.728,549.399 434.062,549.565 434.5,549.5C 417.963,559.904 399.963,566.571 380.5,569.5C 378.5,569.5 376.5,569.5 374.5,569.5C 374.333,592.169 374.5,614.836 375,637.5C 375.232,638.737 375.732,639.737 376.5,640.5C 378.083,642.663 379.416,644.996 380.5,647.5C 384.988,655.711 391.988,660.044 401.5,660.5C 405.912,660.902 410.246,661.735 414.5,663C 414.957,663.414 415.291,663.914 415.5,664.5C 413.922,665.298 412.256,665.798 410.5,666C 371.331,666.831 332.331,666.665 293.5,665.5C 293.791,664.351 294.624,663.684 296,663.5C 309.379,662.937 320.379,657.603 329,647.5C 331.287,644.928 332.453,641.928 332.5,638.5C 332.328,637.508 332.662,636.842 333.5,636.5C 334.663,614.671 334.83,592.671 334,570.5C 326.089,567.699 317.922,566.033 309.5,565.5C 254.506,549.339 219.006,513.672 203,458.5C 201.714,453.904 200.881,449.237 200.5,444.5C 200.068,431.667 199.401,419 198.5,406.5C 199.64,398.633 201.307,390.966 203.5,383.5C 205.943,378.5 207.61,373.166 208.5,367.5C 212.28,356.603 217.614,346.603 224.5,337.5C 225.423,336.697 226.423,336.53 227.5,337C 230.78,339.862 234.28,342.362 238,344.5C 242.984,344.285 248.151,343.785 253.5,343C 265.985,336.224 269.818,326.057 265,312.5C 263.053,309.834 260.887,307.334 258.5,305C 259.665,303.008 260.998,301.175 262.5,299.5C 266.995,295.749 271.995,292.749 277.5,290.5C 290.695,285.226 304.028,280.559 317.5,276.5C 322.892,276.197 328.225,275.531 333.5,274.5C 334.5,252.177 334.833,229.843 334.5,207.5 Z M 330.5,298.5 C 331.832,308.311 332.499,318.477 332.5,329C 333.537,400.832 333.537,472.666 332.5,544.5C 303.51,535.164 280.176,518.164 262.5,493.5C 251.068,473.539 244.068,452.206 241.5,429.5C 241.5,429.167 241.5,428.833 241.5,428.5C 239.361,368.838 265.361,326.672 319.5,302C 323.021,300.326 326.687,299.16 330.5,298.5 Z"
            />
          </g>

          <g className="part3">
            <path
              fill={svgColorHex}
              d="M 405.5,282.5 C 445.962,296.457 474.795,323.124 492,362.5C 492.49,363.793 492.657,365.127 492.5,366.5C 489.302,367.036 486.635,366.369 484.5,364.5C 483.78,360.055 481.78,356.388 478.5,353.5C 455.897,317.507 423.231,297.173 380.5,292.5C 378.735,291.539 376.735,291.205 374.5,291.5C 375.793,290.842 377.293,290.508 379,290.5C 388.419,292.719 397.752,293.719 407,293.5C 407.988,290.696 409.488,289.029 411.5,288.5C 410.754,287.264 410.421,285.93 410.5,284.5C 408.447,284.598 406.78,283.931 405.5,282.5 Z"
            />
          </g>

          <g className="part3">
            <path
              fill={svgColorHex}
              d="M 262.5,299.5 C 260.998,301.175 259.665,303.008 258.5,305C 260.887,307.334 263.053,309.834 265,312.5C 269.818,326.057 265.985,336.224 253.5,343C 248.151,343.785 242.984,344.285 238,344.5C 234.28,342.362 230.78,339.862 227.5,337C 226.423,336.53 225.423,336.697 224.5,337.5C 227.204,332.099 230.871,327.432 235.5,323.5C 241.86,317.472 248.193,311.472 254.5,305.5C 256.8,303.016 259.467,301.016 262.5,299.5 Z"
            />
          </g>

          <g className="part3">
            <path
              fill={svgColorHex}
              d="M 434.5,549.5 C 434.062,549.565 433.728,549.399 433.5,549C 434.396,545.572 435.062,542.072 435.5,538.5C 431.345,539.954 427.012,540.954 422.5,541.5C 429.921,538.288 436.921,534.288 443.5,529.5C 443.897,530.525 444.563,530.692 445.5,530C 455.064,523.27 463.064,515.104 469.5,505.5C 469.611,504.883 469.944,504.383 470.5,504C 473.817,503.502 477.15,503.335 480.5,503.5C 480.245,506.016 479.411,508.35 478,510.5C 465.52,525.816 451.02,538.816 434.5,549.5 Z"
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
