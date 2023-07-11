import { Suspense, lazy, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import MediaQuery from "react-responsive";

import MobileBanner from "@components/mobile/Banner";
import MobileCollection from "@components/mobile/Collection";
import MobileCollectionDetails from "@components/mobile/CollectionDetails";
import MobileFooter from "@components/mobile/Footer";

import Banner from "@components/desktop/Banner";
import Collection from "@components/desktop/Collection";
import CollectionDetails from "@components/desktop/CollectionDetails";

import { collections, locoOptions } from "@constants/obj";
import { useData } from "@hooks/useData";
import useGlobalMedia from "@hooks/useGlobalMedia";

import { AppMainContent, MobileMainContent } from "@styles/global";
import { common as commonTheme } from "@styles/themes";
import { isObjEmpty } from "@utils";

import "@styles/global.css";
import "locomotive-scroll/dist/locomotive-scroll.css";

const Intro = lazy(() => import("@components/common/Intro"));
const MainNav = lazy(() => import("@components/common/MainNav"));
const SocialsNav = lazy(() => import("@components/common/SocialsNav"));

const App = () => {
  // hooks
  const containerRef = useRef(null);
  const { booleans } = useGlobalMedia();
  const { currentCol } = useData();

  return (
    <div id="app-wrapper">
      <Helmet>
        <title>Tripcy Closet</title>
      </Helmet>

      {/* website reveal */}
      <Suspense fallback={<></>}>
        <Intro
          svgColorHex={commonTheme.colors.typo1}
          textColorHex={commonTheme.colors.typo1}
          bgColorHex={commonTheme.colors.bg2}
        />
      </Suspense>

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
          <MediaQuery maxWidth={1208}>
            {!isObjEmpty(currentCol) && <MobileCollectionDetails />}
          </MediaQuery>

          <div id="contacts" />
          <MobileFooter />
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

            {/* Selected collection's details and Products preview */}
            <MediaQuery minWidth={1209}>
              {!isObjEmpty(currentCol) && <CollectionDetails />}
            </MediaQuery>
          </AppMainContent>
        </LocomotiveScrollProvider>
      )}
    </div>
  );
};

export default App;
