import { DataProvider } from "@context/data/Provider";
import "@styles/global.css";
import { common as commonTheme } from "@styles/themes";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={commonTheme}>
        <DataProvider>
          <App />
        </DataProvider>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
