export const imgAttributes = {
  banner: {
    mainModel: {
      width: "320px",
      height: "750px",
      sizes: "(max-width: 1352px) 100vw, 1352px",
      srcSet: `/imgs/main-model_r1.webp 320w, /imgs/main-model_r2.webp 706w, /imgs/main-model_r3.webp 1182w`,
      src: "/imgs/main-model_r3.webp",
      alt: "Female model looking directly outwards",
    },
    subModel: {
      width: "230px",
      height: "230px",
      sizes: "(max-width: 1334px) 100vw, 1334px",
      srcSet: `/imgs/main-submodel_r1.webp 320w, /imgs/main-submodel_r2.webp 706w, /imgs/main-submodel_r3.webp 1182w`,
      src: "/imgs/main-submodel_r3.webp 1182w",
      alt: "Female model standing and looking directly outwards",
    },
  },
  about: {
    mainBg: {
      sizes: "(max-width: 1046px) 100vw, 1046px",
      srcSet: `/imgs/about-parallax_r1.webp 320w, /imgs/about-parallax_r2.webp 759w, /imgs/about-parallax_r3.webp 1046w`,
      src: "/imgs/about-parallax_r3.webp 1046w",
      alt: "Tripcy branding cards pack",
    },
  },
};
