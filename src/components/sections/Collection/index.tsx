import { imgAttributes } from "@constants/obj";
import { stringRepeat } from "@utils";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CollectionWrapper } from "./style";

type CollectionProps = {
  id: string;
  name: string;
  subname: string;
  description: string;
  season: string;
  isActive: boolean;
  count: number;
};

const Collection = ({
  id,
  name,
  subname,
  description,
  season,
  isActive,
  count,
}: CollectionProps) => {
  const isEven = count % 2 === 0;
  return (
    <CollectionWrapper data-scroll-section data-scroll-id={id} id={id}>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: -10, opacity: 1 }}
        transition={{ duration: 0.8 }}
        // viewport={{ once: true }}
        id="subtitle"
      >
        {subname || "DISCOVER OUR NEW COLLECTION"}
      </motion.p>
      <p
        style={{ transform: isEven ? `translateX(-1000px)` : "none" }}
        id="title"
        data-scroll
        data-scroll-speed={isEven ? "8" : "-4"}
        data-scroll-direction="horizontal"
      >
        {stringRepeat(6, name)}
      </p>

      <div className="preview-photos">
        <motion.div
          className="col side-col-left"
          initial={{ x: -200, y: 200, opacity: 0, rotate: -15 }}
          exit={{ x: -200, y: 200, opacity: 0, rotate: -15 }}
          whileInView={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="img-container">
            <LazyLoadImage {...imgAttributes.banner.brandCardsPack} />
          </div>
        </motion.div>

        <motion.div
          className="col"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: -20, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="img-container center">
            <LazyLoadImage {...imgAttributes.banner.brandCardsPack} />
          </div>
        </motion.div>

        <motion.div
          className="col side-col-right"
          initial={{ x: 200, y: -200, opacity: 0, rotate: 15 }}
          exit={{ x: 200, y: -200, opacity: 0, rotate: 15 }}
          whileInView={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="img-container">
            <LazyLoadImage {...imgAttributes.banner.brandCardsPack} />
          </div>
        </motion.div>
      </div>
    </CollectionWrapper>
  );
};

export default Collection;
