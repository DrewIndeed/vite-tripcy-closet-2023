import { productCardsData } from "@constants/arr";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ProductsWrapper } from "./style";
import useGlobalMedia from "@hooks/useGlobalMedia";

const ProductCard = ({
  image,
  name,
  subname,
  idx,
}: Record<string, Record<string, string> | string | number>) => {
  const { sizes, srcSet, src, alt } = image as Record<string, string>;
  const { booleans } = useGlobalMedia();
  const mediumScroll = (idx as number) % 2 === 0 ? "-2" : "2";
  const targetScroll = booleans.isLaptopMedium
    ? `${((idx as number) + 1) * 1.5}`
    : mediumScroll;
  return (
    <div
      className="card"
      data-scroll
      data-scroll-speed={targetScroll}
      data-scroll-direction={
        booleans.isLaptopMedium ? "vertical" : "horizontal"
      }
    >
      <div className="item-wrapper">
        <LazyLoadImage {...{ sizes, srcSet, src, alt }} />
        <div className="img-overlay" />
        <div className="item-copy">
          <div className="item-name">{name as string}</div>
          <span className="item-subname">{subname as string}</span>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <ProductsWrapper data-scroll-section id="products">
      <div className="title">
        <p
          className="title-content"
          data-scroll
          data-scroll-speed="10"
          data-scroll-direction="horizontal"
        >
          {[...new Array(7).keys()].map(() => "Our products.").join(" - ")}
        </p>
      </div>
      <div className="cards noselect">
        {productCardsData.map(({ image, name, subname }, idx) => {
          return <ProductCard {...{ image, name, subname, idx }} />;
        })}
      </div>
    </ProductsWrapper>
  );
};

export default Products;
