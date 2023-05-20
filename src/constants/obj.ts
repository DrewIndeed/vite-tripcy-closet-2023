import { athenaAllSetsPhotos } from "./collections";

export const locoOptions = {
  smooth: true,
  tablet: {
    smooth: false,
  },
  smartphone: {
    smooth: false,
  },
};

export const imgAttributes = {
  banner: {
    brandCardsPack: {
      width: "320px",
      height: "750px",
      sizes: "(max-width: 1046px) 100vw, 1046px",
      srcSet: `/imgs/banner/banner-cards-pack_r1.webp 320w,
       /imgs/banner/banner-cards-pack_r2.webp 759w,
       /imgs/banner/banner-cards-pack_r3.webp 1046w`,
      src: "/imgs/banner/banner-cards-pack_r3.webp 1046w",
      alt: "Banner: Tripcy branding cards pack",
    },
    verticalTag: {
      sizes: "(max-width: 976px) 100vw, 976px",
      srcSet: `/imgs/banner/vertrical-tag_r1.webp 320w,
      /imgs/banner/vertrical-tag_r2.webp 976w`,
      src: "/imgs/banner/vertrical-tag_r2.webp 976w",
      alt: "Banner: Tripcy vertical tag",
    },
  },
};

// VERY IMPORTANT
export const collections = {
  "col1-athena-sprsum23": {
    id: "col1-athena-sprsum23",
    name: "Athena Collection",
    subname: "",
    description: `The name Anthea has the meaning of "blooming", and "flowery". 
    The collection draws its design inspiration from the lightness of 
    flower petals meticulously expressed in organza silk. Our collection is designed to 
    make you feel confident, and empowered, and make you know that the most gorgeous 
    flower here is yourself. Whether you're dressing up for a special occasion or just
     running errands, our pieces are versatile enough to be worn in any setting`,
    season: "2023 spring/summer",
    isActive: true,
    isNew: true,
    allSets: {
      kayla: {
        name: "Testing",
        description: "",
        photos: athenaAllSetsPhotos.kayla,
      },
      envy: {
        name: "Testing",
        description: "",
        photos: athenaAllSetsPhotos.envy,
      },
      cici: {
        name: "Testing",
        description: "",
        photos: athenaAllSetsPhotos.cici,
      },
      doly: {
        name: "Testing",
        description: "",
        photos: athenaAllSetsPhotos.doly,
      },
      bloom: {
        name: "Testing",
        description: "",
        photos: athenaAllSetsPhotos.bloom,
      },
      flow: {
        name: "Testing",
        description: "",
        photos: athenaAllSetsPhotos.flow,
      },
    },
  },
};
