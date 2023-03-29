import CustomCursor from "@components/common/CustomCursor";
import Combinator from "@/components/sections/Combinator";
import { common } from "@styles/themes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Tripcy Closet</title>
        <link rel="icon" type="image/svg+xml" href="/imgs/logo-white.svg" />
      </Helmet>
      <ThemeProvider theme={common}>
        <CustomCursor />
        <main className="App">
          <Combinator />
        </main>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
