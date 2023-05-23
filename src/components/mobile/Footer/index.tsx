import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { SocialIcon } from "react-social-icons";
import { FooterWrapper } from "./style";

const Footer = () => {
  return (
    <FooterWrapper>
      <section id="content">
        {/* Legal */}
        <div id="legal">
          <p className="title">Policies</p>
          <div className="divider" />
          <div className="content">
            <p>Delivery Service</p>
            <p>Exchange & Return</p>
          </div>
        </div>

        {/* Contact Us */}
        <div id="contact-us">
          <p className="title">Contact Us</p>
          <div className="divider" />
          <div className="socials">
            <div className="contact-row">
              {/* <div className="icon-wrapper" aria-label="Envelope icon wrapper"> */}
              <EnvelopeIcon className="icons" />
              {/* </div> */}
              <p>tripcycloset@gmail.com</p>
            </div>

            <div className="contact-row">
              {/* <div className="icon-wrapper" aria-label="Telephone icon wrapper"> */}
              <PhoneIcon className="icons" />
              {/* </div> */}
              <p>+84 38-343-0553</p>
            </div>
          </div>
        </div>

        {/* Follow Us */}
        <div id="contact-us">
          <p className="title">Follow Us</p>
          <div className="divider" />
          <div className="socials">
            <div className="contact-row">
              <div
                className="icon-wrapper pointer"
                aria-label="Instagram icon wrapper"
              >
                <SocialIcon
                  url="https://www.instagram.com/tripcycloset/"
                  target="_blank"
                  id="insta-icon"
                  network="instagram"
                  label="Tripcy Closet's Instagram"
                  fgColor="#ffffff"
                  bgColor="#ffffff00"
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <p>@tripcycloset</p>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright at the very bottom */}
      <p id="copyright">
        © {new Date().getFullYear()} Tripcy Closet. All Rights Reserved.
      </p>
    </FooterWrapper>
  );
};

export default Footer;
