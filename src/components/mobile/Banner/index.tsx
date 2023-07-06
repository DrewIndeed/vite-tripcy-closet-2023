import { imgAttributes } from "@constants/obj";
import { actionBtnText, innerDesc, slogan } from "@constants/text";
import { useSmoothScrollTo } from "@hooks/useSmoothScrollTo";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MediaQuery from "react-responsive";
// import toast from "react-simple-toasts";
import { MobileBannerWrapper } from "./style";

const MobileBanner = () => {
  const bind = useSmoothScrollTo("#home");

  return (
    <MobileBannerWrapper {...bind} id="home">
      <div className="content noselect">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 3.5 }}
          viewport={{ once: true }}
          id="stay"
        >
          Stay
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 3.5 }}
          viewport={{ once: true }}
          id="stylish"
        >
          Stylish.
        </motion.span>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 3.5 }}
          viewport={{ once: true }}
          id="chic"
        >
          {slogan}.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 3.5 }}
          viewport={{ once: true }}
          id="inner-desc"
        >
          {innerDesc}
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeInOut", delay: 3.5 }}
          viewport={{ once: true }}
          id="show-more-btn-mobile"
          onClick={() => {
            const collections = document.getElementById("collections");
            collections?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {actionBtnText}
        </motion.button>
      </div>

      <MediaQuery minWidth={1024} maxWidth={1207}>
        <div className="special-right-side">
          <LazyLoadImage {...imgAttributes.banner.brandCardsPack} />
        </div>
      </MediaQuery>
    </MobileBannerWrapper>
  );
};

export default MobileBanner;
