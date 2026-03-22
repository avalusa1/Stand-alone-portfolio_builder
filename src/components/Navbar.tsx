import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { portfolioConfig } from "../data/portfolioData";
import AvatarSelector from "./AvatarSelector";
import "./styles/Navbar.css";

// ScrollSmoother is a GSAP Club plugin (trial not suitable for hosting).
// Graceful fallback: register only ScrollTrigger.
gsap.registerPlugin(ScrollTrigger);
export let smoother: any = null;

const Navbar = () => {
  const { initials, email } = portfolioConfig.personal;
  
  useEffect(() => {
    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          if (section && smoother?.scrollTo) {
            smoother.scrollTo(section, true, "top top");
          } else {
            // Fallback: standard scroll
            const target = document.querySelector(section || "");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }
        }
      });
    });
  }, []);

  return (
    <>
      <div className="header">
        <div className="navbar-left">
          <AvatarSelector size="sm" showBorder={true} />
          <a href="/#" className="navbar-title" data-cursor="disable">
            {initials}
          </a>
        </div>
        <a
          href={`mailto:${email}`}
          className="navbar-connect"
          data-cursor="disable"
        >
          {email}
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#profile" href="#profile">
              <HoverLinks text="PROFILE" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
