import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import anime from "animejs";
import { useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { SocialsNavWrapper } from "./style";

const SocialsNav = () => {
  useEffect(() => {
    const animSocialsNav = () => {
      anime({
        targets: ".icon-wrapper",
        opacity: [0, 1],
        translateX: [-100, 0],
        easing: "easeInOutSine",
        duration: 1500,
        delay: anime.stagger(150, { start: 5500 }),
      });
    };

    // anim ahihi
    animSocialsNav();
  }, []);

  return (
    <SocialsNavWrapper>
      <a
        className="icon-wrapper"
        aria-label="Envelope icon wrapper"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=tripcycloset@gmail.com"
        target="_blank"
      >
        <EnvelopeIcon className="icons" />
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
      <div className="icon-wrapper" aria-label="Facebook icon wrapper">
        <SocialIcon
          url="https://www.facebook.com/tripcycloset"
          target="_blank"
          id="facebook-icon"
          network="facebook"
          label="Tripcy Closet's Facebook"
          fgColor="#ffffff"
          bgColor="#ffffff00"
          style={{ borderRadius: "50%" }}
        />
      </div>
    </SocialsNavWrapper>
  );
};

export default SocialsNav;
