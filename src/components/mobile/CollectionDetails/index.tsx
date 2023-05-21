import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { CollectionDetailsWrapper } from "./style";
import { motion, useAnimation } from "framer-motion";
import { isObjEmpty } from "@utils";
import { useData } from "@hooks/useData";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CollectionDetails = () => {
  const { currentCol, getCollectionDataById } = useData();
  const collectionDetailsControl = useAnimation();

  useEffect(() => {
    // console.log("Here", currentCol);
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
      className="scrollbar-thin
        scrollbar-track-sup3 
        scrollbar-thumb-out3"
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

      {Object.entries(currentCol?.allSets).map(([key, value]) => (
        <div key={key} className="product-row">
          <div
            className="scroll     
            scrollbar-thin
            scrollbar-track-sup3 
            scrollbar-thumb-out3"
          >
            {(value as Record<string, any>).photos.map(
              (photo: Record<string, string>, idx: number) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  key={key + idx}
                  className="product-card"
                >
                  <div className="img-container">
                    <LazyLoadImage {...photo} />
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
