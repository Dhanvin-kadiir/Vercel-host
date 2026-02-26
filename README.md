# Dhanvin Kadiir S — Cybersecurity & Networking Portfolio

A fast, modern, and highly-customizable professional portfolio built with **React 18**, **Vite**, **TypeScript**, and **Tailwind CSS**. Designed specifically tailored for a Cybersecurity & Networking enthusiast, this portfolio features a hacker-aesthetic terminal loading screen, smooth page entry animations, and dynamic content management.

🔗 **Live Site:** [dhanvin-kadiirs.vercel.app](https://dhanvin-kadiirs.vercel.app/)

---

## ✨ Key Features

### 🖥️ UIverse Terminal Loading Sequence

A slick, CSS-animated terminal loader experience that greets the user:

- Pure CSS `typeAndDelete` and `blinkCursor` animations.
- Hacker-aesthetic dark layout with red/yellow/green macOS-style window controls.
- Seamless 2.6-second loading sequence that gracefully scales and fades out before revealing the portfolio.

### 🌊 Smooth Apple-Tier Reveal Animations

Once the terminal finishes loading, the entire portfolio site utilizes a `cubic-bezier(0.22, 1, 0.36, 1)` transition to slide up and fade into view smoothly.

### 🧩 100% Centralized JSON Content

All user data—skills, work experience, education, projects, blog posts, social links, and bio—lives in a single file: `src/data/content.json`.
**No React knowledge is required to update the portfolio content.**

### 🌗 Dark & Light Mode Support

Built-in theme toggle utilizing React `Context` and Tailwind CSS's native dark mode support.

### 📱 Fully Responsive

Mobile-first layout ensuring a perfect viewing experience on phones, tablets, and wide-screen desktops.

### 📬 Contact Form Webhook Automation

The Contact page features a working form that POSTs JSON payloads directly to any webhook or automation platform (like n8n, Make, or Zapier).
Configured via `.env`:

```env
VITE_CONTACT_WEBHOOK_URL=https://your-automation-webhook-url.com
```

### 🛡️ Edge Security Headers (`vercel.json`)

Production-ready security headers enforced at the Vercel edge to protect against clickjacking, XSS, and more:

- `Content-Security-Policy` (CSP)
- `Strict-Transport-Security` (HSTS)
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- strict `Referrer-Policy` and `Permissions-Policy`

---

## 🛠️ Tech Stack

| Component | Technology |
|---|---|
| **Framework** | React 18 |
| **Build Tool** | Vite 5 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Icons** | Lucide React |
| **Routing** | React Router DOM v7 |
| **Deployment** | Vercel |

---

## 🚀 Getting Started

To run this project locally, make sure you have Node.js installed.

1. **Clone the repository and install dependencies:**

   ```bash
   npm install
   ```

2. **Start the local development server:**

   ```bash
   npm run dev
   ```

3. **Build the optimized production bundle:**

   ```bash
   npm run build
   ```

---

## 🔧 How to Personalize This Portfolio

If you fork this repository, you can make it your own without touching the React code!
Simply edit `src/data/content.json`.

Available fields to edit in JSON:

- `personal`: Name, tagline, bio, email, phone number, location, and avatar image URL.
- `social`: URLs for your GitHub, LinkedIn, Twitter, etc.
- `skills`: Add skills with names, progress percentages, and categories (e.g., "Network Infrastructure", "Tools & Platforms").
- `projects`: Title, description, tags, image URLs, and GitHub/Live links.
- `experience` & `education`: Add your timeline history.

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── Header.tsx          ← Navigation & Theme toggle
│   ├── Footer.tsx          ← Dynamic footer
│   └── LoadingScreen.tsx   ← The UIverse Terminal loader CSS animations
├── contexts/
│   └── ThemeContext.tsx    ← Dark/Light mode state
├── data/
│   └── content.json        ← 📝 ALL PORTFOLIO TEXT DATA LIVES HERE
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Blog.tsx
│   └── Contact.tsx         ← Form submission webhook logic
├── App.tsx                 ← Layout wrap & slide-up transition logic
└── main.tsx
vercel.json                 ← Vercel Edge Security Headers
```

---
*Crafted with precision for modern web standards.*
