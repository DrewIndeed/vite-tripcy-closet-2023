import {
  actionBtnText,
  innerDesc,
  slogan,
  bannerBlobHardD,
  bannerBlobLightD,
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
  useEffect(() => {
    const animBanner = () => {
      anime({
        targets: ".text",
        translateX: [100, 0],
        opacity: [0, 1],
        easing: "easeInOutSine",
        duration: 1500,
        delay: 3200,
      });
      anime({
        targets: ".brandname",
        translateX: [100, 0],
        opacity: [0, 1],
        easing: "easeInOutSine",
        duration: 1500,
        delay: 3200,
      });
      anime({
        targets: ".model-img",
        opacity: [0, 1],
        rotate: [15, 0],
        translateX: [100, 0],
        translateY: [-100, 0],
        easing: "easeInOutSine",
        duration: 1500,
        delay: 3200,
      });
      anime({
        targets: ".small-product-img",
        opacity: [0, 1],
        rotate: [15, 0],
        translateX: [100, 0],
        translateY: [-100, 0],
        easing: "easeInOutSine",
        duration: 1500,
        delay: 3600,
      });

      anime({
        targets: "#svg-hard",
        opacity: [0, 1],
        easing: "easeInOutSine",
        duration: 1500,
        delay: 4000,
      });
      anime({
        targets: "#svg-light",
        opacity: [0, 1],
        easing: "easeInOutSine",
        duration: 1500,
        delay: 4000,
      });
    };
    
    // animBanner();
  }, []);

  return (
    <BannerWrapper data-scroll-section data-scroll-id="home" id="home">
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
              d={bannerBlobHardD}
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
              d={bannerBlobLightD}
              transform="translate(100 100)"
            />
          </svg>

          <MediaQuery minWidth={1100}>
            <div className="model-img" data-scroll data-scroll-speed="-4">
              <LazyLoadImage {...imgAttributes.banner.brandCardsPack} />
            </div>

            <div className="small-product-img">
              <LazyLoadImage {...imgAttributes.banner.verticalTag} />
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
