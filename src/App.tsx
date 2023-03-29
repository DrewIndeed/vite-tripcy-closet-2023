import Welcome from "@components/sections/Welcome";
import { common } from "@styles/themes";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useRef } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { ThemeProvider } from "styled-components";
import CustomCursor from "@components/common/CustomCursor";

function App() {
  const containerRef = useRef(null);
  return (
    <HelmetProvider>
      <Helmet>
        <title>Tripcy Closet</title>
        <link rel="icon" type="image/svg+xml" href="/imgs/logo-white.svg" />
      </Helmet>
      <ThemeProvider theme={common}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <CustomCursor />
          <main className="App" data-scroll-container ref={containerRef}>
            <Welcome />
            <Welcome />
          </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
