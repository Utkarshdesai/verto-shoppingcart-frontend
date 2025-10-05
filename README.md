# Simple Shopping Cart Frontend (React + Vite)

A React 19 application scaffolded with Vite 7 for fast development, featuring client-side routing, Tailwind CSS v4 for styling, icons via Lucide, toast notifications, and helpful development tooling.

## Tech Stack

- React 19 (`react`, `react-dom`)
- Vite 7 (`vite`, `@vitejs/plugin-react`)
- Styling: Tailwind CSS v4 (`tailwindcss`, `@tailwindcss/vite`)
- Routing: `react-router-dom`
- UI Utilities: `lucide-react` (icons), `react-hot-toast` (toasts), `react-loader-spinner` (loading states)
- Linting: ESLint 9 with React Hooks and React Refresh plugins

## Backend

- Repository: [Backend Repository](<add-your-backend-github-url-here>)
- Local base URL: `http://localhost:5000`

API endpoints used by this frontend:

- `GET /api/v1/product` — fetch product list
- `POST /api/v1/checkout` — submit cart for checkout

Run the backend locally per its README and ensure it listens on port `5000`, or update the frontend fetch URLs accordingly.



## Implemented Features (from `src/`)

- Data fetching (Home page)
  - Fetches products from `GET http://localhost:5000/api/v1/product`
  - Shows a full-screen loader while fetching
  - Gracefully handles errors and displays "No data found" when empty

- Product listing grid
  - Responsive grid layout using Tailwind utilities
  - Each product rendered via `ProductCard` with image, name, and price
  - "Add to Cart" button wires to app-level cart state

- Cart management
  - Items are added with quantity handling; repeat adds increase quantity
  - Quantities adjustable per item via `Add`/`Remove` buttons in `CartProduct`
  - Items are removed when quantity reaches zero
  - Cart state persisted in `localStorage` and hydrated on app load
  - Total amount computed and displayed with two-decimal precision

- Checkout flow (mock API)
  - Posts cart payload to `POST http://localhost:5000/api/v1/checkout`
  - Success feedback via toast notification

- Routing & navigation
  - Routes: `/` (Home), `/cart` (Cart), fallback `*` (Not Found)
  - `Navbar` with Home link and cart icon (`lucide-react`)

- Feedback & UX
  - Toasts configured bottom-right with custom styling
  - Full-screen loading overlay component (`Loader`)

- Styling
  - Tailwind CSS utility classes across pages and components

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+ (bundled with Node.js)

## Getting Started

1) Install dependencies
```bash
npm install
```

2) Start the development server with HMR
```bash
npm run dev
```
The app will print a local URL (typically `http://localhost:5173`).

## Available Scripts

- `npm run dev`: Start Vite dev server with Fast Refresh
- `npm run build`: Production build to `dist/`
- `npm run preview`: Preview the production build locally
- `npm run lint`: Run ESLint on the project

## Build & Preview

```bash
npm run build
npm run preview
```

## Project Structure

Top-level folders and files of interest:

- `index.html`: App entry HTML used by Vite
- `src/`: Application source code (components, routes, styles)
- `public/`: Static assets copied as-is to the build
- `vite.config.js`: Vite configuration
- `eslint.config.js`: ESLint configuration
- `package.json`: Scripts and dependencies



