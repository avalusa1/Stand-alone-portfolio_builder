import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { portfolioConfig } from "../data/portfolioData";

const Contact = () => {
  const { firstName, lastName, email, education } = portfolioConfig.personal;
  const { github, linkedin, twitter, instagram } = portfolioConfig.social;
  const year = new Date().getFullYear();

  const socialLinks = [
    { label: "Github", href: github },
    { label: "Linkedin", href: linkedin },
    { label: "Twitter", href: twitter },
    { label: "Instagram", href: instagram },
  ].filter((s) => s.href);

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href={`mailto:${email}`} data-cursor="disable">
                {email}
              </a>
            </p>
            {education && (
              <>
                <h4>Education</h4>
                <p>{education}</p>
              </>
            )}
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                data-cursor="disable"
                className="contact-social"
              >
                {label} <MdArrowOutward />
              </a>
            ))}
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by{" "}
              <span>
                {firstName} {lastName}
              </span>
            </h2>
            <h5>
              <MdCopyright /> {year}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
