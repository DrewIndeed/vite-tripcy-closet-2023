import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { CollectionDetailsWrapper } from "./style";
import { motion, useAnimation } from "framer-motion";
import { isObjEmpty } from "@utils";
import { useData } from "@hooks/useData";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CollectionDetails = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { currentCol, getCollectionDataById } = useData();
  const collectionDetailsControl = useAnimation();

  useEffect(() => {
    if (!isObjEmpty(currentCol)) {
      collectionDetailsControl.start({
        left: 0,
        transition: {
          duration: 0.2,
        },
      });
      collectionDetailsControl.start({
        opacity: [0, 1],
        transition: {
          duration: 0.4,
          delay: 0.2,
        },
      });
      return;
    }
  }, [currentCol]);

  useEffect(() => {
    // target gallery from DOM
    const collectionVerticalScroll = document.querySelector(
      "#collection-details"
    );

    // calculate progress of snap scroll
    const handleScroll = () => {
      const sh = collectionVerticalScroll?.scrollHeight as number;
      const st = Math.floor(collectionVerticalScroll?.scrollTop as number);
      const ch = collectionVerticalScroll?.clientHeight as number;

      // if snap scroll has completed, calculate current page
      if (st % ch === 0) {
        // console.log({ sh, st, ch, test: st / ch + 1 });
        setCurrentPage(st / ch + 1);
      }
    };

    // add scroll event listener
    collectionVerticalScroll?.addEventListener("scroll", handleScroll);

    // clean up
    return () =>
      collectionVerticalScroll?.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBack = () => {
    collectionDetailsControl.start({
      opacity: [1, 0],
      transition: {
        duration: 0.4,
      },
    });
    collectionDetailsControl.start({
      left: "-100%",
      transition: {
        duration: 0.2,
        delay: 0.4,
      },
    });

    setTimeout(() => {
      getCollectionDataById("");
    }, 600);
  };

  if (isObjEmpty(currentCol)) return <></>;
  return (
    <CollectionDetailsWrapper
      animate={collectionDetailsControl}
      className="scrollbar-hide"
      id="collection-details"
    >
      <motion.div
        initial={{ opacity: 0, x: -100, rotate: 90 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1 }}
        className="menu-close"
        onClick={handleBack}
      >
        <ArrowLeftIcon className="menu-close-icon" />
      </motion.div>

      <div className="page-dots">
        {Object.keys(currentCol?.allSets).map((_, dotIdx) => {
          const dotPage = dotIdx + 1;
          return (
            <span
              key={`page-${dotPage}`}
              className={`dot ${currentPage === dotPage ? "active" : ""}`}
            />
          );
        })}
      </div>

      {Object.entries(currentCol?.allSets).map(([key, value]) => (
        <div key={key} className="product-row">
          <div className="scroll scrollbar-hide">
            {(value as Record<string, any>).photos.map(
              (photo: Record<string, string>, idx: number) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  key={key + idx}
                  className="product-card"
                >
                  <div className="img-container">
                    <LazyLoadImage
                      placeholderSrc={photo.src}
                      visibleByDefault
                      {...photo}
                    />
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      ))}
    </CollectionDetailsWrapper>
  );
};

export default CollectionDetails;
