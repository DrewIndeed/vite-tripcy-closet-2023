import { DELIVERY_POLICIES, EXCHANGE_RETURN_POLICIES } from "@constants/obj";
import { EnvelopeIcon, PhoneIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { getOS } from "@utils";
import { motion, useAnimation } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { FooterWrapper, PoliciesShow } from "./style";

const PolicyPicker = ({
  setViewerContent,
  onMenuOpen,
}: {
  setViewerContent: any;
  onMenuOpen: any;
}) => {
  return (
    <div className="content">
      <p
        onClick={() => {
          setViewerContent(DELIVERY_POLICIES);
          onMenuOpen();
        }}
      >
        Delivery Service
      </p>
      <p
        onClick={() => {
          setViewerContent(EXCHANGE_RETURN_POLICIES);
          onMenuOpen();
        }}
      >
        Exchange & Return
      </p>
    </div>
  );
};

const FOOTER_SECTIONS = [
  {
    id: "legal",
    title: "Policies",
    contentRender: (
      viewerContent: Record<string, string>,
      setViewerContent: any,
      onMenuOpen: any
    ) => <PolicyPicker {...{ viewerContent, setViewerContent, onMenuOpen }} />,
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
      return (
        <div className="socials">
          <div className="contact-row">
            <div className="icon-wrapper pointer">
              <SocialIcon
                url={
                  getOSString() === "iOS"
                    ? "instagram://user?username=tripcycloset"
                    : "https://www.instagram.com/_u/tripcycloset/"
                }
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
                    : getOSString() === "Android"
                    ? "fb://page/110148568698120"
                    : "https://www.facebook.com/tripcycloset"
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
  const policiesViewControls = useAnimation();
  const [viewerContent, setViewerContent] = useState<Record<string, any>>({});
  const isOpen = Object.keys(viewerContent).length > 0;

  useEffect(() => {
    const scrollingElement = document.scrollingElement || document.body;
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
  }, []);

  const onMenuOpen = useCallback(() => {
    if (!isOpen) {
      policiesViewControls.start({
        left: 0,
        transition: {
          duration: 0.2,
        },
      });
      policiesViewControls.start({
        opacity: [0, 1],
        transition: {
          duration: 0.4,
          delay: 0.2,
        },
      });
    }
  }, [isOpen]);

  const onMenuClose = useCallback(() => {
    if (isOpen) {
      {
        policiesViewControls.start({
          opacity: [1, 0],
          transition: {
            duration: 0.4,
          },
        });
        policiesViewControls.start({
          left: "-100%",
          transition: {
            duration: 0.2,
            delay: 0.4,
          },
        });
      }
    }
  }, [isOpen]);

  return (
    <FooterWrapper>
      {/* policies display */}
      <PoliciesShow
        show={Object.keys(viewerContent).length > 0}
        animate={policiesViewControls}
      >
        <div id="policy-wrapper">
          <XMarkIcon
            id="close-policy-icon"
            onClick={() => {
              setViewerContent({});
              onMenuClose();
            }}
          />
          <div id="policy-content">
            <p id="title">{viewerContent.title}</p>
            <div id="parts" className="scrollbar-none">
              {viewerContent?.parts?.map((part: string) => (
                <p key={part}>{part}</p>
              ))}

              {viewerContent?.notices?.length > 0 && (
                <div className="notice">
                  <span>Notice:</span>
                  {viewerContent.notices.map((notice: string) => (
                    <p key={notice}>{notice}</p>
                  ))}
                </div>
              )}

              {viewerContent?.fees?.length > 0 && (
                <div className="notice">
                  <span>Fees:</span>
                  {viewerContent.fees.map((fee: string) => (
                    <p key={fee}>{fee}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </PoliciesShow>

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
              {section.contentRender(
                viewerContent,
                setViewerContent,
                onMenuOpen
              )}
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
