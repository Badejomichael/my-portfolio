<div align="center">

# Michael Badejo — Frontend Developer Portfolio

**A sleek, animated, and performance-focused portfolio built with Next.js 14, TypeScript, and Framer Motion.**

[![Live Site](https://img.shields.io/badge/Live%20Site-Visit-5DE4FF?style=for-the-badge&logo=vercel&logoColor=black)](https://devmichael.netlify.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

</div>

---

## Overview

This is my personal portfolio. A dark-first, fully animated frontend showcase built to reflect the quality of work I deliver. It features smooth Framer Motion animations, a system-aware light/dark mode toggle, Web3 project highlights, and a working contact form.

---

## Features

- **Dark / Light Mode** — Defaults to the user's system preference on first load; persists choice to `localStorage`
- **Framer Motion Animations** — Page-level entrance animations, scroll-triggered reveals, and hover micro-interactions throughout
- **Responsive Design** — Mobile-first layout with a floating glassmorphism navbar and animated hamburger menu
- **Video Project Showcases** — Auto-playing project demo videos that trigger on scroll entry
- **Working Contact Form** — Sends messages via `/api/contact` with animated loading and success states
- **Resume Download** — Fixed floating button with tooltip for one-click CV access
- **Web3 Projects** — Live dApp links including RainbowKit wallet connection demos

---

## Tech Stack

| Category | Technologies |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | React Icons |
| Web3 | RainbowKit, Wagmi |
| Fonts | Inter, Space Grotesk (Google Fonts) |
| Deployment | Vercel / Netlify |

---

## Project Structure

```
my-portfolio/
├── app/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── ResumeDownloadButton.tsx
│   │   └── ThemeProvider.tsx
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── pfp.png
│   ├── resume.pdf
│   ├── project1.mp4
│   └── ...
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Badejomichael/my-portfolio.git

# Navigate into the project
cd your-portfolio-repo

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Create a `.env.local` file in the root if your contact form uses an email service (e.g. Resend, Nodemailer):

```env
RESEND_API_KEY=your_api_key_here
CONTACT_EMAIL=your@email.com
```

---

## Featured Projects

| Project | Description | Stack |
|---|---|---|
| **KalshiForge** | Prediction market simulation platform with financial-grade UX | Next.js, TypeScript, Recharts |
| **MicroKalshi** | Real-time animated event market dashboard | Next.js, TypeScript, Framer Motion |
| **ClaimFlow** | Web3 mock airdrop dApp with wallet connection | Next.js, RainbowKit, Wagmi |
| **Weather Dashboard** | Live weather data UI with responsive layout | React, API |
| **Chef's Secret** | Recipe explorer powered by Spoonacular API | HTML, CSS, Bootstrap, JS |

---

## Light / Dark Mode

Theme is powered by a custom `ThemeProvider` context:

- Reads `prefers-color-scheme` on first visit (system default)
- Persists user preference to `localStorage`
- Toggles `dark` class on `<html>` for Tailwind's class-based dark mode
- Toggle button in the navbar uses `BsSun` / `BsMoon` from `react-icons/bs`

Tailwind v4 dark mode is enabled via:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

---

## Deployment

This project deploys seamlessly to **Vercel**:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo directly in the [Vercel dashboard](https://vercel.com/dashboard) for automatic deployments on every push.

---

## Contact

- **WhatsApp** — [+234 905 326 7316](https://wa.me/+2349053267316)
- **GitHub** — [@Badejomichael](https://github.com/Badejomichael)
- **Twitter / X** — [@therepublikan_](https://x.com/therepublikan_)

---

<div align="center">

Built with focus and precision by **Michael Badejo** · © 2025

</div>
