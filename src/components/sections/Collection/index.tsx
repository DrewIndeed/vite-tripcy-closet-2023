import { stringRepeat } from "@utils";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Tooltip } from "react-tooltip";
import { CollectionWrapper } from "./style";

type CollectionProps = {
  id: string;
  name: string;
  subname: string;
  description: string;
  season: string;
  isActive: boolean;
  count: number;
  allSets: any;
};

const Collection = ({
  id,
  name,
  subname,
  season,
  isActive,
  count,
  allSets,
  description,
}: CollectionProps) => {
  const isEven = count % 2 === 0;
  const firstSetOfCollection = Object.values(allSets)[0] as Record<string, any>;

  if (!isActive) return <></>;
  return (
    <CollectionWrapper data-scroll-section data-scroll-id={id} id={id}>
      <motion.p
        id="subtitle"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: -10, opacity: 1 }}
        transition={{ duration: 0.8 }}
        // viewport={{ once: true }}
      >
        {subname || "DISCOVER OUR NEW COLLECTION"}
      </motion.p>

      <p
        id="title"
        style={{ transform: isEven ? `translateX(-1000px)` : "none" }}
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
            <LazyLoadImage
              {...firstSetOfCollection.photos[0]}
              visibleByDefault
            />
          </div>
        </motion.div>

        <motion.div
          className="col"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: -20, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="img-container center">
            <LazyLoadImage {...firstSetOfCollection.photos[1]} />
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
            <LazyLoadImage {...firstSetOfCollection.photos[2]} />
          </div>
        </motion.div>
      </div>

      <p className="season">{season}</p>
      <div className="see-more">
        <Tooltip id="collection-showmore-btn" />
        <button
          data-tooltip-id="collection-showmore-btn"
          data-tooltip-content="Coming Soon"
          data-tooltip-place="right"
          data-tooltip-delay-hide={500}
          className="arrow-button"
        >
          See More<span className="arrow"></span>
        </button>
      </div>
    </CollectionWrapper>
  );
};

export default Collection;
