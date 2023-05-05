import { navItemsData } from "@constants/arr";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import anime from "animejs";
import { motion, useAnimation } from "framer-motion";
import { useCallback, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { MainNavWrapper } from "./style";
import { stringRepeat } from "@utils";

const MainNav = () => {
  const { scroll } = useLocomotiveScroll();
  const [isOpen, setIsOpen] = useState(false);
  const navContainerControls = useAnimation();
  const onMenuOpen = useCallback(() => {
    if (!isOpen) {
      navContainerControls.start({
        left: 0,
        opacity: [0, 1],
        transition: {
          duration: 0.8,
          delay: 0.4,
        },
      });
      anime({
        targets: ".menu__item",
        opacity: [0, 1],
        translateY: [-30, 0],
        easing: "easeInOutSine",
        duration: 1000,
        delay: anime.stagger(100, { start: 500 }),
      });
      setIsOpen(true);
    }
  }, [isOpen]);
  const onMenuClose = () => {
    if (isOpen) {
      navContainerControls.start({
        left: "-100%",
        opacity: [1, 0],
        transition: {
          duration: 0.8,
        },
      });
      setIsOpen(false);
    }
  };

  return (
    <MainNavWrapper>
      <div id="nav-content">
        {/* LOGO TO OPEN MENU */}
        <div className="logo-container" onClick={onMenuOpen}>
          <Bars3Icon style={{ mixBlendMode: "difference" }} />
        </div>

        {/* HIDDEN MENU CONTENT */}
        <motion.div
          className="nav-container noselect"
          animate={navContainerControls}
        >
          {/* MENU CLOSE BTN */}
          <div className="menu-close" onClick={onMenuClose}>
            <XMarkIcon style={{ width: "40px", height: "40px" }} />
          </div>

          {/* MENU FOOTER */}
          <div className="socials">
            <span>facebook</span>
            <span>instagram</span>
          </div>

          {/* MENU ITEMS */}
          <nav className="menu">
            {navItemsData.map(
              ({ text, href, imgSrc, imgSrcSet, imgSizes, isOpen }) => {
                return (
                  <div
                    className="menu__item"
                    key={text}
                    onClick={() => {
                      onMenuClose();
                      scroll.scrollTo(href);
                    }}
                  >
                    <p className="menu__item-link">{text}</p>
                    <LazyLoadImage
                      width="100px"
                      height="200px"
                      className="menu__item-img"
                      alt="Nav items random content"
                      src={imgSrc}
                      srcSet={imgSrcSet}
                      sizes={imgSizes}
                    />
                    <div className="marquee">
                      <div className="marquee__inner">
                        <span>
                          {stringRepeat(7, isOpen ? text : "Coming Soon")}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </nav>
        </motion.div>
      </div>
    </MainNavWrapper>
  );
};

export default MainNav;
