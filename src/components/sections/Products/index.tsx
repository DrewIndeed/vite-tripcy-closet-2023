import { ProductsWrapper } from "./style";

type Props = {};

const Products = (props: Props) => {
  return (
    <ProductsWrapper data-scroll-section id="products">
      <div className="cards noselect">
        <div
          className="card"
          data-scroll
          
          data-scroll-speed="2"
          data-scroll-direction="horizontal"
        >
          <div className="item-wrapper">
            <img src="/imgs/samples/sample2.jpg" alt="" />
            <div className="img-overlay" />
            <div className="item-copy">
              <div className="item-name">
                CICI
                <br />
                CORSET
              </div>
              <span className="item-subname">w/ FLORAL SKIRT</span>
            </div>
          </div>
        </div>
        <div
          className="card"
          data-scroll
          
          data-scroll-speed="-2"
          data-scroll-direction="horizontal"
        >
          <div className="item-wrapper">
            <img src="/imgs/samples/sample3.jpg" alt="" />
            <div className="img-overlay" />
            <div className="item-copy">
              <div className="item-name">
                DOLLY
                <br />
                DRESS
              </div>
              <span className="item-subname">#INDIVIDUAL</span>
            </div>
          </div>
        </div>
        <div
          className="card"
          data-scroll
          
          data-scroll-speed="2"
          data-scroll-direction="horizontal"
        >
          <div className="item-wrapper">
            <img src="/imgs/samples/sample4.jpg" alt="" />
            <div className="img-overlay" />
            <div className="item-copy">
              <div className="item-name">
                KAYLA
                <br />
                BLOUSE
              </div>
              <span className="item-subname">w/ TAFRA SHORTS</span>
            </div>
          </div>
        </div>
        <div
          className="card"
          data-scroll
          
          data-scroll-speed="-2"
          data-scroll-direction="horizontal"
        >
          <div className="item-wrapper">
            <img src="/imgs/samples/sample5.jpg" alt="" />
            <div className="img-overlay" />
            <div className="item-copy">
              <div className="item-name">
                FLOWING
                <br />
                TOP
              </div>
              <span className="item-subname">#INDIVIDUAL</span>
            </div>
          </div>
        </div>
      </div>
    </ProductsWrapper>
  );
};

export default Products;
