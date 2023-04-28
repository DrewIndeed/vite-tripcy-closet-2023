// screen sizes
export const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopM: "1208px", //custom value
  laptopL: "1440px",
  desktop: "2560px",
};

// media queries
export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopM: `(min-width: ${sizes.laptopM})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
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
  colors: {
    bg1: "#ffffff",
    bg2: "#f6f5f0",
    typo1: "#332f2a",
    typo2: "#8b8a87",
    typo3: "#a39a8f",
    sup1: "#fffff3",
    sup2: "#efe7da",
    sup3: "#c1b6a3",
    out1: "#d7b891",
    out2: "#8c8477",
    out3: "#605b52",
  },
};

export const light = {};

export const dark = {};
