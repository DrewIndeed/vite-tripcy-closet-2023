import { aboutUs1, aboutUs2 } from "@constants/text";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AboutWrapper } from "./style";

const AboutContent = ({
  isSecond,
  children,
}: {
  isSecond?: boolean;
  children: ReactNode;
}) => (
  <motion.p
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ ease: "easeOut", duration: 0.75, delay: isSecond ? 0.1 : 0 }}
    className="about-content"
  >
    {children}
  </motion.p>
);

const About = () => {
  return (
    <AboutWrapper data-scroll-section id="about">
      <div className="content">
        <div
          className="content__col col-1"
          data-scroll
          data-scroll-speed="-4"
          data-scroll-direction="horizontal"
        >
          <div className="mobile-content">
            <div className="container">
              <h1 className="title">About Us.</h1>
              <AboutContent>{aboutUs1}</AboutContent>
              <AboutContent isSecond>{aboutUs2}</AboutContent>
              <span className="quote-author">Di • Founder, CFO</span>
            </div>
          </div>
          <LazyLoadImage
            placeholder={
              <img src="/imgs/logo-white.svg" alt="Logo white placholder" />
            }
            id="tripcy-pack"
            sizes="(max-width: 1046px) 100vw, 1046px"
            srcSet="
            /imgs/about-parallax_r1.webp 320w,
            /imgs/about-parallax_r2.webp 759w,
            /imgs/about-parallax_r3.webp 1046w"
            src="/imgs/about-parallax_r3.webp 1046w"
            alt="Tripcy cards pack"
          />
        </div>
        <div className="content__col col-2">
          <h2 className="title" data-scroll data-scroll-speed="-2">
            About us.
          </h2>
          <AboutContent>{aboutUs1}</AboutContent>
          <AboutContent isSecond>{aboutUs2}</AboutContent>
          <span className="quote-author">Di • Founder, CFO</span>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default About;
