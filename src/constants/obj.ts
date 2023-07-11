import { athenaAllSetsPhotos } from "./cols";

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
    season: "S23 spring summer",
    isActive: true,
    isNew: true,
    favPhotoIndex: 0,
    allSets: {
      kayla: {
        name: "Kayla Blouse",
        subname: "w/ Tafta Short",
        photos: athenaAllSetsPhotos.kayla,
      },
      envy: {
        name: "Envy Dress",
        subname: "#Individual",
        photos: athenaAllSetsPhotos.envy,
      },
      cici: {
        name: "Cici Corset",
        subname: "w/ Floral Skirt",
        photos: athenaAllSetsPhotos.cici,
      },
      doly: {
        name: "Dolly Dress",
        subname: "#Individual",
        photos: athenaAllSetsPhotos.doly,
      },
      bloom: {
        name: "Blooming Dress",
        subname: "#Individual",
        photos: athenaAllSetsPhotos.bloom,
      },
      flow: {
        name: "Flowing Top",
        subname: "w/ White Pleated Skirt",
        photos: athenaAllSetsPhotos.flow,
      },
    },
  },
};

export const DELIVERY_POLICIES = {
  title: "Delivery Service",
  parts: [
    "TRIPCY provides nationwide delivery with duration and standard fees as follows:",
    "- Within Ho Chi Minh city: duration of 1-2 days with fixed fee at 25,000 VND",
    "- Other regions: duration of 3-4 days with fees of 30,000 - 35,000 VND.",
  ],
  notices: [
    `- If requested, TRIPCY will support you to use delivery service providers such as Grab, Ahamove, etc. However, any additional fees from those platforms will be included in your payment.`,
  ],
};

export const EXCHANGE_RETURN_POLICIES = {
  title: "Exchange & Return",
  parts: [
    "TRIPCY will accept your exchange or return for following cases:",
    "- The products have production errors.",
    "- The products are incorrectly delivered in terms of sizes, colors or desired sets.",
    "- The products are available for changing sizes if requested.",
    "- The products retent initial state as delivered, are fully tagged, are fully included with attachments if any, are not adjusted/fixed by any kind, with no abnormal smells, chemicals, or any signs of washing machine, ironing or being dressed.",
  ],
  notices: [
    "- Please kindly spend a little of your time recording and thoroughly checking your products when reveived.",
    "- If needed, please kindly contact TRIPCY directly through Instagram or Facebook messaging with your bill attched or order code (when delivered using services such as GHN, GHTK, ...), and your unboxing video in the first 24 hours receiving the products for earliest support.",
    "- Exchange or return duration will be expected to be within 3 days since TRIPCY receives your corresponding products.",
    "- In cases when you want to exchange for a different product, any additional fees will be included in your payment for any products with similar or higher prices.",
    "- In cases when products have production errors or incorrect code, sizes, or colors, TRIPCY will charge no fees.",
  ],
  fees: [],
};
