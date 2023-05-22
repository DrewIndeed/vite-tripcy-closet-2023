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
            <p>Replace & Return</p>
          </div>
        </div>

        {/* Contact Us */}
        <div id="contact-us">
          <p className="title">Contact Us</p>
          <div className="divider" />
          <div className="socials">
            <a
              className="icon-wrapper"
              aria-label="Envelope icon wrapper"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=tripcycloset@gmail.com"
              target="_blank"
            >
              <EnvelopeIcon className="icons" />
            </a>
            <a
              className="icon-wrapper"
              aria-label="Telephone icon wrapper"
              target="_blank"
              href="tel:+84383430553"
            >
              <PhoneIcon className="icons" />
            </a>
            <div className="icon-wrapper" aria-label="Instagram icon wrapper">
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
