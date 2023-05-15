import { actionBtnText, innerDesc, slogan } from "@constants/text";
import { useSmoothScrollTo } from "@hooks/useSmoothScrollTo";
import { useEffect } from "react";
import toast from "react-simple-toasts";
import { MobileBannerWrapper } from "./style";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { imgAttributes } from "@constants/obj";
import MediaQuery from "react-responsive";

const MobileBanner = () => {
  const bind = useSmoothScrollTo("#home");
  useEffect(() => {
    const animMobileBanner = () => {};

    // anim ahihi
    animMobileBanner();
  }, []);

  return (
    <MobileBannerWrapper {...bind} id="home">
      <div className="content">
        <span id="stay">Stay</span>
        <span id="stylish">Stylish.</span>
        <p id="chic">{slogan}.</p>
        <p id="inner-desc">{innerDesc}</p>
        <button
          id="show-more-btn-mobile"
          onClick={() => {
            toast("Coming Soon!", {
              clickable: true,
              clickClosable: true,
              render: (message) => <p>{message}</p>,
            });
          }}
        >
          {actionBtnText}
        </button>
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
