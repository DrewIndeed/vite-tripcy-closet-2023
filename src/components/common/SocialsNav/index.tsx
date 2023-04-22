import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import useGlobalMedia from "@hooks/useGlobalMedia";
import anime from "animejs";
import { useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { SocialsNavWrapper } from "./style";

const SocialsNav = () => {
  const { MediaWrappers } = useGlobalMedia();
  useEffect(() => {
    anime({
      targets: ".icon-wrapper",
      opacity: [0, 1],
      translateX: [-100, 0],
      easing: "easeInOutSine",
      duration: 1200,
      delay: anime.stagger(100, { start: 5000 }),
    });
  }, []);

  return (
    <MediaWrappers.Tablet>
      <SocialsNavWrapper>
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
      </SocialsNavWrapper>
    </MediaWrappers.Tablet>
  );
};

export default SocialsNav;
