import About from "@components/sections/About";
import Banner from "@components/sections/Banner";
import Intro from "@components/sections/Intro";
import Products from "@components/sections/Products";
import { AppWrapper } from "@styles/global";
import { common as commonTheme } from "@styles/themes";
import anime from "animejs";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { Suspense, lazy, useEffect, useRef } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from "react-locomotive-scroll";
import "react-tooltip/dist/react-tooltip.css";
import { ThemeProvider } from "styled-components";

const MainNav = lazy(() => import("@components/common/MainNav"));
const SocialsNav = lazy(() => import("@components/common/SocialsNav"));

function App() {
  const { scroll } = useLocomotiveScroll();
  const containerRef = useRef(null);
  useEffect(() => {
    anime({
      targets: "#intro",
      translateX: "-100%",
      easing: "easeInOutExpo",
      duration: 2000,
      delay: 2400,
    });
    anime({
      targets: "#intro-jump-1",
      translateX: "-100%",
      easing: "easeInOutExpo",
      duration: 1500,
      delay: 4000,
    });
    anime({
      targets: "#intro-jump-2",
      translateX: "-100%",
      easing: "easeInOutExpo",
      duration: 1200,
      delay: 4600,
    });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      scroll.destroy();
    }, 0);
    setTimeout(() => {
      scroll.init();
    }, 50);
    setTimeout(() => {
      scroll.update();
    }, 1000);
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Tripcy Closet</title>
      </Helmet>
      <ThemeProvider theme={commonTheme}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            tablet: {
              smooth: true,
            },
            smartphone: {
              smooth: true,
            },
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <AppWrapper>
            {/* INTRO AND TRANSITION */}
            <Intro
              svgColorHex={commonTheme.colors.typo1}
              textColorHex={commonTheme.colors.typo1}
              bgColorHex={commonTheme.colors.bg2}
            />
            <div
              className="jump"
              id="intro-jump-1"
              style={{
                backgroundColor: commonTheme.colors.typo1,
                width: "100vw",
                zIndex: 100,
                willChange: "transform",
              }}
            />
            <div
              className="jump"
              id="intro-jump-2"
              style={{
                backgroundColor: commonTheme.colors.sup3,
                width: "50vw",
                zIndex: 50,
                willChange: "transform",
              }}
            />

            {/* NAVIGATION */}
            <Suspense fallback={<></>}>
              <MainNav />
              <SocialsNav />
            </Suspense>

            {/* MAIN CONTENT */}
            <div className="App" data-scroll-container ref={containerRef}>
              {/* <Banner />
              <About />
              <Products /> */}
            </div>
          </AppWrapper>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
