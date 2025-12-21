# BidEnterprise

Modern responsive enterprise landing page built with **React**, **Vite**, and **Tailwind CSS**.

## Requirements

- Node.js 18+ recommended
- npm (or your preferred package manager)

## Tech Stack

- React
- Vite
- Tailwind CSS
- lucide-react

## Install

```bash
npm install
```

## Run (development)

```bash
npm run dev
```

## Build

```bash
npm run build
```

Production files will be generated in the `dist/` folder. Rename `dist/` to `docs/` before commit.

## Preview production build

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

## Tests

No automated tests are configured yet.

## Deploy to GitHub Pages

1. Build the project:

```bash
npm run build
```

2. Rename `dist/` to `docs/`. Upload the contents of the `docs/` folder to your GitHub repository.
3. Set GitHub Pages source to the deployed branch/folder.

## Project structure

```
src/
  components/
    common/
      AnimatedCounter.jsx
      FeatureCard.jsx
      SectionTitle.jsx
    sections/
      CTA.jsx
      Features.jsx
      Footer.jsx
      Hero.jsx
      Navbar.jsx
      PlatformPreview.jsx
      Stats.jsx
      Testimonials.jsx
  hooks/
    useScrollReveal.js
  pages/
    Home.jsx
  styles/
    animations.css
  App.jsx
  index.css
  main.jsx
```
