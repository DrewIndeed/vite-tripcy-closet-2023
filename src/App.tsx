import About from "@components/sections/About";
import Banner from "@components/sections/Banner";
import Products from "@components/sections/Products";
import Intro from "@components/sections/Intro";
import { AppWrapper } from "@styles/global";
import { common as commonTheme } from "@styles/themes";
import anime from "animejs";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "react-tooltip/dist/react-tooltip.css";
import { Suspense, lazy, useEffect, useRef } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { ThemeProvider } from "styled-components";

const MainNav = lazy(() => import("@components/common/MainNav"));
const SocialsNav = lazy(() => import("@components/common/SocialsNav"));

function App() {
  const containerRef = useRef(null);
  // useEffect(() => {
  //   anime({
  //     targets: "#intro",
  //     translateX: "-100%",
  //     easing: "easeInOutExpo",
  //     duration: 2000,
  //     delay: 2400,
  //   });
  //   anime({
  //     targets: "#intro-jump-1",
  //     translateX: "-100%",
  //     easing: "easeInOutExpo",
  //     duration: 1500,
  //     delay: 4000,
  //   });
  //   anime({
  //     targets: "#intro-jump-2",
  //     translateX: "-100%",
  //     easing: "easeInOutExpo",
  //     duration: 1200,
  //     delay: 4600,
  //   });
  // }, []);

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
            {/* <Intro
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
              }}
            />
            <div
              className="jump"
              id="intro-jump-2"
              style={{
                backgroundColor: commonTheme.colors.sup3,
                width: "50vw",
                zIndex: 50,
              }}
            /> */}

            {/* NAVIGATION */}
            <Suspense fallback={<>Loading nav content...</>}>
              <MainNav />
              <SocialsNav />
            </Suspense>

            {/* MAIN CONTENT */}
            <div className="App" data-scroll-container ref={containerRef}>
              <Banner />
              <About />
              <Products />
            </div>
          </AppWrapper>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
