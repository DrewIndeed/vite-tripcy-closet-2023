import MobileBanner from "@components/mobile/Banner";
import MobileCollection from "@components/mobile/Collection";
import Banner from "@components/sections/Banner";
import Collection from "@components/sections/Collection";
import Intro from "@components/sections/Intro";
import { collections, locoOptions } from "@constants/obj";
import { useData } from "@hooks/useData";
import useGlobalMedia from "@hooks/useGlobalMedia";
import { AppMainContent, MobileMainContent } from "@styles/global";
import "@styles/global.css";
import { common as commonTheme } from "@styles/themes";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { Suspense, lazy, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "react-tooltip/dist/react-tooltip.css";

const MainNav = lazy(() => import("@components/common/MainNav"));
const SocialsNav = lazy(() => import("@components/common/SocialsNav"));

function App() {
  const containerRef = useRef(null);
  const { booleans } = useGlobalMedia();
  const { currentCol, getCollectionDataById } = useData();

  useEffect(() => {
    getCollectionDataById("col1-athena-sprsum23");
  }, []);

  useEffect(() => {
    console.log(currentCol);
  }, [currentCol]);

  return (
    <>
      <Helmet>
        <title>Tripcy Closet</title>
      </Helmet>

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

          {/* Collections */}
          <div id="collections" />
          {Object.values(collections).map((collect, idx) => (
            <MobileCollection key={collect.id} {...collect} count={idx} />
          ))}
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
            {Object.values(collections).map((collect, idx) => (
              <Collection key={collect.id} {...collect} count={idx} />
            ))}
          </AppMainContent>
        </LocomotiveScrollProvider>
      )}
    </>
  );
}

export default App;
