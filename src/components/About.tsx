import "./styles/About.css";
import { portfolioConfig } from "../data/portfolioData";

const About = () => {
  const { description } = portfolioConfig.about;

  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">{description}</p>
      </div>
    </div>
  );
};

export default About;
