import { portfolioConfig } from "../data/portfolioData";
import AvatarSelector from "./AvatarSelector";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaCodepen, FaBehance, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./styles/UserProfile.css";

const UserProfile = () => {
  const { personal, social, skills, experience, about } = portfolioConfig;

  return (
    <div className="profile-section" id="profile">
      <div className="profile-container">
        <h2 className="profile-title">User Profile</h2>

        {/* Profile Header with Avatar */}
        <div className="profile-header">
          <div className="profile-avatar">
            <AvatarSelector size="lg" showBorder={true} />
          </div>
          <div className="profile-info">
            <h1 className="profile-name">{personal.firstName} {personal.lastName}</h1>
            <h3 className="profile-role">{personal.title}</h3>
            <p className="profile-subtitle">{personal.subtitle}</p>
            <p className="profile-bio">{personal.bio}</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="profile-contact">
          <h3 className="section-heading">Contact Information</h3>
          <div className="contact-details">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href={`mailto:${personal.email}`}>{personal.email}</a>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>{personal.phone}</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>{personal.location}</span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="profile-social">
          <h3 className="section-heading">Social Links</h3>
          <div className="social-links">
            {social.github && (
              <a href={social.github} target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
                <span>GitHub</span>
              </a>
            )}
            {social.linkedin && (
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            )}
            {social.twitter && (
              <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter />
                <span>Twitter</span>
              </a>
            )}
            {social.instagram && (
              <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram />
                <span>Instagram</span>
              </a>
            )}
            {social.codepen && (
              <a href={social.codepen} target="_blank" rel="noopener noreferrer" className="social-link">
                <FaCodepen />
                <span>CodePen</span>
              </a>
            )}
            {social.behance && (
              <a href={social.behance} target="_blank" rel="noopener noreferrer" className="social-link">
                <FaBehance />
                <span>Behance</span>
              </a>
            )}
          </div>
        </div>

        {/* About Achievements */}
        <div className="profile-achievements">
          <h3 className="section-heading">{about.headline}</h3>
          <p className="about-description">{about.description}</p>
          <div className="achievements-grid">
            {about.achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <span className="achievement-text">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="profile-skills">
          <h3 className="section-heading">Technical Skills</h3>
          <div className="skills-container">
            <div className="skill-category">
              <h4 className="skill-category-title">Frontend</h4>
              <div className="skill-tags">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h4 className="skill-category-title">Backend</h4>
              <div className="skill-tags">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h4 className="skill-category-title">Tools</h4>
              <div className="skill-tags">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="profile-experience">
          <h3 className="section-heading">Professional Experience</h3>
          <div className="experience-list">
            {experience.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <h4 className="experience-position">{exp.position}</h4>
                  <span className="experience-duration">{exp.duration}</span>
                </div>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-description">{exp.description}</p>
                <div className="experience-skills">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="experience-skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
