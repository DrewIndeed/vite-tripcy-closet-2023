import MobileBanner from "@components/mobile/Banner";
import Banner from "@components/sections/Banner";
import Collection from "@components/sections/Collection";
import Intro from "@components/sections/Intro";
import { collections } from "@constants/arr";
import { locoOptions } from "@constants/obj";
import useGlobalMedia from "@hooks/useGlobalMedia";
import { AppMainContent, MobileMainContent } from "@styles/global";
import "@styles/global.css";
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
            <Suspense fallback={<></>}>
              <MainNav isMobile />
            </Suspense>
            <MobileBanner />
            <div style={{ height: "100vh", opacity: 0.8 }}>Andrew Mobile</div>
          </MobileMainContent>
        )}

        {/* desktop content */}
        {booleans.isLaptopMedium && (
          <LocomotiveScrollProvider
            watch={[]}
            options={locoOptions}
            containerRef={containerRef}
          >
            <Suspense fallback={<></>}>
              <MainNav />
              <SocialsNav />
            </Suspense>

            <AppMainContent data-scroll-container ref={containerRef}>
              <Banner />

              {/* Collections */}
              <div id="collections" />
              {collections.map((collect, idx) => (
                <Collection key={collect.id} {...collect} count={idx} />
              ))}
            </AppMainContent>
          </LocomotiveScrollProvider>
        )}
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
