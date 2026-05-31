# Michael — Frontend Engineer Portfolio

A modern portfolio built with Next.js, TypeScript and Framer Motion. Showcasing my work, experience and engineering values as a Frontend Engineer.

**Live:** [devmichael.netlify.app](https://devmichael.netlify.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS Variables |
| Animations | Framer Motion |
| Fonts | Syne, Inter, JetBrains Mono (via next/font/google) |
| Email | Resend API |
| Icons | React Icons |
| Deployment | Netlify |

---

## Features

- Dark and light mode with system preference detection and localStorage persistence
- Fully responsive across mobile, tablet and desktop
- Smooth scroll animations powered by Framer Motion
- Contact form connected to Resend API with success and error states
- Auto-playing project video demos
- Floating resume download button
- Marquee tech stack strip
- Accessible — keyboard navigable, focus styles, semantic HTML

---

## Project Structure

```
src/
└── app/
    ├── components/
    │   ├── Navbar.tsx
    │   ├── Hero.tsx
    │   ├── About.tsx
    │   ├── Projects.tsx
    │   ├── Experience.tsx
    │   ├── WhatIBring.tsx
    │   ├── Contact.tsx
    │   ├── Footer.tsx
    │   ├── ResumeDownloadButton.tsx
    │   └── ThemeProvider.tsx
    ├── api/
    │   └── contact/
    │       └── route.ts
    ├── globals.css
    ├── layout.tsx
    └── page.tsx
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/Badejomichael/my-portfolio.git

# Navigate into the project
cd my-portfolio

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the root of the project:

```env
RESEND_API_KEY=your_resend_api_key_here
```

Get your free API key at [resend.com](https://resend.com).

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Public Assets

Place the following files in the `/public` directory:

| File | Description |
|---|---|
| `pfp.png` | Your profile photo |
| `resume.pdf` | Your downloadable resume |
| `videos/earnid.mp4` | EarnID project demo |
| `videos/zarflow.mp4` | Zarflow project demo |
| `videos/kalshiforge.mp4` | KalshiForge project demo |
| `videos/claimflow.mp4` | ClaimFlow project demo |
| `videos/chefssecret.mp4` | Chef's Secret project demo |

---

## Sections

| Section | Description |
|---|---|
| Hero | Name, title, availability status, CTAs, socials |
| About | Bio, stats, education, tools stack |
| Projects | 5 projects with video demos, descriptions and links |
| Experience | Work history with impact-focused bullet points |
| What I Bring | Engineering values and principles |
| Contact | Contact form, email, WhatsApp, availability card |

---

## Deployment

This portfolio is deployed on Netlify.

1. Push your code to GitHub
2. Connect the repository to Netlify
3. Set the build command to `npm run build`
4. Set the publish directory to `.next`
5. Add your `RESEND_API_KEY` environment variable in Netlify dashboard

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built by [Michael](https://devmichael.netlify.app)