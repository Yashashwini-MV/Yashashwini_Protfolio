# 🌟 Yashashwini MV — 3D Portfolio

A modern, visually stunning 3D portfolio website built with **React**, **Three.js**, and **React Three Fiber**.

---

## ✨ Features

- 🌌 **Animated 3D background** — floating geometric shapes, bioluminescent particles, grid plane
- 🧑‍💻 **3D Avatar** — custom Three.js avatar with glow rings, floating orbs, gentle animation
- ⚡ **Typewriter hero** — animated role text cycling through titles
- 📊 **Animated skill bars** — tabbed categories with smooth progress bars
- 🃏 **Flip-card projects** — 3D flip animation revealing live demo links
- 📅 **Timeline achievements** — alternating left/right timeline with glow dots
- 📬 **Contact form** — EmailJS integration with validation & success/error states
- 🌙 **Dark/Light mode toggle** — full theme switching
- 📱 **Fully responsive** — mobile-first, works on all screen sizes
- 🚀 **Loading screen** — animated rings + progress bar

---

## 🛠 Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 18 |
| 3D Engine | Three.js + React Three Fiber |
| 3D Helpers | @react-three/drei |
| Email | EmailJS |
| Fonts | Syne + DM Sans (Google Fonts) |
| Deployment | Vercel / Netlify |

---

## 📦 Installation

```bash
# 1. Clone or unzip the project
cd yashashwini-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

The site opens at **http://localhost:3000**

---

## 📧 EmailJS Setup (Contact Form)

1. Go to [https://www.emailjs.com](https://www.emailjs.com) and create a **free account**
2. Add an **Email Service** (connect your Gmail)
3. Create an **Email Template** — use these variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{message}}` — message body
   - `{{to_email}}` — your email (auto-filled as yashashwinimv0@gmail.com)
4. Open `src/components/Contact.js` and replace:
   ```js
   const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // Services tab
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // Email Templates tab
   const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // Account > API Keys
   ```

---

## 📸 Add Your Photo

Replace the placeholder in the About section:

1. Put your photo at `public/photo.jpg` (recommended: 400×400px, square)
2. Open `src/components/About.js`
3. Replace the `about__img-placeholder` div with:
   ```jsx
   <img src="/photo.jpg" alt="Yashashwini MV" className="about__img" />
   ```
4. Add to `About.css`:
   ```css
   .about__img {
     width: 100%; height: 100%;
     object-fit: cover;
     border-radius: var(--radius-lg);
   }
   ```

---

## 📄 Add Resume

1. Place your resume PDF at `public/resume.pdf`
2. The "Download Resume" and "Resume" buttons will automatically link to it

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
npm run build
vercel --prod
```
Or connect your GitHub repo to [vercel.com](https://vercel.com) for auto-deploy.

### Netlify
```bash
npm run build
# Drag and drop the `build/` folder to netlify.com
```

### GitHub Pages
```bash
npm install -g gh-pages
# Add to package.json: "homepage": "https://yourusername.github.io/yashashwini-portfolio"
npm run build
gh-pages -d build
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Loader.js / .css        — Loading screen
│   ├── Navbar.js / .css        — Navigation bar with theme toggle
│   ├── Hero.js / .css          — Hero section with typewriter
│   ├── Scene3D.js              — Three.js background scene
│   ├── Avatar3D.js             — 3D avatar model
│   ├── About.js / .css         — About + education section
│   ├── Skills.js / .css        — Tabbed skill bars
│   ├── Projects.js / .css      — Flip-card project showcase
│   ├── Achievements.js / .css  — Timeline achievements
│   ├── Contact.js / .css       — Contact form with EmailJS
│   └── Footer.js / .css        — Footer with socials
├── utils/
│   └── useScrollReveal.js      — Intersection Observer hook
├── styles/
│   └── globals.css             — Design tokens + utility classes
├── App.js                      — Root component, theme state
└── index.js                    — React entry point
```

---

## 🎨 Customization

### Change color palette
Edit CSS variables in `src/styles/globals.css`:
```css
:root {
  --accent-1: #00f5c8;   /* neon teal */
  --accent-2: #7b61ff;   /* electric violet */
  --accent-3: #ff6bff;   /* magenta glow */
}
```

### Add more projects
In `src/components/Projects.js`, add to the `projects` array:
```js
{
  id: 3,
  title: 'Your Project',
  emoji: '🔥',
  description: 'Your description...',
  tech: ['React', 'Node.js'],
  liveLink: 'https://yourproject.com',
  color: '#00c3ff',
  gradient: 'linear-gradient(135deg, #00c3ff, #7b61ff)',
}
```

---

## 👩‍💻 Built For

**Yashashwini MV** — CS Student at Cambridge Institute of Technology  
✉️ yashashwinimv0@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/yashashwini-mv-2b680b258/)

---

© 2025 Yashashwini MV
