import { useData } from "@hooks/useData";
import { isObjEmpty } from "@utils";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  CollectionDetailsWrapper,
  ProductCardWrapper,
  ProductItemWrapper,
} from "./style";

type ProductCardType = {
  name: string;
  subname: string;
  photos: any[];
  onClick?: any;
  order?: number;
  isLastAnimDone?: boolean;
  setLastAnimDone?: any;
  clickedCardOrder?: number;
};

const ProductCard = ({
  name,
  subname,
  order,
  photos,
  isLastAnimDone,
  setLastAnimDone,
  clickedCardOrder,
  onClick,
}: ProductCardType) => {
  const isClicked = order === clickedCardOrder;
  const [curDisplayImg, setCurDisplayImg] = useState<number>(0);

  return (
    <ProductCardWrapper
      initial={{ x: 100, opacity: 0 }}
      whileInView={{
        x: [-15, 20, 0],
        opacity: [0.2, 0.6, 1],
      }}
      transition={{ duration: 1, delay: 0.1 * (order as number) }}
      onAnimationComplete={() => {
        if (order !== 5) return;
        setLastAnimDone(true);
      }}
      onClick={onClick}
      className={isClicked ? "anim-width" : "normal-width"}
    >
      <ProductItemWrapper isLastAnimDone={isLastAnimDone} isClicked={isClicked}>
        <LazyLoadImage {...photos[curDisplayImg]} />
        {isClicked && (
          <div className="item-copy">
            <div id="images">
              {photos.map((photo, photoIdx) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: [0, 1],
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1 * (photoIdx as number),
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setCurDisplayImg(photoIdx);
                    }}
                    className={`container ${
                      photoIdx !== curDisplayImg ? "darker" : "normal"
                    }`}
                    key={photo.src}
                  >
                    <LazyLoadImage {...photo} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
        <div className="img-overlay">
          <div className="item-order">{(order as number) + 1}</div>
          <div className="item-name">{name}</div>
        </div>
      </ProductItemWrapper>
    </ProductCardWrapper>
  );
};

const CollectionDetails = ({}) => {
  const [isLastAnimDone, setLastAnimDone] = useState<boolean>(false);
  const [clickedCardOrder, setClickedCardOrder] = useState<number>(-1);
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
      <div className="row">
        {Object.values(currentCol.allSets).map((productItem, order) => {
          const { name, subname, photos } = productItem as ProductCardType;
          return (
            <ProductCard
              {...{
                name,
                subname,
                order,
                photos,
                isLastAnimDone,
                setLastAnimDone,
                clickedCardOrder,
              }}
              key={name}
              onClick={() =>
                setClickedCardOrder((prevOrder) =>
                  prevOrder !== -1 ? (prevOrder === order ? -1 : order) : order
                )
              }
            />
          );
        })}
      </div>
    </CollectionDetailsWrapper>
  );
};

export default CollectionDetails;
