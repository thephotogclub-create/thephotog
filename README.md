# The Photog — Photography & Cinematography Club Website

A polished one-page website for The Photog club, built with React, Vite, Tailwind CSS, and Framer Motion. The site highlights the club’s mission, featured work, member leadership, activities, and join options.

---

## Features

- Hero section with club branding and strong visual identity
- About section describing the club’s purpose
- Gallery showcase with a lightbox experience
- Activities section for club events and initiatives
- Member spotlight for current and past leadership
- Join section with Instagram and WhatsApp connection options
- Responsive layout with motion-based section transitions

---

## Prerequisites

Make sure you have the following installed:

- Node.js 18 or newer
- pnpm 8 or newer

Install pnpm if needed:

```bash
npm install -g pnpm
```

---

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Start the development server

```bash
pnpm dev
```

No extra environment variables are required for normal local development. The project already configures the Vite base path and port in [vite.config.ts](vite.config.ts), so you can open http://localhost:5173 in your browser.

---

## Available Scripts

```bash
pnpm dev      # start the Vite development server
pnpm build    # create a production build
pnpm serve    # preview the production build locally
pnpm typecheck  # run TypeScript checks
```

---

## Project Structure

```text
src/
├── components/
│   ├── About.tsx
│   ├── Events.tsx
│   ├── Footer.tsx
│   ├── Gallery.tsx
│   ├── Hero.tsx
│   ├── JoinSection.tsx
│   ├── MemberSpotlight.tsx
│   ├── Navbar.tsx
│   └── ui/
├── pages/
│   └── Home.tsx
├── App.tsx
├── index.css
├── main.tsx
public/
├── images and QR assets
└── favicon and shared media
```

---

## Customization

### Update social links

Edit the join section in [src/components/JoinSection.tsx](src/components/JoinSection.tsx) to change the Instagram and WhatsApp links.

### Replace gallery and member images

Place new assets in [public](public) and update the relevant image references in the component files.

### Change visual theme

The global colors and styling tokens are defined in [src/index.css](src/index.css).

---

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS v4
- Framer Motion
- Wouter
- Lucide React
- Radix UI primitives

---

## License

This project is intended for club use and can be adapted freely.
