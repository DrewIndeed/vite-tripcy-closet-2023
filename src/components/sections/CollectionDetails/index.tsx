import { useData } from "@hooks/useData";
import { isObjEmpty } from "@utils";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { CollectionDetailsWrapper } from "./style";

const CollectionDetails = ({}) => {
  const { currentCol, getCollectionDataById } = useData();
  const collectionDetailsControl = useAnimation();

  // track current colleciton data to animate
  useEffect(() => {
    if (!isObjEmpty(currentCol)) {
      collectionDetailsControl.start({
        left: 0,
        opacity: [0, 1],
        transition: {
          duration: 0.8,
        },
      });
      return;
    }
  }, [currentCol]);

  return (
    <CollectionDetailsWrapper
      animate={collectionDetailsControl}
      className="scrollbar-hide"
      id="collection-details-desktop"
    >
      Andrew
    </CollectionDetailsWrapper>
  );
};

export default CollectionDetails;
