import MobileBanner from "@components/mobile/Banner";
import MobileCollection from "@components/mobile/Collection";
import CollectionDetails from "@components/mobile/CollectionDetails";
import Banner from "@components/sections/Banner";
import Collection from "@components/sections/Collection";
import Intro from "@components/sections/Intro";
import Products from "@components/sections/Products";

import { collections, locoOptions } from "@constants/obj";
import { useData } from "@hooks/useData";
import useGlobalMedia from "@hooks/useGlobalMedia";
import { AppMainContent, MobileMainContent } from "@styles/global";
import "@styles/global.css";
import { common as commonTheme } from "@styles/themes";
import { isObjEmpty } from "@utils";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { Suspense, lazy, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import MediaQuery from "react-responsive";
import "react-tooltip/dist/react-tooltip.css";

const MainNav = lazy(() => import("@components/common/MainNav"));
const SocialsNav = lazy(() => import("@components/common/SocialsNav"));

function App() {
  // hooks
  const containerRef = useRef(null);
  const { booleans } = useGlobalMedia();
  const { currentCol } = useData();

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
        <MobileMainContent className="scrollbar-hide">
          {/* nav bars */}
          <Suspense fallback={<></>}>
            <MainNav isMobile />
          </Suspense>
          <MobileBanner />

          {/* Collections */}
          <div id="collections" />
          {Object.values(collections).map((collect, idx) => (
            <MobileCollection key={collect.id} {...collect} count={idx} />
          ))}

          {/* Selected collection's details and Products preview */}
          <MediaQuery maxWidth={1027}>
            {!isObjEmpty(currentCol) && <CollectionDetails />}
          </MediaQuery>
        </MobileMainContent>
      )}

      {/* desktop content */}
      {booleans.isLaptopMedium && (
        <LocomotiveScrollProvider
          watch={[]}
          options={locoOptions}
          containerRef={containerRef}
        >
          {/* nav bars */}
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

            {/* Selected collection's details and Products preview- COMING SOON */}
            {/* <Products /> */}
          </AppMainContent>
        </LocomotiveScrollProvider>
      )}
    </>
  );
}

export default App;
