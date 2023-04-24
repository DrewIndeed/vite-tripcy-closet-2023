import {
  actionBtnText,
  innerDesc,
  slogan,
  svgHardD,
  svgLightD,
} from "@constants/text";
import { imgAttributes } from "@constants/obj";
import { common as commonTheme } from "@styles/themes";
import { Tooltip } from "react-tooltip";
import anime from "animejs";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MediaQuery from "react-responsive";
import { BannerWrapper } from "./style";

const Banner = () => {
  // useEffect(() => {
  //   anime({
  //     targets: "#stay",
  //     translateX: [0, 50, -10, 0],
  //     opacity: [0, 1],
  //     easing: "easeInOutSine",
  //     duration: 2000,
  //     delay: 5000,
  //   });
  //   anime({
  //     targets: "#stylish",
  //     translateX: [0, 50, -10, 0],
  //     opacity: [0, 1],
  //     easing: "easeInOutSine",
  //     duration: 2200,
  //     delay: 5000,
  //   });
  //   anime({
  //     targets: ".model-img",
  //     translateX: [-60, 10, 0],
  //     easing: "easeInOutSine",
  //     duration: 3000,
  //     delay: 5000,
  //   });
  //   anime({
  //     targets: ".small-product-img",
  //     translateX: [60, -10, 0],
  //     easing: "easeInOutSine",
  //     duration: 3000,
  //     delay: 5000,
  //   });
  //   anime({
  //     targets: ".right-none",
  //     translateX: [-60, 10, 0],
  //     easing: "easeInOutSine",
  //     duration: 3000,
  //     delay: 5000,
  //   });
  //   anime({
  //     targets: ".right-medium",
  //     translateX: [-60, 10, 0],
  //     easing: "easeInOutSine",
  //     duration: 3000,
  //     delay: 5500,
  //   });
  //   anime({
  //     targets: ".right-hard",
  //     translateX: [-60, 10, 0],
  //     easing: "easeInOutSine",
  //     duration: 3000,
  //     delay: 6000,
  //   });
  // }, []);

  return (
    <BannerWrapper data-scroll-section id="home">
      <div className="content">
        <div className="text">
          <p id="text-container">
            <span
              id="stay"
              data-scroll
              data-scroll-speed="-4"
              data-scroll-direction="horizontal"
              data-scroll-target=".text"
              data-scroll-position="left"
            >
              Stay
            </span>
            <span
              id="stylish"
              data-scroll
              data-scroll-speed="-8"
              data-scroll-direction="horizontal"
              data-scroll-target=".text"
              data-scroll-position="left"
            >
              Stylish.
            </span>
          </p>
          <p id="chic">{slogan}.</p>
          <p id="inner-desc">{innerDesc}</p>
          <Tooltip id="banner-shopnow-btn" />
          <button
            data-tooltip-id="banner-shopnow-btn"
            data-tooltip-content="Coming Soon"
            data-tooltip-place="right"
            data-tooltip-delay-hide={500}
          >
            {actionBtnText}
          </button>
        </div>

        <div className="model">
          <svg
            id="svg-hard"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill={commonTheme.colors.out2}
              d={svgHardD}
              transform="translate(100 100)"
            />
          </svg>

          <svg
            id="svg-light"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill={commonTheme.colors.sup3}
              d={svgLightD}
              transform="translate(100 100)"
            />
          </svg>

          <MediaQuery minWidth={1100}>
            <div className="model-img" data-scroll data-scroll-speed="-4">
              <LazyLoadImage {...imgAttributes.banner.mainModel} />
            </div>

            <div className="small-product-img">
              <LazyLoadImage {...imgAttributes.banner.subModel} />
            </div>
          </MediaQuery>
        </div>
      </div>
      <div className="brandname">
        <div className="text-container">
          <p>TRIPCY CLOSET</p>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default Banner;
