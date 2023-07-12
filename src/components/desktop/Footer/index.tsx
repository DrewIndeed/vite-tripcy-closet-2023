import { footerCopyright } from "@constants/text";
import { FooterContent, FooterWrapper } from "./style";

const Footer = () => {
  return (
    <FooterWrapper data-scroll-section data-scroll-id="contacts">
      <FooterContent>
        <div id="content-wrapper">
          <div id="content">
            <div>A high-quality partnership clothing brand</div>
            <div>
              <span>tripcycloset@gmail.com</span>
              <span className="dots">•</span>
              <span>+84 38-343-0553</span>
              <span className="dots">•</span>
              <span>Ho Chi Minh City, VN</span>
              <span className="dots">•</span>
              <span id="policies">
                <a
                  target="_blank"
                  href="https://www.instagram.com/stories/highlights/17996784478883517/"
                >
                  Policies
                </a>
              </span>
            </div>
          </div>
          <div id="copyright" className="noselect">
            {footerCopyright}
          </div>
        </div>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
