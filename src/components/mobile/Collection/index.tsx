import { useData } from "@hooks/useData";
import useGlobalMedia from "@hooks/useGlobalMedia";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Tooltip } from "react-tooltip";
import { MobileCollectionWrapper } from "./style";

type CollectionProps = {
  id: string;
  name: string;
  subname: string;
  description: string;
  favPhotoIndex: number;
  season: string;
  isActive: boolean;
  isNew: boolean;
  count: number;
  allSets: any;
};

const MobileCollection = ({
  id,
  subname,
  description,
  favPhotoIndex,
  name,
  season,
  count,
  isActive,
  isNew,
  allSets,
}: CollectionProps) => {
  const isEven = count % 2 === 0;
  const firstSetOfCollection = Object.values(allSets)[0] as Record<string, any>;

  // hooks
  const { booleans } = useGlobalMedia();
  const { getCollectionDataById } = useData();

  // methods
  const handleClick = () => getCollectionDataById(id);

  if (!isActive) return <></>;
  return (
    <MobileCollectionWrapper isEven={isEven} count={count} id={id}>
      <div className="bg-container">
        <LazyLoadImage {...firstSetOfCollection.photos[favPhotoIndex]} visibleByDefault />
      </div>

      {/* <motion.div
        className="corner-blur-blob bottom-left"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      <motion.div
        className="corner-blur-blob bottom-right"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      /> */}

      <div className="text-content">
        {isNew && (
          <motion.p
            initial={{ y: 50, opacity: 0, scaleY: 1.2 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="new-status"
          >
            Brand New
          </motion.p>
        )}
        <motion.p
          initial={{ y: 50, opacity: 0, scaleY: 1.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="title"
        >
          {name}
        </motion.p>
        <motion.p
          initial={{ y: 50, opacity: 0, scaleY: 1.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="season"
        >
          __ {season}
        </motion.p>
      </div>

      <div className="see-more">
        {booleans.isLaptop && <Tooltip id="collection-showmore-btn" />}
        <button
          data-tooltip-id="collection-showmore-btn"
          data-tooltip-content="Coming Soon"
          data-tooltip-place="right"
          className="arrow-button"
          onClick={!booleans.isLaptop ? handleClick : () => {}}
        >
          See More<span className="arrow"></span>
        </button>
      </div>
    </MobileCollectionWrapper>
  );
};

export default MobileCollection;
