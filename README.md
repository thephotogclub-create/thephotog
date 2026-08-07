# Photog — MVSR College Photography Club

Official website for the **Photog** photography club at MVSR College of Engineering. Built with React, Vite, Tailwind CSS, and Framer Motion.

---

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) v18 or higher
- [pnpm](https://pnpm.io/) v8 or higher

Install pnpm if you don't have it:
```bash
npm install -g pnpm
```

---

## Getting Started

### 1. Install dependencies

From inside the `photo-club` folder:

```bash
pnpm install
```

### 2. Set required environment variables

The dev server needs two environment variables. Create a `.env` file in the `photo-club` folder:

```env
PORT=3000
BASE_PATH=/
```

### 3. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Build for Production

```bash
pnpm build
```

The production-ready files will be output to the `dist/public/` folder. You can serve them with any static file host (Netlify, Vercel, GitHub Pages, etc.).

To preview the production build locally:

```bash
pnpm serve
```

---

## Project Structure

```
photo-club/
├── public/               # Static assets (images, favicon)
│   ├── hero.jpg
│   ├── gallery-1.jpg … gallery-8.jpg
│   └── member-1.jpg … member-3.jpg
├── src/
│   ├── components/       # Page sections
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Gallery.tsx
│   │   ├── Events.tsx
│   │   ├── MemberSpotlight.tsx
│   │   ├── JoinSection.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   └── Home.tsx      # Assembles all sections
│   ├── App.tsx           # Router setup
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles & color tokens
├── index.html
├── vite.config.ts
├── package.json
└── tsconfig.json
```

---

## Customisation

### Update Club Social Links

Open `src/components/JoinSection.tsx` and replace the placeholder values at the top of the file:

```ts
const INSTAGRAM_HANDLE = '@photog.mvsr';       // your Instagram username
const INSTAGRAM_URL    = 'https://www.instagram.com/photog.mvsr';  // full URL
const WHATSAPP_LINK    = 'https://chat.whatsapp.com/xxxxxx';       // your group invite link
```

### Swap Gallery Images

Drop new `.jpg` files into the `public/` folder and update the filenames in `src/components/Gallery.tsx`:

```ts
const images = [
  { src: 'your-photo.jpg', alt: 'Title', category: 'Portrait', photographer: 'Name', year: '2024' },
  // …
];
```

### Change Colours

All colours are defined as CSS variables in `src/index.css` under `:root`. The primary maroon is `--primary` and the off-white cream is `--secondary`.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| [React 18](https://react.dev/) | UI framework |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations & scroll effects |
| [Wouter](https://github.com/molefrog/wouter) | Lightweight client-side routing |
| [Lucide React](https://lucide.dev/) | Icons |
| [Playfair Display + Inter](https://fonts.google.com/) | Typography (loaded via Google Fonts) |

---

## License

MIT — free to use and modify for club purposes.
