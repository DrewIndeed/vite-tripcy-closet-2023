const MAIN_CURSOR = {
  dimensionValue: 30, // change this if needed
};

const SECOND_CURSOR = {
  dimensionValue: MAIN_CURSOR.dimensionValue * 2,
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
  },
};

export const light = {};

export const dark = {};
