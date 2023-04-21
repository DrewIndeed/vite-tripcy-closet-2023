import anime from "animejs";
import { motion, useAnimation } from "framer-motion";
import { MainNavWrapper } from "./style";

const MainNav = () => {
  const navContainerControls = useAnimation();

  return (
    <MainNavWrapper>
      <div id="nav-content">
        <div
          className="logo-container"
          onClick={() => {
            navContainerControls.start({
              left: 0,
              opacity: [0, 1],
              transition: {
                duration: 0.8,
              },
            });

            anime({
              targets: ".menu__item",
              opacity: [0, 1],
              translateY: [-50, 20, 0],
              easing: "easeInOutSine",
              duration: 1000,
              delay: anime.stagger(100, { start: 800 }),
            });
          }}
        >
          <img id="logo" src="/imgs/logo.svg" alt="Main navigation bar logo" />
        </div>

        <motion.div
          className="nav-container noselect"
          animate={navContainerControls}
        >
          <div
            className="menu-close"
            onClick={() => {
              navContainerControls.start({
                left: "-100%",
                opacity: [1, 0],
                transition: {
                  duration: 0.8,
                },
              });
            }}
          >
            close
          </div>

          <div className="socials">
            <span>facebook</span>
            <span>instagram</span>
          </div>

          <nav className="menu">
            <div className="menu__item">
              <a className="menu__item-link">Home</a>
              <img className="menu__item-img" src="/imgs/samples/sample5.jpg" />
              <div className="marquee">
                <div className="marquee__inner">
                  <span>Home - Home - Home - Home - Home - Home - Home</span>
                </div>
              </div>
            </div>
            <div className="menu__item">
              <a className="menu__item-link">Showcase</a>
              <img className="menu__item-img" src="/imgs/samples/sample5.jpg" />
              <div className="marquee">
                <div className="marquee__inner">
                  <span>
                    Showcase - Showcase - Showcase - Showcase - Showcase -
                    Showcase - Showcase
                  </span>
                </div>
              </div>
            </div>
            <div className="menu__item">
              <a className="menu__item-link">About</a>
              <img className="menu__item-img" src="/imgs/samples/sample5.jpg" />
              <div className="marquee">
                <div className="marquee__inner">
                  <span>
                    About - About - About - About - About - About - About
                  </span>
                </div>
              </div>
            </div>
            <div className="menu__item">
              <a className="menu__item-link">Contact</a>
              <img className="menu__item-img" src="/imgs/samples/sample5.jpg" />
              <div className="marquee">
                <div className="marquee__inner">
                  <span>
                    Contact - Contact - Contact - Contact - Contact - Contact -
                    Contact
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </motion.div>
      </div>
    </MainNavWrapper>
  );
};

export default MainNav;
