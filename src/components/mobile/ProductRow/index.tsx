import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ProductRowWrapper } from "./style";

type Props = { value: Record<string, any> };

const ProductRow = ({ value }: Props) => {
  const [curScrollX, setCurScrollX] = useState(0);
  const ref = useRef(null);
  const { scrollXProgress, scrollX } = useScroll({ container: ref });
  useMotionValueEvent(scrollX, "change", (latest) => {
    setCurScrollX(latest);
  });

  return (
    <ProductRowWrapper>
      <div className="product-row">
        <svg className="progress" width="50" height="50" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" pathLength="1" className="bg" />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            pathLength="1"
            className="indicator"
            style={{
              pathLength: curScrollX >= 0 ? scrollXProgress : 0,
            }}
          />
        </svg>

        <div className="scroll scrollbar-hide" ref={ref}>
          {value.photos.map((photo: Record<string, string>, idx: number) => (
            <motion.div
              className="product-card"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              key={"product-card-" + idx}
            >
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
