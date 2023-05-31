import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { getOS } from "@utils";
import { motion } from "framer-motion";
import { useCallback } from "react";
import { SocialIcon } from "react-social-icons";
import { FooterWrapper } from "./style";

const FOOTER_SECTIONS = [
  {
    id: "legal",
    title: "Policies",
    contentRender: () => {
      return (
        <div className="content">
          <p>Delivery Service</p>
          <p>Exchange & Return</p>
        </div>
      );
    },
  },
  {
    id: "contact-us",
    title: "Contact Us",
    contentRender: () => {
      return (
        <div className="socials">
          <div className="contact-row">
            <EnvelopeIcon className="icons" />
            <p>tripcycloset@gmail.com</p>
          </div>

          <div className="contact-row">
            <PhoneIcon className="icons" />
            <p>+84 38-343-0553</p>
          </div>
        </div>
      );
    },
  },
  {
    id: "follow-us",
    title: "Follow Us",
    contentRender: () => {
      const getOSString = useCallback(getOS, []);
      console.log(getOSString());
      return (
        <div className="socials">
          <div className="contact-row">
            <div className="icon-wrapper pointer">
              <SocialIcon
                url="instagram://user?username=tripcycloset"
                target="_blank"
                id="insta-icon"
                network="instagram"
                label="Tripcy Closet's Instagram"
                fgColor="#ffffff"
                bgColor="#ffffff00"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="icon-wrapper pointer">
              <SocialIcon
                url={
                  getOSString() === "iOS"
                    ? "fb://profile/110148568698120"
                    : "fb://page/110148568698120"
                }
                target="_blank"
                id="facebook-icon"
                network="facebook"
                label="Tripcy Closet's Facebook"
                fgColor="#ffffff"
                bgColor="#ffffff00"
                style={{ borderRadius: "50%" }}
              />
            </div>
            {/* <p>@tripcycloset</p> */}
          </div>
        </div>
      );
    },
  },
];

const Footer = () => {
  return (
    <FooterWrapper>
      {/* footer sections */}
      <section id="content">
        {FOOTER_SECTIONS.map((section: Record<string, any>, idx: number) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2 + (0.05 * idx + 1) }}
              key={section.id}
              id={section.id}
            >
              <p className="title">{section.title}</p>
              <div className="divider" />
              {section.contentRender()}
            </motion.div>
          );
        })}
      </section>

      {/* Copyright at the very bottom */}
      <p id="copyright">
        © {new Date().getFullYear()} Tripcy Closet. All Rights Reserved.
      </p>
    </FooterWrapper>
  );
};

export default Footer;
