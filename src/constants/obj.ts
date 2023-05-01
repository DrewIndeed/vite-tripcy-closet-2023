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

/*
sizes="(max-width: 976px) 100vw, 976px"
srcset="
vertrical-tag_eqahk9_c_scale,w_320.webp 320w,
vertrical-tag_eqahk9_c_scale,w_976.webp 976w"
src="vertrical-tag_eqahk9_c_scale,w_976.webp"
alt="">


*/

export const locoOptions = {
  smooth: true,
  tablet: {
    smooth: false,
  },
  smartphone: {
    smooth: false,
  },
};
