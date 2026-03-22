#!/usr/bin/env node

/**
 * Config Loader
 * Reads portfolio.config.json and generates src/data/portfolioData.ts
 * Runs at build time
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function generatePortfolioData() {
  try {
    const configPath = path.join(__dirname, "../portfolio.config.json");
    
    if (!fs.existsSync(configPath)) {
      console.error("❌ portfolio.config.json not found!");
      process.exit(1);
    }

    const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));

    // Determine avatar path based on gender and index
    const gender = config.personal.gender;
    const index = config.personal.avatarIndex;
    let avatarPath = `/avatars/${gender === "male" ? "male" : "female"}/avatar-${gender[0]}${index}.svg`;

    // If custom photo exists, use it
    if (config.personal.customPhotoPath) {
      avatarPath = "/avatars/custom-avatar.png";
    }

    // Generate TypeScript file
    const tsContent = `// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Generated from portfolio.config.json by scripts/generate-config.js
// Edit portfolio.config.json instead and run npm run build

export const portfolioConfig = {
  // Personal Information
  personal: {
    firstName: "${escapeQuotes(config.personal.firstName)}",
    lastName: "${escapeQuotes(config.personal.lastName)}",
    initials: "${config.personal.initials}",
    title: "${escapeQuotes(config.personal.title)}",
    subtitle: "${escapeQuotes(config.personal.subtitle)}",
    email: "${config.personal.email}",
    phone: "${config.personal.phone || ""}",
    location: "${config.personal.location || ""}",
    education: "${escapeQuotes(config.personal.education || "")}",
    resumeUrl: "${config.personal.resumeUrl || ""}",
    bio: "${escapeQuotes(config.personal.bio || "")}",
    avatar: "${avatarPath}",
    gender: "${gender}",
  },

  // Social Links
  social: {
    github: "${config.social.github || ""}",
    linkedin: "${config.social.linkedin || ""}",
    twitter: "${config.social.twitter || ""}",
    instagram: "${config.social.instagram || ""}",
    codepen: "${config.social.codepen || ""}",
    behance: "${config.social.behance || ""}",
  },

  // Featured Projects
  projects: ${JSON.stringify(config.projects, null, 2)},

  // Tech Stack / Skills
  skills: ${JSON.stringify(config.skills, null, 2)},

  // Experience
  experience: ${JSON.stringify(config.experience, null, 2)},

  // About Section
  about: {
    headline: "${escapeQuotes(config.about.headline || "")}",
    description: "${escapeQuotes(config.about.description || "")}",
    achievements: ${JSON.stringify(config.about.achievements || [], null, 2)},
  },

  // Contact / CTA
  contact: {
    headline: "${escapeQuotes(config.contact.headline || "")}",
    description: "${escapeQuotes(config.contact.description || "")}",
    buttonText: "${escapeQuotes(config.contact.buttonText || "Get In Touch")}",
    ctaEmail: "${config.contact.ctaEmail || ""}",
  },
};
`;

    const outputPath = path.join(__dirname, "../src/data/portfolioData.ts");
    fs.writeFileSync(outputPath, tsContent, "utf-8");

    console.log("✅ portfolioData.ts generated from portfolio.config.json");
    process.exit(0);
  } catch (error) {
    console.error("❌ Config generation failed:", error.message);
    process.exit(1);
  }
}

function escapeQuotes(str) {
  if (!str) return "";
  return str.replace(/"/g, '\\"').replace(/\n/g, "\\n");
}

generatePortfolioData();
