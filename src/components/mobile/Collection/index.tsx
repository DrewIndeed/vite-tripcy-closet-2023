import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { MobileCollectionWrapper } from "./style";

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

const MobileCollection = ({
  id,
  subname,
  description,
  name,
  season,
  count,
  isActive,
  allSets,
}: CollectionProps) => {
  const isEven = count % 2 === 0;
  const firstSetOfCollection = Object.values(allSets)[0] as Record<string, any>;

  if (!isActive) return <></>;
  return (
    <MobileCollectionWrapper isEven={isEven} count={count} id={id}>
      <div className="bg-container" />

      <motion.div
        className="corner-blur-blob"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      <div className="text-content">
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
          transition={{ duration: 1, ease: "easeInOut" }}
          className="season"
        >
          __ {season}
        </motion.p>
      </div>
    </MobileCollectionWrapper>
  );
};

export default MobileCollection;
