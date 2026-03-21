# 🚀 Portfolio Automation Setup Guide

> **Complete step-by-step guide to build your personalized portfolio with automated GitHub Actions deployment**

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Quick Start (5 Minutes)](#quick-start-5-minutes)
3. [Avatar System](#avatar-system)
4. [Configuration Guide](#configuration-guide)
5. [GitHub Actions Setup](#github-actions-setup)
6. [Workflow Diagram](#workflow-diagram)
7. [Custom Photo Upload](#custom-photo-upload)
8. [Troubleshooting](#troubleshooting)
9. [Advanced Customization](#advanced-customization)

---

## 📦 Prerequisites

Before you start, ensure you have:

- **Git** - [Download](https://git-scm.com)
- **Node.js** ≥ 18.0 - [Download](https://nodejs.org/)
- **npm** ≥ 9.0 - (Included with Node.js)
- **GitHub Account** - [Create Free Account](https://github.com/signup)
- **Text Editor** - VS Code recommended ([Download](https://code.visualstudio.com))

### Verify Installation:
```bash
git --version
node --version
npm --version
```

---

## 🎯 Quick Start (5 Minutes)

### Step 1: Fork the Repository
1. Go to the portfolio repository (ask for access from repo owner)
2. Click **Fork** button (top-right corner)
3. This creates your personal copy

### Step 2: Clone Your Fork Locally
```bash
git clone https://github.com/YOUR-USERNAME/portfolio.git
cd portfolio
npm install
```

### Step 3: Edit Your Portfolio Config
Open `portfolio.config.json` and fill in your details:

```json
{
  "personal": {
    "firstName": "Your First Name",
    "lastName": "Your Last Name",
    "email": "your.email@example.com",
    "gender": "male",        // or "female"
    "avatarIndex": 1,        // 1-4 (default avatars)
    "customPhotoPath": null, // null = use default
    "title": "Your Title",
    "bio": "Your bio here..."
  },
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername"
    // ... add more
  },
  "projects": [
    {
      "title": "Project 1",
      "description": "...",
      "tags": ["React", "Node.js"]
      // ...
    }
  ]
}
```

### Step 4: Preview Locally
```bash
npm run dev
```
Visit http://localhost:5173

### Step 5: Deploy Automatically
```bash
git add .
git commit -m "Update portfolio config"
git push origin main
```

✨ **Done!** GitHub Actions will:
- ✅ Validate your config
- ✅ Build your portfolio
- ✅ Deploy to GitHub Pages

Your portfolio is now live at: `https://YOUR-USERNAME.github.io/portfolio/`

---

## 🎨 Avatar System

The portfolio includes a **gender-aware avatar system** with flexible options:

### Default Avatars (No Upload Needed)

#### Male Avatars (4 Options)
```
avatarIndex: 1 → Casual style
avatarIndex: 2 → Professional with glasses
avatarIndex: 3 → Artistic/creative
avatarIndex: 4 → Business formal
```

#### Female Avatars (4 Options)
```
avatarIndex: 1 → Long wavy hair
avatarIndex: 2 → Bun with professional look
avatarIndex: 3 → Curly hair (afro style)
avatarIndex: 4 → Braids with flower
```

### Using Default Avatars

In `portfolio.config.json`:
```json
{
  "personal": {
    "gender": "male",
    "avatarIndex": 2,
    "customPhotoPath": null
  }
}
```

### Custom Photo Upload (Optional)

If you want to use your own photo:

1. **Place your photo in the repo:**
   ```
   portfolio/
   └── uploads/
       └── my-photo.jpg
   ```

2. **Update config:**
   ```json
   {
     "personal": {
       "customPhotoPath": "./uploads/my-photo.jpg"
     }
   }
   ```

3. **On push to GitHub:**
   - GitHub Actions automatically processes your photo
   - Converts it to a stylized avatar using Sharp library
   - Saves to `/public/avatars/custom-avatar.png`
   - Your portfolio deploys with it!

---

## 📝 Configuration Guide

### portfolio.config.json Structure

```json
{
  "personal": {
    "firstName": "string",           // Required
    "lastName": "string",            // Required
    "initials": "string (2 chars)",  // e.g., "JD"
    "gender": "male|female",         // For default avatars
    "avatarIndex": 1-4,              // Which default avatar
    "customPhotoPath": null|string,  // Path to custom photo
    "title": "string",
    "subtitle": "string",
    "email": "email",                // Required
    "phone": "string",
    "location": "string",
    "bio": "string"
  },

  "social": {
    "github": "url",
    "linkedin": "url",
    "twitter": "url",
    "instagram": "url",
    "codepen": "url",
    "behance": "url"
  },

  "projects": [
    {
      "id": 1,
      "title": "string",
      "description": "string",
      "image": "/images/project.png",
      "tags": ["tag1", "tag2"],
      "link": "url (GitHub)",
      "liveDemo": "url (Live site)"
    }
  ],

  "skills": {
    "frontend": ["React", "TypeScript", ...],
    "backend": ["Node.js", "MongoDB", ...],
    "tools": ["Git", "Docker", ...],
    "design": ["Figma", ...]
  },

  "experience": [
    {
      "company": "string",
      "position": "string",
      "duration": "string (e.g., '2023 - Present')",
      "description": "string",
      "skills": ["skill1", "skill2"]
    }
  ],

  "about": {
    "headline": "string",
    "description": "string (can be multi-line)",
    "achievements": ["achievement1", "achievement2"]
  },

  "contact": {
    "headline": "string",
    "description": "string",
    "buttonText": "string",
    "ctaEmail": "email"
  },

  "deployment": {
    "type": "github-pages",
    "repository": "your-username/portfolio"
  }
}
```

### Example Complete Config

```json
{
  "personal": {
    "firstName": "Alice",
    "lastName": "Developer",
    "initials": "AD",
    "gender": "female",
    "avatarIndex": 2,
    "customPhotoPath": null,
    "title": "Full Stack Engineer",
    "subtitle": "Developer",
    "email": "alice@example.com",
    "phone": "+1 (555) 123-4567",
    "location": "San Francisco, CA",
    "bio": "Passionate about building scalable web applications and mentoring junior developers."
  },

  "social": {
    "github": "https://github.com/alice",
    "linkedin": "https://linkedin.com/in/alice",
    "twitter": "https://twitter.com/alice",
    "instagram": "https://instagram.com/alice"
  },

  "projects": [
    {
      "id": 1,
      "title": "E-Commerce Marketplace",
      "description": "Built a full-stack SaaS platform for online sellers with real-time inventory management.",
      "image": "/images/project1.png",
      "tags": ["React", "Node.js", "MongoDB", "Stripe"],
      "link": "https://github.com/alice/marketplace",
      "liveDemo": "https://marketplace-demo.vercel.app"
    }
  ],

  "skills": {
    "frontend": ["React", "TypeScript", "Next.js", "Tailwind CSS", "GSAP"],
    "backend": ["Node.js", "Express", "Python", "MongoDB", "PostgreSQL"],
    "tools": ["Git", "Docker", "AWS", "VS Code", "Figma"]
  },

  "experience": [
    {
      "company": "Tech Startup Inc",
      "position": "Senior Full Stack Developer",
      "duration": "2023 - Present",
      "description": "Leading frontend and backend development for 5+ client projects.",
      "skills": ["React", "Node.js", "AWS", "Team Leadership"]
    }
  ],

  "about": {
    "headline": "Building Digital Solutions",
    "description": "I'm a full-stack engineer with 5+ years of experience building web applications used by thousands. I love solving complex problems and creating intuitive user experiences.",
    "achievements": ["100+ Projects", "50+ Clients", "5+ Years Experience", "Open Source Contributor"]
  },

  "contact": {
    "headline": "Let's Connect",
    "description": "Have an exciting project? I'd love to discuss opportunities.",
    "buttonText": "Send Me an Email",
    "ctaEmail": "alice@example.com"
  },

  "deployment": {
    "type": "github-pages",
    "repository": "alice/portfolio"
  }
}
```

---

## 🤖 GitHub Actions Setup

### Automatic Setup (First Time)

1. **Push your config:**
   ```bash
   git add portfolio.config.json
   git commit -m "Add initial portfolio config"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Settings → Pages
   - Select "GitHub Actions" as source
   - Save

3. **Watch the workflow:**
   - Go to Actions tab
   - Click on latest workflow run
   - Monitor build progress

### What GitHub Actions Does Automatically

```yaml
✅ Triggers on push to main
   ↓
✅ Validates portfolio.config.json
   ↓
✅ Generates portfolioData.ts
   ↓
✅ Processes custom avatar (if provided)
   ↓
✅ Runs npm build
   ↓
✅ Deploys to GitHub Pages
   ↓
✅ Portfolio live in 2-5 minutes
```

---

## 📊 Workflow Diagram

```
USER EDITS portfolio.config.json
        ↓
   GIT PUSH TO MAIN
        ↓
┌─────────────────────────────────────────┐
│   GITHUB ACTIONS WORKFLOW TRIGGERED     │
├─────────────────────────────────────────┤
│                                         │
│ ✅ Job: Checkout Code                  │
│    └─ Downloads latest repo code      │
│                                         │
│ ✅ Job: Setup Node.js 18               │
│    └─ Prepares build environment      │
│                                         │
│ ✅ Job: Install Dependencies           │
│    └─ npm ci (installs from lockfile) │
│                                         │
│ ✅ Job: Validate Config                │
│    └─ Checks portfolio.config.json    │
│    └─ Against schema.json             │
│    └─ If INVALID → BUILD FAILS        │
│                                         │
│ ✅ Job: Generate Portfolio Data       │
│    └─ Reads portfolio.config.json     │
│    └─ Creates portfolioData.ts        │
│                                         │
│ ✅ Job: Process Avatar (Optional)     │
│    └─ If customPhotoPath provided     │
│    └─ Sharp converts photo → avatar   │
│    └─ Saved to /public/avatars/       │
│                                         │
│ ✅ Job: Build Project                  │
│    └─ npm run build (TypeScript+Vite)│
│    └─ Creates /dist folder           │
│    └─ If BUILD FAILS → STOP           │
│                                         │
│ ✅ Job: Upload Artifact               │
│    └─ Prepares /dist for deployment  │
│                                         │
│ ✅ Job: Deploy to GitHub Pages        │
│    └─ Pushes /dist to gh-pages       │
│    └─ Live at username.github.io     │
│                                         │
└─────────────────────────────────────────┘
        ↓
PORTFOLIO LIVE! ✨
(visible in 2-5 minutes)
```

### Timing

- **Simple update:** 2-3 minutes
- **With custom photo:** 3-5 minutes
- **Build failed:** Check logs in Actions tab

---

## 📸 Custom Photo Upload

### Supported Formats
- ✅ JPG / JPEG
- ✅ PNG
- ✅ WebP
- ✅ GIF (static)

### Recommended Specs
- **Size:** 500x500px minimum (square or portrait)
- **File size:** < 5MB
- **Format:** JPG or PNG (best compatibility)

### Step-by-Step Upload

1. **Prepare your photo:**
   - Use a headshot or personal photo
   - Preferably square or portrait
   - Good lighting recommended

2. **Add to repo:**
   ```
   portfolio/
   ├── uploads/
   │   ├── my-photo.jpg      ← Your photo here
   │   └── ...
   └── ...
   ```

3. **Update config:**
   ```json
   {
     "personal": {
       "customPhotoPath": "./uploads/my-photo.jpg"
     }
   }
   ```

4. **Commit and push:**
   ```bash
   git add portfolio.config.json uploads/my-photo.jpg
   git commit -m "Add custom avatar photo"
   git push origin main
   ```

5. **GitHub Actions processes it:**
   - Sharp library converts photo
   - Applies stylization + blur effect
   - Creates avatar
   - Deploys automatically

### Photo Processing Details

The automation applies:
- ✨ **Square crop** (200x200px)
- ✨ **Saturation boost** (20% more vibrant)
- ✨ **Brightness adjustment** (5% lighter)
- ✨ **Subtle blur** (modern look)
- ✨ **PNG compression** (85% quality)

Result: Beautiful, professional-looking avatar!

---

## 🐛 Troubleshooting

### Issue: Build Failed (GitHub Actions)

**Solution:**
1. Go to repository → Actions tab
2. Click failed workflow
3. Read error message
4. Common issues:

#### "Config validation failed"
```bash
npm run validate-config
```
Check `portfolio.config.json` syntax (JSON format)

#### "Cannot find module 'sharp'"
```bash
npm install sharp
git add package-lock.json
git push
```

#### "Avatar index out of range"
Check `avatarIndex` is 1-4, not 0 or 5

### Issue: Changes Not Showing

**Solution:**
1. Hard refresh browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
2. Clear GitHub Pages cache:
   - Wait 5 minutes
   - Check Actions workflow completed successfully
   - Check GitHub Pages settings

### Issue: GitHub Actions Not Triggering

**Make sure:**
1. You pushed to `main` branch (not another branch)
2. You modified `portfolio.config.json`, `src/` or other tracked files
3. `.github/workflows/build-deploy.yml` exists in repo

**Force trigger:**
- Go to Actions → Build & Deploy Portfolio
- Click "Run workflow"
- Select branch: main
- Click "Run workflow"

### Issue: Custom Photo Not Converting

**Check:**
1. Photo file exists at specified path
2. Path is relative: `./uploads/photo.jpg` (not absolute)
3. File format is JPG, PNG, or WebP (not GIF)
4. File size < 5MB
5. Run locally to debug:
   ```bash
   npm run process-avatar
   ```

---

## 🎨 Advanced Customization

### Modify Avatar Styles

Edit avatar SVG files:
```
src/avatars/male/avatar-m1.svg
src/avatars/female/avatar-f1.svg
```

Customize colors, shapes, accessories

### Change Build Settings

Edit `vite.config.ts` for build optimization

### Add Custom CSS

Edit component `.css` files in `src/components/styles/`

### Deploy to Alternative Hosts

Change in `portfolio.config.json`:
```json
{
  "deployment": {
    "type": "vercel",  // or "netlify"
    "repository": "your-username/portfolio"
  }
}
```

Then update `.github/workflows/build-deploy.yml` for your platform

---

## ✅ Checklist

- [ ] Node.js & npm installed
- [ ] Forked repository
- [ ] Cloned locally
- [ ] Edited portfolio.config.json
- [ ] Tested locally with `npm run dev`
- [ ] Enabled GitHub Pages
- [ ] Pushed changes to main
- [ ] Workflow completed successfully
- [ ] Portfolio visible at GitHub Pages URL
- [ ] Shared with friends! 🎉

---

## 📞 Support

- **Issues?** Check GitHub Actions logs
- **Questions?** Review this guide
- **Bugs?** Create an issue in repository

---

**Happy building! 🚀**

Your portfolio automation is ready to use.
Edit config, push to GitHub, and deploy automatically!
