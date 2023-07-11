import { imgAttributes } from "@constants/obj";
import { actionBtnText, innerDesc, slogan } from "@constants/text";
import anime from "animejs";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MediaQuery from "react-responsive";
// import { Tooltip } from "react-tooltip";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { BannerWrapper } from "./style";

const Banner = () => {
  const { scroll } = useLocomotiveScroll();
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
        targets: ".cards-pack-img",
        opacity: [0, 1],
        rotate: [15, 0],
        translateX: [100, 0],
        translateY: [-100, 0],
        easing: "easeInOutSine",
        duration: 1500,
        delay: 3200,
      });
      anime({
        targets: ".card-tag-img",
        opacity: [0, 1],
        rotate: [15, 0],
        translateX: [100, 0],
        translateY: [-100, 0],
        easing: "easeInOutSine",
        duration: 1500,
        delay: 3600,
      });
    };

    // anim ahihi
    animBanner();
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
          {/* <Tooltip id="banner-shopnow-btn" /> */}
          <button
            data-tooltip-id="banner-shopnow-btn"
            data-tooltip-content="Coming Soon"
            data-tooltip-place="right"
            data-tooltip-delay-hide={500}
            onClick={() => {
              scroll && scroll?.scrollTo("#collections");
            }}
          >
            {actionBtnText}
          </button>
        </div>

        <div className="model">
          <MediaQuery minWidth={1100}>
            <div className="cards-pack-img">
              <LazyLoadImage {...imgAttributes.banner.brandCardsPack} />
            </div>

            <div className="card-tag-img">
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
