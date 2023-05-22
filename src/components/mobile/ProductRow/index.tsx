import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ProductRowWrapper } from "./style";

type Props = { value: Record<string, any> };

const ProductRow = ({ value }: Props) => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <ProductRowWrapper>
      <div className="product-row">
        <svg className="progress" width="40" height="40" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="35" pathLength="1" className="bg" />
          <motion.circle
            cx="50"
            cy="50"
            r="35"
            pathLength="1"
            className="indicator"
            style={{
              pathLength: scrollXProgress,
            }}
          />
        </svg>

        <div className="title">
          {/* <div className="lines" /> */}
          <p className="title-text">{value.name}</p>
          {/* <div className="lines" /> */}
        </div>

        <div className="scroll scrollbar-hide" ref={ref}>
          {value.photos.map((photo: Record<string, string>, idx: number) => (
            <motion.div
              className="product-card"
              initial={{ opacity: 0, filter: "grayscale(1)" }}
              whileInView={{ opacity: 1, filter: "grayscale(0)" }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              key={"product-card-" + idx}
            >
              {idx !== value.photos.length - 1 && (
                <div className="swipe-more">
                  <ChevronDoubleLeftIcon className="icon" />
                  <p className="text">Swipe</p>
                </div>
              )}
              {idx === value.photos.length - 1 && (
                <div className="swipe-more">
                  <p className="text">Back</p>
                  <ChevronDoubleRightIcon className="icon" />
                </div>
              )}
              <div className="img-container">
                <LazyLoadImage
                  placeholderSrc={photo.src}
                  visibleByDefault
                  {...photo}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ProductRowWrapper>
  );
};

export default ProductRow;
