import { imgAttributes } from "@constants/obj";
import { actionBtnText, innerDesc, slogan } from "@constants/text";
import { useSmoothScrollTo } from "@hooks/useSmoothScrollTo";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MediaQuery from "react-responsive";
import toast from "react-simple-toasts";
import { MobileBannerWrapper } from "./style";

const MobileBanner = () => {
  const bind = useSmoothScrollTo("#home");

  return (
    <MobileBannerWrapper {...bind} id="home">
      <div className="content noselect">
        <motion.span
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 3 }}
          viewport={{ once: true }}
          id="stay"
        >
          Stay
        </motion.span>
        <motion.span
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 3 }}
          viewport={{ once: true }}
          id="stylish"
        >
          Stylish.
        </motion.span>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 3.6 }}
          viewport={{ once: true }}
          id="chic"
        >
          {slogan}.
        </motion.p>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 3.6 }}
          viewport={{ once: true }}
          id="inner-desc"
        >
          {innerDesc}
        </motion.p>
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 3.6 }}
          viewport={{ once: true }}
          id="show-more-btn-mobile"
          onClick={() => {
            toast("Coming Soon!", {
              duration: 2500,
              clickable: true,
              clickClosable: true,
              maxVisibleToasts: 1,
              render: (message) => <p>{message}</p>,
            });
          }}
        >
          {actionBtnText}
        </motion.button>
      </div>

      <MediaQuery minWidth={1024} maxWidth={1207}>
        <div className="andrew">
          <LazyLoadImage {...imgAttributes.banner.brandCardsPack} />
        </div>
      </MediaQuery>
    </MobileBannerWrapper>
  );
};

export default MobileBanner;
