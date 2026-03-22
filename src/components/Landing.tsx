import { useEffect } from "react";
import { portfolioConfig } from "../data/portfolioData";
import "./styles/Landing.css";

const Landing = () => {
  const { firstName, lastName, title, subtitle } = portfolioConfig.personal;
  
  // Set document title dynamically
  useEffect(() => {
    document.title = `${firstName} ${lastName} - ${title}`;
  }, [firstName, lastName, title]);
  
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {firstName.toUpperCase()}
              <br />
              <span>{lastName.toUpperCase()}</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Full Stack</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">{title.split(" ")[0]}</div>
              <div className="landing-h2-2">{subtitle}</div>
            </h2>
            <h2>
              <div className="landing-h2-info">{subtitle}</div>
              <div className="landing-h2-info-1">{title.split(" ")[0]}</div>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
