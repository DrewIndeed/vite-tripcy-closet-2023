import anime from "animejs";
import { useEffect } from "react";
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
      targets: [".model-img"],
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
  }, []);

  return (
    <BannerWrapper data-scroll-section>
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
            Tripcy Closet hightens a gentle muse that conceals massive elegance
            and mild luxury, making the best of each individual's natural beauty
            to leverage our brand and products.
          </p>
          <button>Explore More</button>
        </div>

        <div className="model">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#af562a99"
              d="M33.9,-45.5C44.4,-31.7,53.6,-21.4,61,-6.7C68.4,8,74.2,27.1,69.2,43.9C64.2,60.8,48.5,75.5,31.6,77.8C14.6,80,-3.5,69.9,-22.4,62.6C-41.2,55.2,-60.7,50.8,-70.3,38.5C-79.9,26.2,-79.6,6.1,-75.7,-12.9C-71.8,-31.9,-64.4,-49.9,-51.2,-63.3C-38,-76.6,-19,-85.4,-3.6,-81.1C11.7,-76.8,23.5,-59.4,33.9,-45.5Z"
              transform="translate(100 100)"
            />
          </svg>

          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#d7b89195"
              d="M33.9,-45.5C44.4,-31.7,53.6,-21.4,61,-6.7C68.4,8,74.2,27.1,69.2,43.9C64.2,60.8,48.5,75.5,31.6,77.8C14.6,80,-3.5,69.9,-22.4,62.6C-41.2,55.2,-60.7,50.8,-70.3,38.5C-79.9,26.2,-79.6,6.1,-75.7,-12.9C-71.8,-31.9,-64.4,-49.9,-51.2,-63.3C-38,-76.6,-19,-85.4,-3.6,-81.1C11.7,-76.8,23.5,-59.4,33.9,-45.5Z"
              transform="translate(100 100)"
            />
          </svg>

          <div className="model-img" data-scroll data-scroll-speed="-4">
            <img
              width="750px"
              height="900px"
              sizes="2500px"
              src="/imgs/samples/sample1.jpg"
              alt="Female model sitting looking down"
            />
          </div>

          <div className="small-product-img">
            <img
              sizes="2500px"
              width="320px"
              height="320px"
              src="/imgs/samples/sample5.jpg"
              alt="Sample blazer"
            />
          </div>
        </div>
      </div>

      <div className="brandname">
        <div className="text-container">
          <p>TRIPCY</p>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default Banner;
