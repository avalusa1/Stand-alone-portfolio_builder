# 🎉 Portfolio Automation System

> **Build & deploy your personalized portfolio with a single config file. Fully automated with GitHub Actions.**

<div align="center">

[![Deploy to GitHub Pages](https://github.com/your-username/portfolio/actions/workflows/build-deploy.yml/badge.svg)](https://github.com/your-username/portfolio/actions/workflows/build-deploy.yml)
![Node.js Version](https://img.shields.io/badge/node-18%2B-brightgreen)
![React Version](https://img.shields.io/badge/react-18.3.1-blue)
![License](https://img.shields.io/badge/license-MIT-green)

[📖 Full Setup Guide](#-quick-start) • [🎨 Avatar Gallery](#-avatar-system) • [🤖 How It Works](#-automation-workflow) • [❓ FAQ](#-faq)

</div>

---

## ⚡ Quick Start (5 Minutes)

### 1️⃣ Fork & Clone
```bash
git clone https://github.com/YOUR-USERNAME/portfolio.git
cd portfolio
npm install
```

### 2️⃣ Edit Your Config
Open `portfolio.config.json` and fill in your details:
```json
{
  "personal": {
    "firstName": "Your Name",
    "lastName": "Your Last Name",
    "email": "your@email.com",
    "gender": "male",
    "avatarIndex": 2,
    "customPhotoPath": null
  },
  "social": { ... },
  "projects": [ ... ],
  "skills": { ... }
}
```

### 3️⃣ Preview Locally
```bash
npm run dev
```
Visit http://localhost:5173

### 4️⃣ Deploy Automatically
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

✨ **Done!** Your portfolio deploys automatically to GitHub Pages in 2-5 minutes.

---

## 🎨 Avatar System

Choose from **8 pre-designed avatars** (4 male + 4 female) or upload your own photo!

### Male Avatars (Set `gender: "male"`)
| Index | Style | Notes |
|-------|-------|-------|
| 1 | **Casual** | Friendly, approachable |
| 2 | **Professional** | With glasses, business-ready |
| 3 | **Artistic** | Creative, styled |
| 4 | **Formal** | Business formal, tie |

### Female Avatars (Set `gender: "female"`)
| Index | Style | Notes |
|-------|-------|-------|
| 1 | **Long Hair** | Wavy, elegant |
| 2 | **Professional** | Bun, business style |
| 3 | **Afro** | Curly hair, modern |
| 4 | **Artistic** | Braids, vibrant |

### Custom Photo Upload

1. Add photo to `uploads/my-photo.jpg`
2. Update config:
```json
{
  "personal": {
    "customPhotoPath": "./uploads/my-photo.jpg"
  }
}
```
3. Push to GitHub → GitHub Actions automatically processes it! 🚀

---

## 🤖 Automation Workflow

```
Your Config (JSON)
      ↓
   Git Push
      ↓
GitHub Actions Triggered
      ↓
✅ Validate Config
      ↓
✅ Generate TypeScript Data
      ↓
✅ Process Custom Avatar (if provided)
      ↓
✅ Build Project (React + TypeScript)
      ↓
✅ Deploy to GitHub Pages
      ↓
🎉 Portfolio Live!
```

**Fully automated. Zero manual steps.** See [WORKFLOW.html](WORKFLOW.html) for interactive diagram.

---

## 📋 Configuration Reference

### Required Fields
```json
{
  "personal": {
    "firstName": "string",          // Your first name
    "lastName": "string",           // Your last name
    "email": "email",               // Your email address
    "gender": "male|female"         // For default avatars
  }
}
```

### Optional Fields
```json
{
  "personal": {
    "avatarIndex": 1-4,             // Which avatar (1-4)
    "customPhotoPath": null,        // Custom photo path
    "phone": "string",
    "location": "string",
    "bio": "string",
    "title": "string",
    "subtitle": "string"
  },
  "social": {
    "github": "url",
    "linkedin": "url",
    "twitter": "url",
    "instagram": "url"
  },
  "projects": [
    {
      "title": "string",
      "description": "string",
      "tags": ["tag1", "tag2"],
      "link": "url"
    }
  ],
  "skills": {
    "frontend": ["skill1", "skill2"],
    "backend": ["skill1", "skill2"],
    "tools": ["tool1", "tool2"]
  },
  "experience": [
    {
      "company": "string",
      "position": "string",
      "duration": "2023 - Present"
    }
  ]
}
```

**Full documentation:** See [SETUP.md](SETUP.md)

---

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| **React** | UI Framework | 18.3.1 |
| **TypeScript** | Type Safety | 5.5.3 |
| **Vite** | Build Tool | 5.4.1 |
| **GSAP** | Animations | 3.12.7 |
| **Tailwind CSS** | Styling | Latest |
| **Three.js** | 3D Graphics | Latest |
| **Sharp** | Image Processing | 0.33.0 |
| **GitHub Actions** | CI/CD | Free |
| **GitHub Pages** | Hosting | Free |

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Landing.tsx     # Hero section
│   │   ├── Navbar.tsx      # Navigation with avatar
│   │   ├── AvatarSelector.tsx
│   │   └── ...
│   ├── data/
│   │   └── portfolioData.ts # Auto-generated from config
│   ├── avatars/
│   │   ├── male/           # 4 male SVG avatars
│   │   └── female/         # 4 female SVG avatars
│   └── ...
├── public/
│   └── avatars/
│       └── custom-avatar.png # Auto-processed custom photos
├── scripts/
│   ├── validate-config.js   # JSON schema validation
│   ├── generate-config.js   # Config → TypeScript
│   └── process-avatar.js    # Photo → Avatar
├── .github/
│   └── workflows/
│       └── build-deploy.yml # GitHub Actions CI/CD
├── portfolio.config.json     # YOUR CONFIG FILE (edit this!)
├── config.schema.json        # Validation rules
├── SETUP.md                  # Setup guide
├── WORKFLOW.html             # Interactive workflow diagram
└── ...
```

---

## 🚀 Commands

```bash
# Install dependencies
npm install

# Development server (http://localhost:5173)
npm run dev

# Full build pipeline
npm run build

# Validate config
npm run validate-config

# Generate TypeScript from config
npm run generate-config

# Process custom avatar
npm run process-avatar

# Type checking
npm run check
```

---

## ✨ Features

- ✅ **Config-Driven** — No coding required, just fill JSON
- ✅ **Fully Automated** — GitHub Actions handles everything
- ✅ **Type Safe** — TypeScript + JSON Schema validation
- ✅ **Gender-Aware Avatars** — 8 pre-designed + custom upload
- ✅ **Image Processing** — Auto-converts photos to stylized avatars
- ✅ **Optimized Performance** — Vite bundling + minification
- ✅ **Free Hosting** — GitHub Pages (no credit card needed)
- ✅ **Free CI/CD** — GitHub Actions (free for public repos)
- ✅ **Animations** — Smooth GSAP animations
- ✅ **3D Graphics** — Three.js support
- ✅ **Responsive Design** — Works on all devices

---

## 🔧 Configuration Validation

The system automatically validates your `portfolio.config.json` against the schema:

```javascript
// Examples of what gets validated:
✅ "firstName" is required
✅ "email" must be valid email format
✅ "gender" must be "male" or "female"
✅ "avatarIndex" must be 1-4
✅ "social.github" must be valid URL
✅ All JSON syntax is correct
```

If validation fails, GitHub Actions shows the error. Fix it and push again!

---

## 📸 Custom Avatar Processing

When you upload a custom photo:

```
Your Photo (JPG/PNG)
     ↓
Square crop (200x200px)
     ↓
Saturation +20%
     ↓
Brightness +5%
     ↓
Blur effect (modern look)
     ↓
PNG export (optimized)
     ↓
Deployed with portfolio
```

**Supported formats:** JPG, PNG, WebP |  **Max size:** 5MB

---

## 🌍 Deploy Your Portfolio

### GitHub Pages (Included)
1. Go to Settings → Pages
2. Select "GitHub Actions" as source
3. Save
4. Done! Your portfolio is live at `https://your-username.github.io/portfolio/`

### Alternative Hosts
The automation supports deploying to:
- ✅ Vercel
- ✅ Netlify
- ✅ Custom domain
- ✅ AWS S3 + CloudFront

---

## 📊 GitHub Actions Workflow

The workflow runs automatically on:
- ✅ Push to `main` branch
- ✅ Changes to `portfolio.config.json`
- ✅ Manual trigger (Actions tab)

**What it does:**
1. Validates config
2. Generates TypeScript data
3. Processes custom avatar
4. Builds project
5. Deploys to GitHub Pages

**Duration:** 2-5 minutes (depending on if custom photo processing)

---

## 🔐 Making Your Repo Private

**For private portfolios:**
1. Repository Settings → Visibility → Private
2. Add team members as collaborators
3. They can edit config → auto-deploy!

**Note:** GitHub Pages still requires public visibility for free hosting. Upgrade to Pro for private GitHub Pages.

---

## 📖 Full Documentation

- **[SETUP.md](SETUP.md)** — Complete step-by-step guide
- **[WORKFLOW.html](WORKFLOW.html)** — Interactive workflow diagram
- **[portfolio.config.json](portfolio.config.json)** — Example config
- **[config.schema.json](config.schema.json)** — Validation rules

---

## ❓ FAQ

### Q: Do I need to know how to code?
**A:** No! Just edit `portfolio.config.json` in any text editor.

### Q: How long does deployment take?
**A:** 2-5 minutes. Longer if custom photo processing.

### Q: Can I use my own photo as avatar?
**A:** Yes! Just set `customPhotoPath` in config and GitHub Actions does the rest.

### Q: How much does hosting cost?
**A:** Free! GitHub Pages is free for public repos.

### Q: Can multiple people use this?
**A:** Yes! Invite them as collaborators. They can edit config and trigger deployments.

### Q: What if my config has errors?
**A:** GitHub Actions will fail with error message. Fix it and push again.

### Q: Can I customize the design?
**A:** Yes! React components are fully editable. See `src/components/`

### Q: How do I use a custom domain?
**A:** Go to Settings → Pages → Custom domain. See GitHub docs.

---

## 🤝 Contributing

Found a bug or want to improve? 
- Create an issue
- Submit a pull request
- Share suggestions

---

## 📞 Support

- **Errors?** Check [GitHub Actions logs](../../actions)
- **Questions?** See [SETUP.md](SETUP.md)
- **Still stuck?** Create an issue

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Credits

Built with:
- React & TypeScript
- Vite
- GSAP
- Three.js
- Sharp
- GitHub Actions

---

<div align="center">

**[📖 Read Full Setup Guide →](SETUP.md)**

**[🔄 View Workflow Diagram →](WORKFLOW.html)**

**Happy building! 🚀**

</div>
