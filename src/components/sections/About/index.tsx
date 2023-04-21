import { AboutWrapper } from "./styles";

const About = () => {
  return (
    <AboutWrapper data-scroll-section id="about">
      <div>
        <h1
          data-scroll
          data-scroll-speed="-4"
          data-scroll-direction="horizontal"
        >
          About
        </h1>
      </div>
    </AboutWrapper>
  );
};

export default About;
