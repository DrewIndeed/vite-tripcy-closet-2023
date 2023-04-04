const MAIN_CURSOR = {
  dimensionValue: 30, // change this if needed
};

const SECOND_CURSOR = {
  dimensionValue: MAIN_CURSOR.dimensionValue * 2,
};

// screen sizes
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

// media queries
export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const common = {
  fontxs: "0.75em",
  fontsm: "0.875em",
  fontmd: "1em", // 1em = 16px
  fontlg: "1.25em",
  fontxl: "2em",
  fontxxl: "3em",
  fontxxxl: "5em",
  fontBig: "10em",
  cursor: {
    main: MAIN_CURSOR.dimensionValue,
    second: SECOND_CURSOR.dimensionValue,
    third: MAIN_CURSOR.dimensionValue / 10,
  },
  colors: {
    bg1: "#ffffff",
    bg2: "#f6f5f0",
    typo: "#332f2a",
    sup1: "#fffff3",
    sup2: "#efe7da",
    sup3: "#c1b6a3",
    out1: "#d7b891",
    out2: "#af562a",
    out3: "#a64d22",
  },
};

export const light = {};

export const dark = {};
