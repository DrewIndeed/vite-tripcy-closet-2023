import useGlobalMedia from "@hooks/useGlobalMedia";
import { common as commonTheme } from "@styles/themes";
import anime from "animejs";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MediaQuery from "react-responsive";
import { BannerWrapper } from "./styles";

const Banner = () => {
  const { MediaWrappers, booleans } = useGlobalMedia();

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
      <MediaWrappers.Tablet>
        <div className="content">
          <div className="text">
            <p>
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
            <p>For Your Inner Chic.</p>
            <p id="inner-desc">
              Tripcy Closet hightens a gentle muse that conceals massive
              elegance and mild luxury, making the best of each individual's
              natural beauty to leverage our brand and products.
            </p>
            <button>Explore More</button>
          </div>

          <div className="model">
            <MediaWrappers.Tablet>
              <svg
                id="svg-hard"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill={commonTheme.colors.out2}
                  d="M33.9,-45.5C44.4,-31.7,53.6,-21.4,61,-6.7C68.4,8,74.2,27.1,69.2,43.9C64.2,60.8,48.5,75.5,31.6,77.8C14.6,80,-3.5,69.9,-22.4,62.6C-41.2,55.2,-60.7,50.8,-70.3,38.5C-79.9,26.2,-79.6,6.1,-75.7,-12.9C-71.8,-31.9,-64.4,-49.9,-51.2,-63.3C-38,-76.6,-19,-85.4,-3.6,-81.1C11.7,-76.8,23.5,-59.4,33.9,-45.5Z"
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
                  d="M33.9,-45.5C44.4,-31.7,53.6,-21.4,61,-6.7C68.4,8,74.2,27.1,69.2,43.9C64.2,60.8,48.5,75.5,31.6,77.8C14.6,80,-3.5,69.9,-22.4,62.6C-41.2,55.2,-60.7,50.8,-70.3,38.5C-79.9,26.2,-79.6,6.1,-75.7,-12.9C-71.8,-31.9,-64.4,-49.9,-51.2,-63.3C-38,-76.6,-19,-85.4,-3.6,-81.1C11.7,-76.8,23.5,-59.4,33.9,-45.5Z"
                  transform="translate(100 100)"
                />
              </svg>
            </MediaWrappers.Tablet>

            <MediaQuery minWidth={1100}>
              <div className="model-img" data-scroll data-scroll-speed="-4">
                <LazyLoadImage
                  width="320px"
                  height="750px"
                  sizes="(max-width: 1400px) 100vw, 1400px"
                  srcSet="
                  /imgs/samples/sample1_wi2rxm_c_scale_w_200.jpg 200w,
                  /imgs/samples/sample1_wi2rxm_c_scale_w_786.jpg 786w,
                  /imgs/samples/sample1_wi2rxm_c_scale_w_1176.jpg 1176w,
                  /imgs/samples/sample1_wi2rxm_c_scale_w_1400.jpg 1400w"
                  src="/imgs/samples/sample1_wi2rxm_c_scale_w_1400.jpg"
                  alt="Female model sitting looking down"
                />
              </div>

              <div className="small-product-img">
                <LazyLoadImage
                  width="230px"
                  height="230px"
                  sizes="(max-width: 1400px) 100vw, 1400px"
                  srcSet="
                  /imgs/samples/sample5_ympmk3_c_scale_w_200.jpg 200w,
                  /imgs/samples/sample5_ympmk3_c_scale_w_780.jpg 780w,
                  /imgs/samples/sample5_ympmk3_c_scale_w_1159.jpg 1159w,
                  /imgs/samples/sample5_ympmk3_c_scale_w_1253.jpg 1253w,
                  /imgs/samples/sample5_ympmk3_c_scale_w_1400.jpg 1400w"
                  src="/imgs/samples/sample5_ympmk3_c_scale_w_1400.jpg"
                  alt="Sample blazer"
                />
              </div>
            </MediaQuery>
          </div>
        </div>
      </MediaWrappers.Tablet>

      <MediaWrappers.Tablet>
        <div className="brandname">
          <div className="text-container">
            <p>TRIPCY CLOSET</p>
          </div>
        </div>
      </MediaWrappers.Tablet>
    </BannerWrapper>
  );
};

export default Banner;
