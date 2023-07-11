import { useData } from "@hooks/useData";
import { isObjEmpty } from "@utils";
import { useAnimation } from "framer-motion";
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
  const { sizes, srcSet, src, alt } = photos[0];
  const isClicked = order === clickedCardOrder;

  return (
    <ProductCardWrapper
      initial={{ x: 100, opacity: 0 }}
      whileInView={{
        x: [-30, 20, 0],
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
        <LazyLoadImage {...{ sizes, srcSet, src, alt }} />
        <div className="item-copy"></div>
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
