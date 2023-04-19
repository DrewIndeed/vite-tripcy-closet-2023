import { common as commonTheme } from "@styles/themes";
import anime from "animejs";
import { useEffect } from "react";
import {
  innerDesc,
  svgHardD,
  svgLightD,
  sampleModelSrcSet,
  sampleBlazerSrcSet,
} from "@constants/text";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MediaQuery from "react-responsive";
import { BannerWrapper } from "./styles";

const Banner = () => {
  useEffect(() => {
    anime.timeline().add({
      targets: "#stay",
      translateX: [0, 50, -10, 0],
      opacity: [0, 1],
      easing: "easeInOutSine",
      duration: 2000,
      delay: 5000,
    });
    anime.timeline().add({
      targets: "#stylish",
      translateX: [0, 50, -10, 0],
      opacity: [0, 1],
      easing: "easeInOutSine",
      duration: 2200,
      delay: 5000,
    });
    anime.timeline().add({
      targets: ".model-img",
      translateX: [-60, 10, 0],
      easing: "easeInOutSine",
      duration: 3000,
      delay: 5000,
    });
    anime.timeline().add({
      targets: ".small-product-img",
      translateX: [60, -10, 0],
      easing: "easeInOutSine",
      duration: 3000,
      delay: 5000,
    });
    anime.timeline().add({
      targets: ".right-none",
      translateX: [-60, 10, 0],
      easing: "easeInOutSine",
      duration: 3000,
      delay: 5000,
    });
    anime.timeline().add({
      targets: ".right-medium",
      translateX: [-60, 10, 0],
      easing: "easeInOutSine",
      duration: 3000,
      delay: 5500,
    });
    anime.timeline().add({
      targets: ".right-hard",
      translateX: [-60, 10, 0],
      easing: "easeInOutSine",
      duration: 3000,
      delay: 6000,
    });
  }, []);

  return (
    <BannerWrapper data-scroll-section>
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
          <p id="chic">For Your Inner Chic.</p>
          <p id="inner-desc">{innerDesc}</p>
          <button>Explore More</button>
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
              <LazyLoadImage
                width="320px"
                height="750px"
                sizes="(max-width: 1400px) 100vw, 1400px"
                srcSet={sampleModelSrcSet}
                src="/imgs/samples/sample1_wi2rxm_c_scale_w_1400.jpg"
                alt="Female model sitting looking down"
              />
            </div>

            <div className="small-product-img">
              <LazyLoadImage
                width="230px"
                height="230px"
                sizes="(max-width: 1400px) 100vw, 1400px"
                srcSet={sampleBlazerSrcSet}
                src="/imgs/samples/sample5_ympmk3_c_scale_w_1400.jpg"
                alt="Sample blazer"
              />
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
