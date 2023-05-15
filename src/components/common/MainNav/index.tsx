import { navItemsData } from "@constants/arr";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { stringRepeat } from "@utils";
import anime from "animejs";
import { motion, useAnimation } from "framer-motion";
import { useCallback, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { MainNavWrapper } from "./style";

type Props = {
  isMobile?: boolean;
};

const MainNav = ({ isMobile }: Props) => {
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
          <Bars3Icon className="menu-open-icon" />
        </div>

        {/* HIDDEN MENU CONTENT */}
        <motion.div className="nav-container" animate={navContainerControls}>
          {/* MENU CLOSE BTN */}
          <div className="menu-close" onClick={onMenuClose}>
            <XMarkIcon className="menu-close-icon" />
          </div>

          {/* MENU ITEMS */}
          <nav className="menu">
            {navItemsData.map(
              ({ text, href, imgSrc, imgSrcSet, imgSizes, isOpen }) => {
                return (
                  <div
                    key={text}
                    className="menu__item noselect"
                    onClick={() => {
                      onMenuClose();
                      scroll && scroll?.scrollTo(href);
                    }}
                  >
                    {isMobile && (
                      <a
                        href={isMobile ? href : ""}
                        className="menu__item-link"
                      >
                        {text}
                      </a>
                    )}
                    {!isMobile && <p className="menu__item-link">{text}</p>}
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
            <div className="menu-footer">
              #TRIPCYCLOSET{new Date().getFullYear()}
            </div>
          </nav>
        </motion.div>
      </div>
    </MainNavWrapper>
  );
};

export default MainNav;
