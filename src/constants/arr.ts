export const navItemsData = [
  {
    text: "Home.",
    isOpen: true,
    href: "#home",
    imgSrc: "/imgs/samples/sample2.jpg",
    imgSizes: "",
    imgSrcSet: "",
  },
  {
    text: "Collections.",
    isOpen: true,
    href: "#collections",
    imgSrc: "/imgs/samples/sample4.jpg",
    imgSizes: "",
    imgSrcSet: "",
  },
  // {
  //   text: "Products.",
  //   isOpen: true,
  //   href: "#products",
  //   imgSrc: "/imgs/samples/sample4.jpg",
  //   imgSizes: "",
  //   imgSrcSet: "",
  // },
  {
    text: "Reviews.",
    isOpen: false,
    href: "",
    imgSrc: "/imgs/samples/sample6.jpg",
    imgSizes: "",
    imgSrcSet: "",
  },
];

export const productCardsData = [
  {
    image: {
      sizes: "(max-width: 980px) 100vw, 980px",
      srcSet: `/imgs/cici_r1.webp 300w, 
      /imgs/cici_r2.webp 581w, 
      /imgs/cici_r3.webp 980w`,
      src: "/imgs/cici_r3.webp",
      alt: "Athena Collection: Cici Corset with Floral Shirt",
    },
    name: "CICI CORSET",
    subname: "w/ FLORAL SKIRT",
  },
  {
    image: {
      sizes: "(max-width: 986px) 100vw, 986px",
      srcSet: `/imgs/dolly-dress_r1.webp 300w,
      /imgs/dolly-dress_r2.webp 838w,
      /imgs/dolly-dress_r3.webp 986w`,
      src: "/imgs/dolly-dress_r3.webp",
      alt: "Athena Collection: Dolly Dress",
    },
    name: "DOLLY DRESS",
    subname: "#INDIVIDUAL",
  },
  {
    image: {
      sizes: "(max-width: 984px) 100vw, 984px",
      srcSet: `/imgs/kayla-blouse_r1.webp 300w,
      /imgs/kayla-blouse_r2.webp 867w,
      /imgs/kayla-blouse_r3.webp 984w`,
      src: "/imgs/kayla-blouse_r3.webp",
      alt: "Athena Collection: Kayla Blouse with Tafta Shorts",
    },
    name: "KAYLA BLOUSE",
    subname: "w/ TAFTA SHORTS",
  },
  {
    image: {
      sizes: "(max-width: 970px) 100vw, 970px",
      srcSet: `/imgs/flowing-top_r1.webp 300w,
      /imgs/flowing-top_r2.webp 716w,
      /imgs/flowing-top_r3.webp 970w`,
      src: "/imgs/flowing-top_r3.webp",
      alt: "Athena Collection: Flowing Top",
    },
    name: "FLOWING TOP",
    subname: "#INDIVIDUAL",
  },
];

export const collections = [
  {
    id: "col1-athena-sprsum23",
    name: "Athena Collection",
    subname: "",
    description: `The name Anthea has the meaning of "blooming", and "flowery". 
    The collection draws its design inspiration from the lightness of 
    flower petals meticulously expressed in organza silk. Our collection is designed to 
    make you feel confident, and empowered, and make you know that the most gorgeous 
    flower here is yourself. Whether you're dressing up for a special occasion or just
     running errands, our pieces are versatile enough to be worn in any setting`,
    season: "spring/summer 2023",
    isActive: true,
    previewPhotos: [{}, {}, {}],
  },

  {
    id: "col2-athena-sprsum23",
    name: "Andrew Collection",
    subname: "THIS IS ANOTHER COLLECTION",
    description: `The name Anthea has the meaning of "blooming", and "flowery". 
    The collection draws its design inspiration from the lightness of 
    flower petals meticulously expressed in organza silk. Our collection is designed to 
    make you feel confident, and empowered, and make you know that the most gorgeous 
    flower here is yourself. Whether you're dressing up for a special occasion or just
     running errands, our pieces are versatile enough to be worn in any setting`,
    season: "spring/summer 2023",
    isActive: true,
    previewPhotos: [{}, {}, {}],
  },
];
