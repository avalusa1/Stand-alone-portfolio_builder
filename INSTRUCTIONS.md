# 🚀 How to Build Your Own Portfolio

Welcome! This is a **zero-code automation system** where you customize your portfolio by editing **one simple JSON file** (`portfolio.config.json`). Everything else happens automatically.

---

## Table of Contents

1. [Quick Start (5 minutes)](#quick-start)
2. [Customization Guide](#customization-guide)
3. [Configuration Reference](#configuration-reference)
4. [Avatar System](#avatar-system)
5. [Deployment & Live Updates](#deployment--live-updates)
6. [Troubleshooting](#troubleshooting)

---

## Quick Start

### Step 1: Fork or Clone the Repository

```bash
# Option A: Clone (if you don't have GitHub)
git clone https://github.com/avalusa1/Stand-alone-portfolio_builder.git
cd Stand-alone-portfolio_builder

# Option B: Use your own fork on GitHub
# Go to https://github.com/avalusa1/Stand-alone-portfolio_builder
# Click "Fork" button → Creates your own copy
```

### Step 2: Edit `portfolio.config.json`

Open the file in any text editor (VS Code, Notepad, etc.):

```
Stand-alone-portfolio_builder/
├── portfolio.config.json       ← Edit this file!
├── public/
│   └── avatars/
└── src/
```

Replace placeholder data with your own:

```json
{
  "personal": {
    "firstName": "Your First Name",
    "lastName": "Your Last Name",
    "title": "Your Job Title",
    "email": "your.email@example.com",
    ...
  }
}
```

### Step 3: Push to GitHub

```bash
git add portfolio.config.json
git commit -m "Update portfolio with my information"
git push
```

**That's it!** GitHub Actions automatically:
- ✅ Validates your config file
- ✅ Generates your portfolio from config
- ✅ Processes your avatar
- ✅ Builds optimized assets
- ✅ Deploys to GitHub Pages (live in 2-5 minutes)

Your portfolio updates **live automatically** after each push! 🎉

---

## Customization Guide

### Personal Information

Edit the `personal` section in `portfolio.config.json`:

```json
{
  "personal": {
    "firstName": "John",
    "lastName": "Doe",
    "initials": "JD",
    "gender": "male",              // male or female
    "avatarIndex": 1,              // 1-4 (pre-made avatars)
    "customPhotoPath": null,       // See Avatar System section
    "title": "Full Stack Developer",
    "subtitle": "Engineer",
    "email": "john@example.com",
    "phone": "+1 (555) 123-4567",
    "location": "San Francisco, CA",
    "bio": "Your professional bio here..."
  }
}
```

**⚠️ Important:** The `firstName`, `lastName`, and `title` automatically update the browser tab title!

### Social Links

Add your social media profiles:

```json
{
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "twitter": "https://twitter.com/yourusername",
    "instagram": "https://instagram.com/yourusername",
    "codepen": "https://codepen.io/yourusername",
    "behance": "https://behance.net/yourusername"
  }
}
```

**Only include links you actually use** - leave others as empty strings `""`:

```json
{
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "",                 // Not using? Leave empty
    "twitter": "",
    ...
  }
}
```

### Projects

Add your best projects:

```json
{
  "projects": [
    {
      "id": 1,
      "title": "My E-Commerce App",
      "description": "Full-stack platform using React and Node.js",
      "image": "/images/project1.png",      // See Images section below
      "tags": ["React", "Node.js", "MongoDB"],
      "link": "https://github.com/yourusername/project1",
      "liveDemo": "https://project1-demo.com"  // Leave empty if no demo
    },
    {
      "id": 2,
      ...
    }
  ]
}
```

### Skills

Organize your skills by category:

```json
{
  "skills": {
    "frontend": ["React.js", "TypeScript", "Next.js", "Tailwind CSS"],
    "backend": ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    "tools": ["Git", "Docker", "AWS", "VS Code"],
    "other": ["System Design", "Team Leadership"]
  }
}
```

### Career/Work Experience

Add your professional experience:

```json
{
  "career": [
    {
      "id": 1,
      "company": "Tech Company Inc",
      "position": "Senior Software Engineer",
      "startDate": "2022-01",
      "endDate": "present",
      "description": "Led development of core platform features",
      "tags": ["React", "Node.js", "AWS"]
    }
  ]
}
```

---

## Configuration Reference

### Avatar System Options

You have **8 pre-made avatars** (4 male, 4 female):

```json
{
  "personal": {
    "gender": "male",          // male or female
    "avatarIndex": 1           // 1, 2, 3, or 4
  }
}
```

**Examples:**
- `gender: "male", avatarIndex: 1` → Random male avatar style 1
- `gender: "female", avatarIndex: 3` → Random female avatar style 3

### Custom Photo Avatar

Want to use your own photo? The system automatically:
- 📷 Crops to center (200×200 px)
- ✨ Applies professional styling (brightness, saturation effects)
- 🎨 Converts to optimized format

**Steps:**

1. Add your photo to the project folder (any location):
   ```
   your-photo.jpg  (any format: PNG, JPG, WEBP, etc)
   ```

2. Update config:
   ```json
   {
     "personal": {
       "customPhotoPath": "your-photo.jpg"
     }
   }
   ```

3. Push to GitHub:
   ```bash
   git add .
   git commit -m "Add custom avatar photo"
   git push
   ```

The system processes it automatically! ⚡

### Project Images

Add your project screenshots:

1. Add image files to `public/images/`:
   ```
   public/
   └── images/
       ├── project1.png
       ├── project2.jpg
       └── project3.webp
   ```

2. Reference in `portfolio.config.json`:
   ```json
   {
     "projects": [
       {
         "image": "/images/project1.png"
       }
     ]
   }
   ```

---

## Avatar System

### Pre-made Avatars

**Female Avatars (gender: "female"):**
- `avatarIndex: 1` → Professional, modern design
- `avatarIndex: 2` → Minimalist, clean look
- `avatarIndex: 3` → Casual, friendly style
- `avatarIndex: 4` → Creative, artistic design

**Male Avatars (gender: "male"):**
- `avatarIndex: 1` → Professional, modern design
- `avatarIndex: 2` → Minimalist, clean look
- `avatarIndex: 3` → Casual, friendly style
- `avatarIndex: 4` → Creative, artistic design

### Photo Processing

If you provide a custom photo:

```json
{
  "personal": {
    "customPhotoPath": "my-headshot.jpg"
  }
}
```

The system:
1. ✅ Detects the image automatically
2. ✅ Crops to square (200×200 px)
3. ✅ Applies professional styling filters
4. ✅ Optimizes file size
5. ✅ Generates `public/avatars/custom-avatar.png`

**Result:** Professional-looking avatar ready for deployment! 🎯

---

## Deployment & Live Updates

### Your Portfolio URL

After deployment, your portfolio is live at:

```
https://<your-username>.github.io/Stand-alone-portfolio_builder/
```

**Example:**
```
https://avalusa1.github.io/Stand-alone-portfolio_builder/
```

### Automatic Updates

**Every time you push code:**

```bash
git add portfolio.config.json
git commit -m "Update portfolio content"
git push
```

**Automatic workflow:**
1. ✅ GitHub detects push
2. ✅ Validates config file
3. ✅ Generates TypeScript from config
4. ✅ Processes images/avatars
5. ✅ Builds optimized assets
6. ✅ Deploys to GitHub Pages
7. 🚀 Live in **2-5 minutes**

### Monitor Deployment

Go to your GitHub repo → **Actions** tab:
- Green ✅ = Deployment successful
- Red ❌ = Error (check logs)

---

## Troubleshooting

### Issue: Changes not appearing after 10 minutes

**Solution:**
1. Hard refresh browser: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Clear browser cache: DevTools → Application → Clear Storage
3. Check GitHub Actions for errors: Repo → Actions tab

### Issue: Config validation fails

**Common causes:**
- Missing required fields (firstName, lastName, title, email)
- Invalid JSON syntax (missing quotes, commas)
- Wrong data types (email should be string, not object)

**Fix:**
1. Check error in GitHub Actions → Logs
2. Validate JSON: Paste in https://jsonlint.com/
3. Restore `portfolio.config.json` from backup if corrupted

### Issue: Avatar not showing

**Checklist:**
- Is `gender` field set to "male" or "female"?
- Is `avatarIndex` a number between 1-4?
- If custom photo: does file exist in project? Is path correct?
- Hard refresh browser (Ctrl + Shift + R)

### Issue: Images/Projects not showing

**Solution:**
1. Verify image files exist in `public/images/`
2. Double-check file paths in config (case-sensitive)
3. Ensure image format is supported (PNG, JPG, WEBP)
4. Check file size (< 5MB recommended)

### Issue: Performance/Loading Slow

**Normal behavior:** Initial load includes 3D graphics (Three.js), which may take 5-10 seconds first load. After that, subsequent visits are cached and faster.

**To speed up:** You can disable 3D graphics by editing `portfolio.config.json` (if that option exists in your version).

---

## Performance Notes

### First Load

- Initial load: 5-10 seconds (includes 3D graphics library)
- Subsequent visits: 1-2 seconds (cached)

### Optimization Strategy

The system uses:
- ✅ Code splitting (large 3D component loads separately)
- ✅ Lazy loading (components load only when needed)
- ✅ Image optimization (all assets compressed)
- ✅ CSS minification (styling optimized)

### What Takes Time?

The 3D tech stack visualization uses **Three.js** (professional 3D library). This is loaded lazy (only on desktop, only when scrolling into view) to minimize initial page load.

---

## Advanced: Custom Domain

### Connect Your Own Domain

1. Go to GitHub repo → **Settings** → **Pages**
2. Under "Custom domain", enter your domain (e.g., `yourname.dev`)
3. Click **Save**
4. Update DNS settings with your domain registrar

👉 [GitHub Pages Custom Domain Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## Support & Questions

### Files Structure

```
Stand-alone-portfolio_builder/
├── portfolio.config.json          ← EDIT THIS!
├── package.json
├── vite.config.ts
├── public/
│   ├── images/                    ← Add project images here
│   └── avatars/                   ← Avatar files
├── src/
│   ├── components/                ← React components
│   ├── data/
│   │   └── portfolioData.ts       ← AUTO-GENERATED from config
│   └── ...
├── scripts/
│   ├── validate-config.js        ← Validates your config
│   ├── generate-config.js        ← Generates TypeScript
│   └── process-avatar.js         ← Processes your avatar
└── .github/
    └── workflows/
        └── build-deploy.yml      ← Automation workflow
```

### How It Works (Behind the Scenes)

```
You edit portfolio.config.json
           ↓
You push to GitHub (git push)
           ↓
GitHub Actions triggers automatically
           ↓
Scripts validate & process config
           ↓
Build system creates optimized assets
           ↓
Deploys to gh-pages branch
           ↓
Your portfolio updates LIVE! 🚀
```

---

## Best Practices

✅ **DO:**
- Keep config file valid JSON
- Use realistic/professional picture for avatar
- Update regularly with new projects
- Test locally before major changes
- Keep social links current

❌ **DON'T:**
- Edit auto-generated files (`portfolioData.ts`)
- Manually edit `.github/workflows/`
- Break JSON structure
- Upload very large images (> 10MB)
- Commit sensitive information (API keys, passwords)

---

**Built with ❤️ for developers who want a beautiful portfolio without the hassle.**

Last updated: March 2026
