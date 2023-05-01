import Banner from "@components/sections/Banner";
import Intro from "@components/sections/Intro";
import Products from "@components/sections/Products";
import { locoOptions } from "@constants/obj";
import useGlobalMedia from "@hooks/useGlobalMedia";
import { AppWrapper, MobileMainContent } from "@styles/global";
import { common as commonTheme } from "@styles/themes";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { Suspense, lazy, useRef } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "react-tooltip/dist/react-tooltip.css";
import { ThemeProvider } from "styled-components";

const MainNav = lazy(() => import("@components/common/MainNav"));
const SocialsNav = lazy(() => import("@components/common/SocialsNav"));

function App() {
  const containerRef = useRef(null);
  const { booleans } = useGlobalMedia();

  return (
    <HelmetProvider>
      <Helmet>
        <title>Tripcy Closet</title>
      </Helmet>
      <ThemeProvider theme={commonTheme}>
        {/* website reveal */}
        <Intro
          svgColorHex={commonTheme.colors.typo1}
          textColorHex={commonTheme.colors.typo1}
          bgColorHex={commonTheme.colors.bg2}
        />

        {/* mobile content */}
        {!booleans.isLaptopMedium && (
          <MobileMainContent>
            <div style={{ opacity: 0.1 }}>Andrew Mobile</div>
            <div style={{ opacity: 0.2 }}>Andrew Mobile</div>
            <div style={{ opacity: 0.3 }}>Andrew Mobile</div>
            <div style={{ opacity: 0.4 }}>Andrew Mobile</div>
            <div style={{ opacity: 0.5 }}>Andrew Mobile</div>
            <div style={{ opacity: 0.6 }}>Andrew Mobile</div>
          </MobileMainContent>
        )}

        {/* desktop content */}
        {booleans.isLaptopMedium && (
          <LocomotiveScrollProvider
            watch={[]}
            options={locoOptions}
            containerRef={containerRef}
          >
            <AppWrapper>
              <Suspense fallback={<></>}>
                <MainNav />
                <SocialsNav />
              </Suspense>
              <div className="App" data-scroll-container ref={containerRef}>
                <Banner />
                {/* <Products /> */}
              </div>
            </AppWrapper>
          </LocomotiveScrollProvider>
        )}
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
